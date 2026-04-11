import type { TaxonomyStats, CategoryId, Severity } from '../types.js';
import { failureModes } from './failure-modes.js';

const SEVERITY_ORDER: Record<Severity, number> = {
	CRITICAL: 4,
	HIGH: 3,
	MEDIUM: 2,
	LOW: 1
};

export function computeStats(): TaxonomyStats {
	const total = failureModes.length;
	const dirA = failureModes.filter((fm) => fm.direction === 'A').length;
	const dirB = failureModes.filter((fm) => fm.direction === 'B').length;

	const categoryDistribution = {} as Record<CategoryId, number>;
	for (const fm of failureModes) {
		categoryDistribution[fm.category] = (categoryDistribution[fm.category] ?? 0) + 1;
	}

	const severityDistribution = { critical: 0, high: 0, medium: 0, low: 0 };
	for (const fm of failureModes) {
		switch (fm.highestSeverity) {
			case 'CRITICAL':
				severityDistribution.critical++;
				break;
			case 'HIGH':
				severityDistribution.high++;
				break;
			case 'MEDIUM':
				severityDistribution.medium++;
				break;
			case 'LOW':
				severityDistribution.low++;
				break;
		}
	}

	const singletons = failureModes.filter((fm) => fm.instanceCount === 1).length;
	const twoInstances = failureModes.filter((fm) => fm.instanceCount === 2).length;
	const threeOrMore = failureModes.filter((fm) => fm.instanceCount >= 3).length;

	const mostEvidenced = failureModes.reduce((best, fm) =>
		fm.instanceCount > best.instanceCount ? fm : best
	);

	return {
		totalFMs: total,
		dirACount: dirA,
		dirBCount: dirB,
		totalIncidents: 247,
		tier1StructuredIncidents: 129,
		criticalIncidents: 13,
		projectSpaces: 19,
		categoryDistribution,
		severityDistribution,
		instanceCountDistribution: { singletons, twoInstances, threeOrMore },
		mostEvidencedFM: {
			number: mostEvidenced.number,
			shortName: mostEvidenced.shortName,
			instanceCount: mostEvidenced.instanceCount
		}
	};
}

export function severityRank(s: Severity): number {
	return SEVERITY_ORDER[s];
}

/** Sort comparator: higher severity first */
export function bySeverityDesc(a: Severity, b: Severity): number {
	return severityRank(b) - severityRank(a);
}

export const stats: TaxonomyStats = computeStats();

export default stats;
