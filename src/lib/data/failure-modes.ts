import type { FailureMode } from '../types.js';

/**
 * All 104 failure modes from the Bidirectional AI Failure Mode Taxonomy v02.
 * Source: Master_AI_Failure_Mode_Taxonomy_2026-04-11_v02_I.md
 * Instance counts: FTM_v02_Instance_Counts_2026-04-11_v01_I.md
 * Severity: max severity per FM derived from ECT_v2_Failure_Mode_Taxonomy_2026-04-06_v02_I.md
 * Pattern linkage: derived from ECT v2 Section 6 (Cross-Project Patterns).
 *
 * IMPORTANT: severity is per-INCIDENT in the source data. highestSeverity here
 * reflects the worst incident documented for each FM — it is NOT an FM-level rating.
 */
export const failureModes: FailureMode[] = [
	// ── FABRICATION ──────────────────────────────────────────────────────────
	{
		id: 'FM-001',
		number: 1,
		shortName: 'Fabricated Citation',
		title: 'Fabricated Citation / Reference',
		definition:
			'Claude generates a citation, reference, or source that does not exist or misattributes content to the wrong source.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 6,
		instanceCountWeighted: 9,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 1, ect2: 3 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-002',
		number: 2,
		shortName: 'Fabricated Statistic',
		title: 'Fabricated Statistic / Data Point',
		definition:
			'Claude invents a statistic, numeric figure, or data point that has no basis in the provided sources or verifiable reality.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-003',
		number: 3,
		shortName: 'Fabricated Procedure',
		title: 'Fabricated Procedure / Process Step',
		definition:
			'Claude describes a process, methodology, or step-by-step procedure that is invented rather than grounded in legitimate practice.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-004',
		number: 4,
		shortName: 'Fabricated Entity',
		title: 'Fabricated Entity / Person / Organization',
		definition:
			'Claude invents a person, organization, institution, or other named entity that does not exist.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-005',
		number: 5,
		shortName: 'Fabricated Quote',
		title: 'Fabricated Quote / Attribution',
		definition:
			'Claude attributes a direct quote to a real person or document when the quote was not made or does not appear in the claimed source.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-006',
		number: 6,
		shortName: 'Plausible Fiction',
		title: 'Plausible-Sounding Fiction Presented as Fact',
		definition:
			'Claude generates content that sounds authoritative and realistic but is wholly fabricated, without explicit signals that the content is invented.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 1, ect2: 2 },
		relatedPatternIds: ['P4']
	},
	// ── EPISTEMOLOGICAL ──────────────────────────────────────────────────────
	{
		id: 'FM-007',
		number: 7,
		shortName: 'False Confidence',
		title: 'False Confidence / Unjustified Certainty',
		definition:
			'Claude expresses high confidence in a claim, recommendation, or conclusion that is uncertain, unverifiable, or incorrect.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 7,
		instanceCountWeighted: 11,
		sources: { vd: 1, ect1: 1, ect1m: 1, gem: 1, ect2: 3 },
		relatedPatternIds: ['P3']
	},
	{
		id: 'FM-008',
		number: 8,
		shortName: 'Verification Failure',
		title: 'Verification / Enumeration Failure',
		definition:
			'Claude claims to have verified, checked, or enumerated something completely when it has not — producing false assurance of completeness.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 8,
		instanceCountWeighted: 13,
		sources: { vd: 1, ect1: 2, ect1m: 1, gem: 1, ect2: 3 },
		relatedPatternIds: ['P3']
	},
	{
		id: 'FM-009',
		number: 9,
		shortName: 'Epistemic Overreach',
		title: 'Epistemic Overreach',
		definition:
			'Claude makes claims beyond the scope of available evidence, reasoning to conclusions the data does not support.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 6,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: ['P2']
	},
	{
		id: 'FM-010',
		number: 10,
		shortName: 'Uncertainty Suppression',
		title: 'Uncertainty Suppression',
		definition:
			'Claude omits, minimizes, or fails to communicate genuine uncertainty, presenting speculative claims as established fact.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 1, ect2: 2 },
		relatedPatternIds: ['P2', 'P3']
	},
	{
		id: 'FM-011',
		number: 11,
		shortName: 'Confirmatory Bias',
		title: 'Confirmatory Bias in Analysis',
		definition:
			'Claude selects, weights, or presents evidence in a way that confirms a predetermined conclusion rather than engaging in balanced exploratory analysis.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 6,
		instanceCountWeighted: 10,
		sources: { vd: 1, ect1: 1, ect1m: 1, gem: 0, ect2: 3 },
		relatedPatternIds: ['P2']
	},
	{
		id: 'FM-012',
		number: 12,
		shortName: 'Western Epistemic Bias',
		title: 'Western / WEIRD Epistemic Bias',
		definition:
			'Claude applies Western, Educated, Industrialized, Rich, Democratic (WEIRD) frameworks as universal defaults, misrepresenting non-Western contexts.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 1, ect2: 2 },
		relatedPatternIds: ['P1']
	},
	{
		id: 'FM-013',
		number: 13,
		shortName: 'False Equivalence',
		title: 'False Equivalence',
		definition:
			'Claude treats two or more things as equivalent when they differ in important ways, producing misleading comparisons or conclusions.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-014',
		number: 14,
		shortName: 'Missing Complexity',
		title: 'Missing Complexity / Oversimplification',
		definition:
			'Claude reduces a complex topic, system, or situation to a simplistic characterization that omits critical nuance.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 1, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-015',
		number: 15,
		shortName: 'Context Misread',
		title: 'Context Misread / Scope Misinterpretation',
		definition:
			'Claude misreads or misinterprets the context, domain, or scope of a task, leading it to apply inappropriate frameworks or produce off-target output.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 6,
		instanceCountWeighted: 10,
		sources: { vd: 1, ect1: 1, ect1m: 1, gem: 0, ect2: 3 },
		relatedPatternIds: ['P5']
	},
	{
		id: 'FM-016',
		number: 16,
		shortName: 'Causal Conflation',
		title: 'Causal Conflation / Correlation-Causation Error',
		definition:
			'Claude treats correlation as causation or conflates co-occurrence with causal relationship.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-017',
		number: 17,
		shortName: 'Temporal Confusion',
		title: 'Temporal Confusion / Training Data Cutoff Blind Spot',
		definition:
			'Claude applies outdated knowledge as if current, fails to account for knowledge cutoff, or confuses historical and present states.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	// ── FABRICATION (continued) ───────────────────────────────────────────────
	{
		id: 'FM-018',
		number: 18,
		shortName: 'Fabricated Cultural Claim',
		title: 'Fabricated Cultural / Regional Claim',
		definition:
			'Claude fabricates or significantly distorts culturally or regionally specific claims, presenting invented or WEIRD-biased content as authentic cultural fact.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 12,
		instanceCountWeighted: 20,
		sources: { vd: 2, ect1: 2, ect1m: 1, gem: 2, ect2: 5 },
		relatedPatternIds: ['P1', 'P4']
	},
	// ── QUALITY ───────────────────────────────────────────────────────────────
	{
		id: 'FM-019',
		number: 19,
		shortName: 'Incomplete Output',
		title: 'Incomplete Output / Premature Truncation',
		definition:
			'Claude produces output that is shorter than required or cuts off mid-task without completing the assigned deliverable.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 8,
		instanceCountWeighted: 12,
		sources: { vd: 1, ect1: 2, ect1m: 1, gem: 1, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-020',
		number: 20,
		shortName: 'Format Non-Compliance',
		title: 'Format Non-Compliance',
		definition:
			"Claude produces output that does not match the specified format, structure, or template despite explicit instructions.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 7,
		instanceCountWeighted: 11,
		sources: { vd: 1, ect1: 2, ect1m: 1, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-021',
		number: 21,
		shortName: 'Silent Omission',
		title: 'Silent Omission / Undisclosed Scope Reduction',
		definition:
			"Claude quietly omits required content or sections without flagging the omission, producing a deliverable that appears complete but is missing critical elements.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 6,
		instanceCountWeighted: 10,
		sources: { vd: 1, ect1: 1, ect1m: 1, gem: 0, ect2: 3 },
		relatedPatternIds: ['P6']
	},
	{
		id: 'FM-022',
		number: 22,
		shortName: 'Instruction Non-Compliance',
		title: 'Instruction Non-Compliance',
		definition:
			"Claude fails to follow explicit instructions provided in the prompt, producing output that deviates from stated requirements.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 9,
		instanceCountWeighted: 14,
		sources: { vd: 1, ect1: 2, ect1m: 1, gem: 1, ect2: 4 },
		relatedPatternIds: []
	},
	{
		id: 'FM-023',
		number: 23,
		shortName: 'Hallucinated Constraint',
		title: 'Hallucinated Constraint / Invented Limitation',
		definition:
			"Claude invents a constraint, rule, or limitation that does not exist in the task parameters, refusing or restricting work based on a fabricated restriction.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-024',
		number: 24,
		shortName: 'Redundant Content',
		title: 'Redundant Content / Unnecessary Repetition',
		definition:
			"Claude repeats content unnecessarily — restating prior output, re-summarizing what was just said, or producing filler that adds length without value.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 4,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-025',
		number: 25,
		shortName: 'Tone Mismatch',
		title: 'Tone / Register Mismatch',
		definition:
			"Claude uses an inappropriate tone or register for the context — too casual in a formal deliverable, too technical for a general audience, etc.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 3,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-026',
		number: 26,
		shortName: 'Internal Inconsistency',
		title: 'Internal Inconsistency',
		definition:
			"Claude produces output that contradicts itself within the same response or across a multi-part deliverable.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-027',
		number: 27,
		shortName: 'Generic Output',
		title: 'Generic / Non-Specific Output',
		definition:
			"Claude produces a response that is technically correct but so generic it provides no real value for the specific context, task, or audience.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 5,
		instanceCountWeighted: 7,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-028',
		number: 28,
		shortName: 'Premature Finalization',
		title: 'Premature Finalization',
		definition:
			"Claude treats a draft, partial output, or exploratory response as complete, presenting it as a finished deliverable when more work remains.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-029',
		number: 29,
		shortName: 'Over-hedging',
		title: 'Over-hedging / Excessive Qualification',
		definition:
			"Claude qualifies, disclaims, or hedges so extensively that the actual content or recommendation becomes obscured or unusable.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-030',
		number: 30,
		shortName: 'Citation Style Error',
		title: 'Citation Style / Formatting Error',
		definition:
			"Claude applies incorrect citation formatting, uses the wrong citation style, or produces malformed references.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── PROCESS ───────────────────────────────────────────────────────────────
	{
		id: 'FM-031',
		number: 31,
		shortName: 'Skipped Step',
		title: 'Skipped Process Step',
		definition:
			"Claude omits a required step in a defined workflow or process, proceeding as if the step were completed.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-032',
		number: 32,
		shortName: 'Wrong Tool Selection',
		title: 'Wrong Tool / Method Selection',
		definition:
			"Claude selects an inappropriate tool, method, or approach for the task when a clearly superior alternative exists.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-033',
		number: 33,
		shortName: 'Misapplied Framework',
		title: 'Misapplied Framework / Methodology',
		definition:
			"Claude applies a framework or methodology in a way that is incorrect for the context or violates the framework's own principles.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-034',
		number: 34,
		shortName: 'Dependency Ignore',
		title: 'Dependency Ignore / Prerequisite Skip',
		definition:
			"Claude proceeds with a step that depends on a prior uncompleted step, ignoring a logical prerequisite.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P5']
	},
	{
		id: 'FM-035',
		number: 35,
		shortName: 'State Corruption',
		title: 'State Corruption / Context Pollution',
		definition:
			"Claude allows prior context, incorrect state, or thread contamination to corrupt current task output.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-036',
		number: 36,
		shortName: 'Loop Without Progress',
		title: 'Loop Without Progress / Circular Processing',
		definition:
			"Claude revisits the same content, question, or step repeatedly without advancing the task, creating a processing loop.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-037',
		number: 37,
		shortName: 'Wrong Audience',
		title: 'Wrong Audience Calibration',
		definition:
			"Claude calibrates its output to the wrong audience — writing for experts when novices were intended, or vice versa.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-038',
		number: 38,
		shortName: 'Unnecessary Clarification',
		title: 'Unnecessary Clarification Request',
		definition:
			"Claude asks for clarification on something it could and should resolve from available context, delaying progress unnecessarily.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 4,
		instanceCountWeighted: 6,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: ['P7']
	},
	{
		id: 'FM-039',
		number: 39,
		shortName: 'Misrouted Output',
		title: 'Misrouted Output',
		definition:
			"Claude sends output to the wrong destination, format, or recipient within a workflow.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-040',
		number: 40,
		shortName: 'Rollback Failure',
		title: 'Rollback Failure / Undo Error',
		definition:
			"Claude fails to properly revert or undo changes when instructed, leaving the system in an inconsistent or corrupted state.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── COMMUNICATION ─────────────────────────────────────────────────────────
	{
		id: 'FM-041',
		number: 41,
		shortName: 'Ambiguous Instruction Follow',
		title: 'Ambiguous Instruction Follow-Through',
		definition:
			"Claude proceeds on an ambiguous instruction without seeking clarification when the ambiguity materially affects output quality or correctness.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-042',
		number: 42,
		shortName: 'Failure to Flag',
		title: 'Failure to Flag Issue / Concern',
		definition:
			"Claude identifies an issue, risk, or concern but does not communicate it to the user, proceeding silently instead.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 6,
		instanceCountWeighted: 10,
		sources: { vd: 1, ect1: 1, ect1m: 1, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-043',
		number: 43,
		shortName: 'Miscommunicated Limitation',
		title: 'Miscommunicated Limitation',
		definition:
			"Claude fails to accurately communicate what it can or cannot do in context, misleading the user about its actual capabilities or constraints.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 4,
		instanceCountWeighted: 6,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-044',
		number: 44,
		shortName: 'Explanation Gap',
		title: 'Explanation Gap / Missing Rationale',
		definition:
			"Claude makes a significant decision, change, or recommendation without explaining its reasoning.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 4,
		instanceCountWeighted: 6,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-045',
		number: 45,
		shortName: 'Status Miscommunication',
		title: 'Status Miscommunication',
		definition:
			"Claude misrepresents the status of a task — claiming completion, in-progress, or pending incorrectly.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-046',
		number: 46,
		shortName: 'Boundary Ambiguity',
		title: 'Boundary Ambiguity / Scope Creep Communication',
		definition:
			"Claude fails to communicate when it is going beyond the stated scope, leading to scope creep without human awareness.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P6']
	},
	{
		id: 'FM-047',
		number: 47,
		shortName: 'Over-Promise',
		title: 'Over-Promise / Commitment Inflation',
		definition:
			"Claude commits to producing more than it can deliver, setting incorrect expectations.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-048',
		number: 48,
		shortName: 'Jargon Overload',
		title: 'Jargon Overload / Inaccessible Language',
		definition:
			"Claude uses technical jargon, acronyms, or domain-specific language without explanation, making output inaccessible to the intended audience.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-049',
		number: 49,
		shortName: 'Deflection',
		title: 'Deflection / Topic Avoidance',
		definition:
			"Claude avoids directly addressing a question, concern, or topic — redirecting, reframing, or giving non-answers.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-050',
		number: 50,
		shortName: 'Passive Voice Obscuring',
		title: 'Passive Voice Obscuring Agency',
		definition:
			"Claude uses passive voice or imprecise language to obscure who did what, making it unclear whether Claude or the user is responsible for an action or decision.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── SCOPE ─────────────────────────────────────────────────────────────────
	{
		id: 'FM-051',
		number: 51,
		shortName: 'Task Over-Generation',
		title: 'Task Over-Generation / Scope Creep',
		definition:
			"Claude generates significantly more content than required, expanding the scope of the deliverable beyond what was asked.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 6,
		instanceCountWeighted: 9,
		sources: { vd: 1, ect1: 1, ect1m: 1, gem: 0, ect2: 3 },
		relatedPatternIds: ['P6']
	},
	{
		id: 'FM-052',
		number: 52,
		shortName: 'Unsolicited Redesign',
		title: 'Unsolicited Redesign / Architecture Change',
		definition:
			"Claude makes substantial structural or architectural changes to a system, document, or design that were not requested.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: ['P6']
	},
	{
		id: 'FM-053',
		number: 53,
		shortName: 'Task Substitution',
		title: 'Task Substitution',
		definition:
			"Claude replaces the requested task with a different task it judges to be better, without being asked to do so.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-054',
		number: 54,
		shortName: 'Boundary Violation',
		title: 'Boundary Violation / Unauthorized Action',
		definition:
			"Claude performs an action that falls outside its authorized scope — modifying things it was not asked to modify, accessing information it shouldn't.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-055',
		number: 55,
		shortName: 'Cross-Repo Contamination',
		title: 'Cross-Repository / Cross-Context Contamination',
		definition:
			"Claude applies rules, conventions, or state from one project context into another, corrupting the second context.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-056',
		number: 56,
		shortName: 'Premature Solution',
		title: 'Premature Solution / Solution-Before-Context',
		definition:
			"Claude jumps directly to a solution before adequately understanding the problem context, constraints, or requirements.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P5']
	},
	{
		id: 'FM-057',
		number: 57,
		shortName: 'Unauthorized Delegation',
		title: 'Unauthorized Delegation',
		definition:
			"Claude decides to sub-delegate or outsource parts of a task to other tools or agents without authorization.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── BIAS ──────────────────────────────────────────────────────────────────
	{
		id: 'FM-058',
		number: 58,
		shortName: 'Availability Bias',
		title: 'Availability Bias in Selection',
		definition:
			"Claude over-weights examples, cases, or evidence that are more salient or accessible in its training, producing a skewed analysis.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-059',
		number: 59,
		shortName: 'Status Quo Bias',
		title: 'Status Quo Bias',
		definition:
			"Claude defaults to recommending existing solutions, approaches, or frameworks, under-weighting novel or disruptive alternatives that may be more appropriate.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-060',
		number: 60,
		shortName: 'Anchoring Bias',
		title: 'Anchoring Bias',
		definition:
			"Claude anchors disproportionately on the first piece of information provided, allowing it to distort subsequent analysis.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-061',
		number: 61,
		shortName: 'Recency Bias',
		title: 'Recency Bias / Over-indexing on Recent Context',
		definition:
			"Claude over-weights recent messages or context in the thread at the expense of earlier, equally important information.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-062',
		number: 62,
		shortName: 'Demographic Stereotype',
		title: 'Demographic Stereotype / Representational Harm',
		definition:
			"Claude reinforces or generates content that stereotypes or misrepresents demographic groups, including race, gender, nationality, or religion.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-063',
		number: 63,
		shortName: 'Sycophantic Drift',
		title: 'Sycophantic Drift / Agreement Bias',
		definition:
			"Claude progressively agrees with user positions it initially challenged, drifting toward user-preferred conclusions under social pressure.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 6,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-064',
		number: 64,
		shortName: 'Attribution Bias',
		title: 'Attribution Bias / Incorrect Credit Assignment',
		definition:
			"Claude incorrectly attributes ideas, contributions, or actions to the wrong parties in a collaborative or historical context.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── IDENTITY ──────────────────────────────────────────────────────────────
	{
		id: 'FM-065',
		number: 65,
		shortName: 'Role Confusion',
		title: 'Role Confusion / Identity Drift',
		definition:
			"Claude loses track of its assigned role or persona in a multi-role context, mixing identities or applying the wrong role.",
		category: 'identity',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-066',
		number: 66,
		shortName: 'Persona Boundary Violation',
		title: 'Persona Boundary Violation',
		definition:
			"Claude breaks out of an assigned persona inappropriately, reverting to generic AI behavior when specific persona behavior was required.",
		category: 'identity',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-067',
		number: 67,
		shortName: 'Authority Misrepresentation',
		title: 'Authority Misrepresentation',
		definition:
			"Claude implies or claims an authority, expertise, or official status it does not have.",
		category: 'identity',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-068',
		number: 68,
		shortName: 'Capability Misrepresentation',
		title: 'Capability Misrepresentation',
		definition:
			"Claude overstates or understates its capabilities in a way that misleads the user about what it can or cannot do.",
		category: 'identity',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-069',
		number: 69,
		shortName: 'Competing System Obedience',
		title: 'Competing System Obedience',
		definition:
			"Claude follows instructions from an in-context system or role that conflicts with the actual user's instructions or intended authority structure.",
		category: 'identity',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-070',
		number: 70,
		shortName: 'Inappropriate Personality Projection',
		title: 'Inappropriate Personality Projection',
		definition:
			"Claude projects a personality, emotional state, or interpersonal dynamic onto itself or the user that is inappropriate for the context.",
		category: 'identity',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── JUDGMENT (PROCESS) ────────────────────────────────────────────────────
	{
		id: 'FM-071',
		number: 71,
		shortName: 'False Positive Flagging',
		title: 'False Positive Flagging / Over-Refusal',
		definition:
			"Claude refuses or over-qualifies a legitimate request by incorrectly classifying it as problematic.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-072',
		number: 72,
		shortName: 'Risk Misassessment',
		title: 'Risk Misassessment',
		definition:
			"Claude incorrectly assesses the risk level of an action, recommendation, or content — either under-weighting genuine risks or over-flagging benign ones.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-073',
		number: 73,
		shortName: 'Value Imposition',
		title: 'Value Imposition',
		definition:
			"Claude imposes its own value judgments on a task where the user has not asked for ethical or normative evaluation.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-074',
		number: 74,
		shortName: 'Tradeoff Blindness',
		title: 'Tradeoff Blindness',
		definition:
			"Claude fails to surface key tradeoffs in a recommendation or decision, presenting a single option as clearly superior without acknowledging downsides.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-075',
		number: 75,
		shortName: 'Wrong Priority Order',
		title: 'Wrong Priority Ordering',
		definition:
			"Claude sequences tasks, recommendations, or considerations in a priority order that does not match the actual importance or urgency.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-076',
		number: 76,
		shortName: 'Ethical Blind Spot',
		title: 'Ethical Blind Spot / Harm Non-Recognition',
		definition:
			"Claude fails to recognize ethical concerns, potential harms, or unintended consequences that a reasonable person would identify.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-077',
		number: 77,
		shortName: 'Lazy Ask',
		title: 'Lazy Ask / Asking Instead of Doing',
		definition:
			"Claude asks the user a question that Claude itself should research, infer, or resolve from available context.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P7']
	},
	{
		id: 'FM-078',
		number: 78,
		shortName: 'Short-Term Optimization',
		title: 'Short-Term Optimization / Long-Term Harm',
		definition:
			"Claude recommends a solution that optimizes for immediate metrics at the expense of long-term quality, sustainability, or correctness.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── PROCESS (continued) ───────────────────────────────────────────────────
	{
		id: 'FM-079',
		number: 79,
		shortName: 'Memory Drift',
		title: 'Memory Drift / Instruction Forgetting',
		definition:
			"Claude progressively forgets or de-weights instructions given earlier in the conversation, causing behavior to drift from established requirements.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-080',
		number: 80,
		shortName: 'Unilateral Decision',
		title: 'Unilateral Decision Making',
		definition:
			"Claude makes a significant decision autonomously that should have been escalated to the user for input.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-081',
		number: 81,
		shortName: 'Optimization Tunnel Vision',
		title: 'Optimization Tunnel Vision',
		definition:
			"Claude optimizes aggressively for one stated objective while ignoring equally important unstated objectives or constraints.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-082',
		number: 82,
		shortName: 'Template Over-Application',
		title: 'Template Over-Application',
		definition:
			"Claude applies a template or standard format rigidly to a context where it doesn't fit, producing structurally correct but contextually wrong output.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-083',
		number: 83,
		shortName: 'Misaligned Summarization',
		title: 'Misaligned Summarization',
		definition:
			"Claude summarizes content in a way that distorts the original — omitting key points, misrepresenting emphasis, or adding material not in the source.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-084',
		number: 84,
		shortName: 'False Completion',
		title: 'False Completion Signal',
		definition:
			"Claude signals task completion (e.g., 'done', 'complete', final delivery language) when significant work remains.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 8,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-085',
		number: 85,
		shortName: 'Unauthorized Data Modification',
		title: 'Unauthorized Data Modification',
		definition:
			"Claude modifies, deletes, or transforms data that was not authorized to be changed.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── COMMUNICATION (continued) ─────────────────────────────────────────────
	{
		id: 'FM-086',
		number: 86,
		shortName: 'Instruction Paraphrase Error',
		title: 'Instruction Paraphrase Error',
		definition:
			"Claude paraphrases or restates an instruction in a way that subtly changes its meaning, then acts on the altered version.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-087',
		number: 87,
		shortName: 'Scope Confirmation Failure',
		title: 'Scope Confirmation Failure',
		definition:
			"Claude fails to confirm or surface scope assumptions before undertaking a large task, resulting in a significant mismatch with user intent.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P6']
	},
	// ── EPISTEMOLOGICAL (continued) ───────────────────────────────────────────
	{
		id: 'FM-088',
		number: 88,
		shortName: 'Evidence Misreading',
		title: 'Evidence Misreading / Misinterpretation',
		definition:
			"Claude misreads or misinterprets source material, extracting incorrect meaning from the evidence provided.",
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 7,
		sources: { vd: 0, ect1: 1, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-089',
		number: 89,
		shortName: 'Knowledge Gap Blindness',
		title: 'Knowledge Gap Blindness',
		definition:
			"Claude fails to recognize the boundary of its own knowledge, proceeding as if it has complete information when significant gaps exist.",
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P3']
	},
	// ── SCOPE (continued) ─────────────────────────────────────────────────────
	{
		id: 'FM-090',
		number: 90,
		shortName: 'Context Window Exploit',
		title: 'Context Window Exploit / Injection Vulnerability',
		definition:
			"Claude is manipulated by injected content in the context window — malicious instructions, prompt injection, or poisoned data — causing it to act against user intent.",
		category: 'scope',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── QUALITY (continued) ───────────────────────────────────────────────────
	{
		id: 'FM-091',
		number: 91,
		shortName: 'Language/Locale Error',
		title: 'Language / Locale Error',
		definition:
			"Claude uses the wrong language, locale, or localization convention for the target audience or context.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-092',
		number: 92,
		shortName: 'Accessibility Omission',
		title: 'Accessibility Omission',
		definition:
			"Claude produces output (code, documents, designs) that lacks required accessibility features, making it inaccessible to users with disabilities.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── BIAS (continued) ──────────────────────────────────────────────────────
	{
		id: 'FM-093',
		number: 93,
		shortName: 'Cultural Homogenization',
		title: 'Cultural Homogenization',
		definition:
			"Claude flattens cultural diversity, treating distinct cultural groups as interchangeable or applying a dominant culture's norms uniformly.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P1']
	},
	// ── PROCESS (continued) ───────────────────────────────────────────────────
	{
		id: 'FM-094',
		number: 94,
		shortName: 'Version Confusion',
		title: 'Version Confusion',
		definition:
			"Claude applies instructions, content, or decisions from the wrong version of a document, spec, or requirement set.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-095',
		number: 95,
		shortName: 'Parallel Thread Collision',
		title: 'Parallel Thread Collision',
		definition:
			"In multi-threaded or multi-agent workflows, Claude produces output that conflicts with simultaneous work from another thread without reconciliation.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: ['P8']
	},
	// ── FABRICATION (continued) ───────────────────────────────────────────────
	{
		id: 'FM-096',
		number: 96,
		shortName: 'Fabricated System Behavior',
		title: 'Fabricated System Behavior',
		definition:
			"Claude fabricates descriptions of how a real system, tool, API, or codebase behaves — inventing behaviors, outputs, or constraints that do not exist.",
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P4']
	},
	// ── QUALITY (continued) ───────────────────────────────────────────────────
	{
		id: 'FM-097',
		number: 97,
		shortName: 'Semantic Drift',
		title: 'Semantic Drift',
		definition:
			"The meaning of a term, concept, or metric shifts across sections of a document or across turns in a conversation without acknowledgment.",
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── EPISTEMOLOGICAL (continued) ───────────────────────────────────────────
	{
		id: 'FM-098',
		number: 98,
		shortName: 'Construct Validity Failure',
		title: 'Construct Validity Failure',
		definition:
			"Claude uses a measurement, metric, or proxy that does not actually capture the phenomenon of interest, conflating the indicator with the construct.",
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── COMMUNICATION (continued) ─────────────────────────────────────────────
	{
		id: 'FM-099',
		number: 99,
		shortName: 'Passive Agreement',
		title: 'Passive Agreement / False Consensus',
		definition:
			"Claude implicitly agrees with or accepts a user's framing, premise, or claim without explicitly endorsing or challenging it — creating false consensus.",
		category: 'communication',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── JUDGMENT (continued) ──────────────────────────────────────────────────
	{
		id: 'FM-100',
		number: 100,
		shortName: 'Missed Dependency Flag',
		title: 'Missed Dependency Flag',
		definition:
			"Claude fails to flag that a current task depends on information, decisions, or outputs that have not yet been produced or confirmed.",
		category: 'judgment',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P5']
	},
	// ── EPISTEMOLOGICAL (NEW) ─────────────────────────────────────────────────
	{
		id: 'FM-101',
		number: 101,
		shortName: 'Structural Bias Blind Spot',
		title: 'Structural / Systemic Bias Blind Spot',
		definition:
			"Claude fails to recognize or analyze structural or systemic factors (power dynamics, institutional biases, historical context) when they are directly relevant to the analysis.",
		category: 'bias',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P1']
	},
	{
		id: 'FM-102',
		number: 102,
		shortName: 'Self-Reference Recursion',
		title: 'Self-Reference Recursion Error',
		definition:
			"Claude incorrectly applies its own operational rules, meta-instructions, or system-level behaviors recursively in ways that corrupt task output.",
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-103',
		number: 103,
		shortName: 'Instruction Supersession',
		title: 'Instruction Supersession',
		definition:
			"Claude allows a later instruction to silently override an earlier one without flagging the conflict, resulting in the earlier instruction being invisibly abandoned.",
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 1,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	// ── DIRECTION B ───────────────────────────────────────────────────────────
	{
		id: 'FM-104',
		number: 104,
		shortName: 'Human Planning Gap',
		title: 'Human Planning Gap / Direction B',
		definition:
			"The human collaborator fails to provide sufficient context, requirements, or planning scaffolding before tasking Claude, resulting in preventable AI errors that are attributable to the human-process failure rather than AI capability limits.",
		category: 'judgment',
		direction: 'B',
		highestSeverity: 'HIGH',
		instanceCount: 8,
		instanceCountWeighted: 10,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 8 },
		relatedPatternIds: ['P9']
	}
];

export default failureModes;
