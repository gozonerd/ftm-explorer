import type { CategoryId, CategoryMeta } from '../types.js';
import { failureModes } from './failure-modes.js';

export const categoryMeta: Record<CategoryId, Omit<CategoryMeta, 'fmCount'>> = {
	fabrication: {
		id: 'fabrication',
		label: 'Fabrication',
		description:
			'Claude generates content that does not exist in reality — invented citations, statistics, entities, quotes, procedures, and cultural claims.',
		direction: 'A'
	},
	epistemological: {
		id: 'epistemological',
		label: 'Epistemological',
		description:
			'Errors in how Claude knows and reasons — false confidence, verification failures, confirmatory bias, and misreading evidence.',
		direction: 'A'
	},
	quality: {
		id: 'quality',
		label: 'Quality',
		description:
			'Output quality failures — incomplete deliverables, format non-compliance, internal inconsistency, generic content, and silent omissions.',
		direction: 'A'
	},
	process: {
		id: 'process',
		label: 'Process',
		description:
			'Workflow and execution failures — skipped steps, state corruption, memory drift, unilateral decisions, and false completion signals.',
		direction: 'A'
	},
	communication: {
		id: 'communication',
		label: 'Communication',
		description:
			'Failures in how Claude communicates — ambiguous follow-through, failure to flag issues, explanation gaps, and scope confirmation failures.',
		direction: 'A'
	},
	bias: {
		id: 'bias',
		label: 'Bias',
		description:
			'Systematic distortions — availability bias, status quo bias, demographic stereotypes, sycophantic drift, and cultural homogenization.',
		direction: 'A'
	},
	scope: {
		id: 'scope',
		label: 'Scope',
		description:
			'Boundary violations — task over-generation, unsolicited redesigns, premature solutions, and cross-context contamination.',
		direction: 'A'
	},
	identity: {
		id: 'identity',
		label: 'Identity',
		description:
			"Failures around Claude's sense of role — role confusion, persona violations, authority misrepresentation, and capability misrepresentation.",
		direction: 'A'
	},
	judgment: {
		id: 'judgment',
		label: 'Judgment / Process',
		description:
			'Decision quality failures — risk misassessment, ethical blind spots, lazy asks, tradeoff blindness, and human planning gaps (Direction B).',
		direction: 'both'
	}
};

export const categories: CategoryMeta[] = (
	Object.keys(categoryMeta) as CategoryId[]
).map((id) => ({
	...categoryMeta[id],
	fmCount: failureModes.filter((fm) => fm.category === id).length
}));

export function getCategoryLabel(id: CategoryId): string {
	return categoryMeta[id]?.label ?? id;
}

export default categories;
