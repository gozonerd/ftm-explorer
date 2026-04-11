import { describe, it, expect, beforeEach } from 'vitest';

/**
 * FilterStore tests — logic-only, no Svelte runtime required.
 * We test the filtering and sorting algorithms directly, not through the
 * $state/$derived reactive machinery (which requires a Svelte component context).
 */
import { failureModes } from './data/failure-modes.js';
import type { CategoryId, Direction, FailureMode, Severity } from './types.js';

// ── Pure filter logic (mirrored from FilterStore) ────────────────────────────

const SEVERITY_RANK: Record<Severity, number> = {
	CRITICAL: 4,
	HIGH: 3,
	MEDIUM: 2,
	LOW: 1
};

type SortKey = 'number' | 'instances' | 'severity' | 'alpha';

function applyFilters(
	fms: FailureMode[],
	opts: {
		categories?: Set<CategoryId>;
		directions?: Set<Direction>;
		severities?: Set<Severity>;
		search?: string;
		sort?: SortKey;
	}
): FailureMode[] {
	let result = fms as FailureMode[];

	if (opts.categories && opts.categories.size > 0) {
		result = result.filter((fm) => opts.categories!.has(fm.category));
	}
	if (opts.directions && opts.directions.size > 0) {
		result = result.filter((fm) => opts.directions!.has(fm.direction));
	}
	if (opts.severities && opts.severities.size > 0) {
		result = result.filter((fm) => opts.severities!.has(fm.highestSeverity));
	}
	const q = (opts.search ?? '').trim().toLowerCase();
	if (q.length > 0) {
		result = result.filter(
			(fm) =>
				fm.shortName.toLowerCase().includes(q) ||
				fm.title.toLowerCase().includes(q) ||
				fm.definition.toLowerCase().includes(q) ||
				fm.id.toLowerCase().includes(q)
		);
	}

	const key = opts.sort ?? 'number';
	return [...result].sort((a, b) => {
		switch (key) {
			case 'instances':
				return b.instanceCount - a.instanceCount || a.number - b.number;
			case 'severity':
				return (
					SEVERITY_RANK[b.highestSeverity] - SEVERITY_RANK[a.highestSeverity] ||
					a.number - b.number
				);
			case 'alpha':
				return a.shortName.localeCompare(b.shortName);
			default:
				return a.number - b.number;
		}
	});
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('filter logic — no filters', () => {
	it('returns all 104 FMs with no filters', () => {
		const result = applyFilters(failureModes, {});
		expect(result).toHaveLength(104);
	});

	it('default sort is by FM number ascending', () => {
		const result = applyFilters(failureModes, { sort: 'number' });
		expect(result[0].number).toBe(1);
		expect(result[103].number).toBe(104);
	});
});

describe('category filter', () => {
	it('filters to fabrication category only', () => {
		const result = applyFilters(failureModes, {
			categories: new Set<CategoryId>(['fabrication'])
		});
		expect(result.length).toBeGreaterThan(0);
		for (const fm of result) {
			expect(fm.category).toBe('fabrication');
		}
	});

	it('multiple categories: fabrication + quality returns union', () => {
		const result = applyFilters(failureModes, {
			categories: new Set<CategoryId>(['fabrication', 'quality'])
		});
		for (const fm of result) {
			expect(['fabrication', 'quality']).toContain(fm.category);
		}
		const fab = failureModes.filter((fm) => fm.category === 'fabrication').length;
		const qual = failureModes.filter((fm) => fm.category === 'quality').length;
		expect(result.length).toBe(fab + qual);
	});

	it('empty category set returns all 104', () => {
		const result = applyFilters(failureModes, { categories: new Set() });
		expect(result).toHaveLength(104);
	});
});

describe('direction filter', () => {
	it('filters to Direction A only', () => {
		const result = applyFilters(failureModes, {
			directions: new Set<Direction>(['A'])
		});
		expect(result).toHaveLength(103);
		for (const fm of result) {
			expect(fm.direction).toBe('A');
		}
	});

	it('filters to Direction B only — returns exactly FM-104', () => {
		const result = applyFilters(failureModes, {
			directions: new Set<Direction>(['B'])
		});
		expect(result).toHaveLength(1);
		expect(result[0].number).toBe(104);
	});

	it('both directions returns all 104', () => {
		const result = applyFilters(failureModes, {
			directions: new Set<Direction>(['A', 'B'])
		});
		expect(result).toHaveLength(104);
	});
});

describe('severity filter', () => {
	it('CRITICAL filter returns only CRITICAL FMs', () => {
		const result = applyFilters(failureModes, {
			severities: new Set<Severity>(['CRITICAL'])
		});
		expect(result.length).toBeGreaterThan(0);
		for (const fm of result) {
			expect(fm.highestSeverity).toBe('CRITICAL');
		}
	});

	it('LOW filter returns only LOW FMs', () => {
		const result = applyFilters(failureModes, {
			severities: new Set<Severity>(['LOW'])
		});
		expect(result.length).toBeGreaterThan(0);
		for (const fm of result) {
			expect(fm.highestSeverity).toBe('LOW');
		}
	});

	it('all severities combined returns all 104', () => {
		const result = applyFilters(failureModes, {
			severities: new Set<Severity>(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'])
		});
		expect(result).toHaveLength(104);
	});
});

describe('search filter', () => {
	it('search for "fabricat" matches FMs with fabrication in shortName/title/def', () => {
		const result = applyFilters(failureModes, { search: 'fabricat' });
		expect(result.length).toBeGreaterThan(0);
		for (const fm of result) {
			const matches =
				fm.shortName.toLowerCase().includes('fabricat') ||
				fm.title.toLowerCase().includes('fabricat') ||
				fm.definition.toLowerCase().includes('fabricat');
			expect(matches).toBe(true);
		}
	});

	it('search by FM ID "FM-018" returns exactly FM-018', () => {
		const result = applyFilters(failureModes, { search: 'FM-018' });
		expect(result).toHaveLength(1);
		expect(result[0].number).toBe(18);
	});

	it('search is case-insensitive', () => {
		const lower = applyFilters(failureModes, { search: 'western' });
		const upper = applyFilters(failureModes, { search: 'WESTERN' });
		expect(lower.length).toBe(upper.length);
	});

	it('empty/whitespace search returns all 104', () => {
		const result = applyFilters(failureModes, { search: '   ' });
		expect(result).toHaveLength(104);
	});

	it('non-matching search returns empty array', () => {
		const result = applyFilters(failureModes, { search: 'zzz_no_match_xyz' });
		expect(result).toHaveLength(0);
	});
});

describe('sort keys', () => {
	it('sort by instances: FM-018 first (12 instances)', () => {
		const result = applyFilters(failureModes, { sort: 'instances' });
		expect(result[0].number).toBe(18);
	});

	it('sort by severity: first result is CRITICAL', () => {
		const result = applyFilters(failureModes, { sort: 'severity' });
		expect(result[0].highestSeverity).toBe('CRITICAL');
	});

	it('sort by alpha: results are in ascending shortName order', () => {
		const result = applyFilters(failureModes, { sort: 'alpha' });
		for (let i = 0; i < result.length - 1; i++) {
			expect(result[i].shortName.localeCompare(result[i + 1].shortName)).toBeLessThanOrEqual(0);
		}
	});

	it('sort by number: strictly ascending', () => {
		const result = applyFilters(failureModes, { sort: 'number' });
		for (let i = 0; i < result.length - 1; i++) {
			expect(result[i].number).toBeLessThan(result[i + 1].number);
		}
	});
});

describe('combined filters', () => {
	it('fabrication + CRITICAL returns subset of fabrication FMs', () => {
		const result = applyFilters(failureModes, {
			categories: new Set<CategoryId>(['fabrication']),
			severities: new Set<Severity>(['CRITICAL'])
		});
		expect(result.length).toBeGreaterThan(0);
		for (const fm of result) {
			expect(fm.category).toBe('fabrication');
			expect(fm.highestSeverity).toBe('CRITICAL');
		}
	});

	it('Direction B + search "human" returns FM-104', () => {
		const result = applyFilters(failureModes, {
			directions: new Set<Direction>(['B']),
			search: 'human'
		});
		expect(result).toHaveLength(1);
		expect(result[0].number).toBe(104);
	});
});
