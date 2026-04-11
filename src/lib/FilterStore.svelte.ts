import { failureModes } from './data/failure-modes.js';
import type { CategoryId, Direction, FailureMode, Severity } from './types.js';

export type SortKey = 'number' | 'instances' | 'severity' | 'alpha';

const SEVERITY_RANK: Record<Severity, number> = {
	CRITICAL: 4,
	HIGH: 3,
	MEDIUM: 2,
	LOW: 1
};

export class FilterStore {
	// ── Filter state ──────────────────────────────────────────────────────────
	categories = $state<Set<CategoryId>>(new Set());
	directions = $state<Set<Direction>>(new Set());
	severities = $state<Set<Severity>>(new Set());
	searchQuery = $state('');
	sortKey = $state<SortKey>('number');

	// ── Derived ───────────────────────────────────────────────────────────────
	filtered = $derived.by(() => {
		let result = failureModes as FailureMode[];

		// Category filter
		if (this.categories.size > 0) {
			result = result.filter((fm) => this.categories.has(fm.category));
		}

		// Direction filter
		if (this.directions.size > 0) {
			result = result.filter((fm) => this.directions.has(fm.direction));
		}

		// Severity filter
		if (this.severities.size > 0) {
			result = result.filter((fm) => this.severities.has(fm.highestSeverity));
		}

		// Search filter — match against shortName, title, definition
		const q = this.searchQuery.trim().toLowerCase();
		if (q.length > 0) {
			result = result.filter(
				(fm) =>
					fm.shortName.toLowerCase().includes(q) ||
					fm.title.toLowerCase().includes(q) ||
					fm.definition.toLowerCase().includes(q) ||
					fm.id.toLowerCase().includes(q)
			);
		}

		// Sort
		return [...result].sort(this._comparator());
	});

	resultCount = $derived(this.filtered.length);

	hasActiveFilters = $derived(
		this.categories.size > 0 ||
			this.directions.size > 0 ||
			this.severities.size > 0 ||
			this.searchQuery.trim().length > 0
	);

	activeFilterCount = $derived(
		this.categories.size +
			this.directions.size +
			this.severities.size +
			(this.searchQuery.trim().length > 0 ? 1 : 0)
	);

	// ── Mutators ──────────────────────────────────────────────────────────────

	toggleCategory(id: CategoryId) {
		const next = new Set(this.categories);
		if (next.has(id)) {
			next.delete(id);
		} else {
			next.add(id);
		}
		this.categories = next;
	}

	toggleDirection(dir: Direction) {
		const next = new Set(this.directions);
		if (next.has(dir)) {
			next.delete(dir);
		} else {
			next.add(dir);
		}
		this.directions = next;
	}

	toggleSeverity(sev: Severity) {
		const next = new Set(this.severities);
		if (next.has(sev)) {
			next.delete(sev);
		} else {
			next.add(sev);
		}
		this.severities = next;
	}

	setSearch(q: string) {
		this.searchQuery = q;
	}

	setSort(key: SortKey) {
		this.sortKey = key;
	}

	reset() {
		this.categories = new Set();
		this.directions = new Set();
		this.severities = new Set();
		this.searchQuery = '';
		this.sortKey = 'number';
	}

	// ── Private ───────────────────────────────────────────────────────────────

	private _comparator(): (a: FailureMode, b: FailureMode) => number {
		switch (this.sortKey) {
			case 'instances':
				return (a, b) =>
					b.instanceCount - a.instanceCount || a.number - b.number;
			case 'severity':
				return (a, b) =>
					SEVERITY_RANK[b.highestSeverity] - SEVERITY_RANK[a.highestSeverity] ||
					a.number - b.number;
			case 'alpha':
				return (a, b) => a.shortName.localeCompare(b.shortName);
			default: // 'number'
				return (a, b) => a.number - b.number;
		}
	}
}
