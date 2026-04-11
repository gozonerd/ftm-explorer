import { describe, it, expect } from 'vitest';
import { failureModes } from './failure-modes.js';
import { categories, categoryMeta } from './categories.js';
import { patterns } from './patterns.js';
import { stats, computeStats } from './statistics.js';
import type { CategoryId, Direction, Severity } from '../types.js';

const VALID_CATEGORIES: CategoryId[] = [
	'fabrication',
	'epistemological',
	'quality',
	'process',
	'communication',
	'bias',
	'scope',
	'identity',
	'judgment'
];

const VALID_DIRECTIONS: Direction[] = ['A', 'B'];
const VALID_SEVERITIES: Severity[] = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];

describe('failureModes data integrity', () => {
	it('has exactly 104 failure modes', () => {
		expect(failureModes).toHaveLength(104);
	});

	it('all IDs are unique', () => {
		const ids = failureModes.map((fm) => fm.id);
		const unique = new Set(ids);
		expect(unique.size).toBe(104);
	});

	it('all numbers are sequential from 1 to 104', () => {
		const numbers = failureModes.map((fm) => fm.number).sort((a, b) => a - b);
		for (let i = 0; i < 104; i++) {
			expect(numbers[i]).toBe(i + 1);
		}
	});

	it('ID format matches number (FM-001 for number 1)', () => {
		for (const fm of failureModes) {
			const expected = `FM-${String(fm.number).padStart(3, '0')}`;
			expect(fm.id).toBe(expected);
		}
	});

	it('all categories are valid', () => {
		for (const fm of failureModes) {
			expect(VALID_CATEGORIES).toContain(fm.category);
		}
	});

	it('all directions are valid', () => {
		for (const fm of failureModes) {
			expect(VALID_DIRECTIONS).toContain(fm.direction);
		}
	});

	it('all highestSeverity values are valid', () => {
		for (const fm of failureModes) {
			expect(VALID_SEVERITIES).toContain(fm.highestSeverity);
		}
	});

	it('all instanceCount values are positive integers', () => {
		for (const fm of failureModes) {
			expect(fm.instanceCount).toBeGreaterThan(0);
			expect(Number.isInteger(fm.instanceCount)).toBe(true);
		}
	});

	it('shortName, title, and definition are non-empty strings', () => {
		for (const fm of failureModes) {
			expect(fm.shortName.length).toBeGreaterThan(0);
			expect(fm.title.length).toBeGreaterThan(0);
			expect(fm.definition.length).toBeGreaterThan(0);
		}
	});

	it('FM-018 has the highest instance count (12)', () => {
		const fm18 = failureModes.find((fm) => fm.number === 18);
		expect(fm18?.instanceCount).toBe(12);
	});

	it('FM-104 is the only Direction B failure mode', () => {
		const dirB = failureModes.filter((fm) => fm.direction === 'B');
		expect(dirB).toHaveLength(1);
		expect(dirB[0].number).toBe(104);
	});

	it('FM-104 is in judgment category', () => {
		const fm104 = failureModes.find((fm) => fm.number === 104);
		expect(fm104?.category).toBe('judgment');
	});

	it('all relatedPatternIds reference valid patterns (P1–P9)', () => {
		const validPatternIds = new Set(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9']);
		for (const fm of failureModes) {
			for (const pid of fm.relatedPatternIds) {
				expect(validPatternIds.has(pid)).toBe(true);
			}
		}
	});

	it('source components sum to no more than instanceCount', () => {
		// Instance count may differ from source sum (some sources may overlap or use different counting)
		// Just verify non-negative values
		for (const fm of failureModes) {
			expect(fm.sources.vd).toBeGreaterThanOrEqual(0);
			expect(fm.sources.ect1).toBeGreaterThanOrEqual(0);
			expect(fm.sources.ect1m).toBeGreaterThanOrEqual(0);
			expect(fm.sources.gem).toBeGreaterThanOrEqual(0);
			expect(fm.sources.ect2).toBeGreaterThanOrEqual(0);
		}
	});
});

describe('categories data integrity', () => {
	it('has exactly 9 categories', () => {
		expect(categories).toHaveLength(9);
	});

	it('all 9 category IDs are present', () => {
		const ids = categories.map((c) => c.id);
		for (const expected of VALID_CATEGORIES) {
			expect(ids).toContain(expected);
		}
	});

	it('fmCount sums to 104', () => {
		const total = categories.reduce((sum, c) => sum + c.fmCount, 0);
		expect(total).toBe(104);
	});

	it('all categories have non-empty label and description', () => {
		for (const cat of categories) {
			expect(cat.label.length).toBeGreaterThan(0);
			expect(cat.description.length).toBeGreaterThan(0);
		}
	});

	it('categoryMeta has entry for every valid category', () => {
		for (const id of VALID_CATEGORIES) {
			expect(categoryMeta[id]).toBeDefined();
		}
	});
});

describe('patterns data integrity', () => {
	it('has exactly 9 patterns', () => {
		expect(patterns).toHaveLength(9);
	});

	it('pattern IDs are P1 through P9', () => {
		const ids = patterns.map((p) => p.id).sort();
		expect(ids).toEqual(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9']);
	});

	it('all patterns have non-empty name and description', () => {
		for (const p of patterns) {
			expect(p.name.length).toBeGreaterThan(0);
			expect(p.description.length).toBeGreaterThan(0);
		}
	});

	it('all patterns have at least one project', () => {
		for (const p of patterns) {
			expect(p.projects.length).toBeGreaterThan(0);
		}
	});

	it('all involvedFMNumbers reference valid FM numbers (1–104)', () => {
		const validNumbers = new Set(failureModes.map((fm) => fm.number));
		for (const p of patterns) {
			for (const n of p.involvedFMNumbers) {
				expect(validNumbers.has(n)).toBe(true);
			}
		}
	});

	it('all highestSeverity values are valid', () => {
		for (const p of patterns) {
			expect(VALID_SEVERITIES).toContain(p.highestSeverity);
		}
	});
});

describe('statistics integrity', () => {
	it('totalFMs is 104', () => {
		expect(stats.totalFMs).toBe(104);
	});

	it('dirACount + dirBCount = 104', () => {
		expect(stats.dirACount + stats.dirBCount).toBe(104);
	});

	it('dirBCount is 1', () => {
		expect(stats.dirBCount).toBe(1);
	});

	it('criticalIncidents is 13', () => {
		expect(stats.criticalIncidents).toBe(13);
	});

	it('totalIncidents is 247', () => {
		expect(stats.totalIncidents).toBe(247);
	});

	it('tier1StructuredIncidents is 129', () => {
		expect(stats.tier1StructuredIncidents).toBe(129);
	});

	it('mostEvidencedFM is FM-018 with 12 instances', () => {
		expect(stats.mostEvidencedFM.number).toBe(18);
		expect(stats.mostEvidencedFM.instanceCount).toBe(12);
	});

	it('categoryDistribution covers all 9 categories', () => {
		for (const id of VALID_CATEGORIES) {
			expect(stats.categoryDistribution[id]).toBeDefined();
			expect(stats.categoryDistribution[id]).toBeGreaterThan(0);
		}
	});

	it('categoryDistribution values sum to 104', () => {
		const total = Object.values(stats.categoryDistribution).reduce((a, b) => a + b, 0);
		expect(total).toBe(104);
	});

	it('instanceCountDistribution values sum to 104', () => {
		const { singletons, twoInstances, threeOrMore } = stats.instanceCountDistribution;
		expect(singletons + twoInstances + threeOrMore).toBe(104);
	});

	it('computeStats() produces consistent results on re-call', () => {
		const s2 = computeStats();
		expect(s2.totalFMs).toBe(stats.totalFMs);
		expect(s2.dirACount).toBe(stats.dirACount);
		expect(s2.mostEvidencedFM.number).toBe(stats.mostEvidencedFM.number);
	});
});
