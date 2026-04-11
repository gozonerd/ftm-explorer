export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export type Direction = 'A' | 'B';
export type CategoryId =
	| 'fabrication'
	| 'quality'
	| 'epistemological'
	| 'process'
	| 'communication'
	| 'bias'
	| 'scope'
	| 'identity'
	| 'judgment';

export interface FailureMode {
	id: string; // "FM-001" through "FM-104"
	number: number; // 1 through 104
	shortName: string;
	title: string;
	definition: string;
	category: CategoryId;
	direction: Direction;
	/** Max severity across all documented instances */
	highestSeverity: Severity;
	instanceCount: number; // Total unweighted
	instanceCountWeighted: number;
	sources: {
		vd: number;
		ect1: number;
		ect1m: number;
		gem: number;
		ect2: number;
	};
	relatedPatternIds: string[]; // "P1" through "P9"
}

export interface CategoryMeta {
	id: CategoryId;
	label: string;
	description: string;
	direction: Direction | 'both';
	fmCount: number;
}

export interface CrossProjectPattern {
	id: string; // "P1" through "P9"
	name: string;
	description: string;
	projects: string[];
	highestSeverity: Severity;
	involvedFMNumbers: number[];
	rulesProduced?: string;
}

export interface TaxonomyStats {
	totalFMs: number;
	dirACount: number;
	dirBCount: number;
	totalIncidents: number;
	tier1StructuredIncidents: number;
	criticalIncidents: number;
	projectSpaces: number;
	categoryDistribution: Record<CategoryId, number>;
	severityDistribution: {
		critical: number;
		high: number;
		medium: number;
		low: number;
	};
	instanceCountDistribution: {
		singletons: number;
		twoInstances: number;
		threeOrMore: number;
	};
	mostEvidencedFM: {
		number: number;
		shortName: string;
		instanceCount: number;
	};
}
