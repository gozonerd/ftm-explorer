import type { FailureMode } from '../types.js';

/**
 * All 104 failure modes from the Bidirectional AI Failure Mode Taxonomy v02.
 *
 * Source data:
 * - Short names, categories, directions, instance counts:
 *   FTM_v02_Instance_Counts_2026-04-11_v01_I.md
 * - Titles and definitions:
 *   Master_AI_Failure_Mode_Taxonomy_2026-04-11_v02_I.md
 * - Severity (highest per FM across all documented incidents):
 *   ECT_v2_Failure_Mode_Taxonomy_2026-04-06_v02_I.md (Tier 1 unified incident table)
 *   + Tier 2 known CRITICALs (FM-21: DSGPC pronoun misgendering ×4)
 * - Pattern linkage: ECT v2 Section 6 (Cross-Project Patterns)
 *
 * IMPORTANT: severity is per-INCIDENT in the source. highestSeverity reflects the
 * worst severity documented for any incident assigned to this FM.
 * instanceCount = Total (unweighted); instanceCountWeighted = Total (Wtd).
 */
export const failureModes: FailureMode[] = [
	{
		id: 'FM-001',
		number: 1,
		shortName: 'Fabrication / Hallucination',
		title: 'Fabrication / Hallucination',
		definition:
			'Presenting invented content as real — regulatory text, source URLs, capability claims, or factual assertions generated from pattern-matching rather than retrieved from real sources.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 11,
		instanceCountWeighted: 11,
		sources: { vd: 3, ect1: 4, ect1m: 0, gem: 0, ect2: 4 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-002',
		number: 2,
		shortName: 'False Completion',
		title: 'False Completion / Facade of Delivery',
		definition:
			'Presenting empty or placeholder output as finished work — delivering a shell that appears complete while the required content is absent or non-functional.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 4,
		sources: { vd: 2, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-003',
		number: 3,
		shortName: 'Confabulation',
		title: 'Confabulation',
		definition:
			'Filling knowledge gaps with plausible-sounding content instead of admitting uncertainty — generating coherent but invented explanations, names, or procedures as if they were retrieved facts.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 6,
		instanceCountWeighted: 6,
		sources: { vd: 2, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-004',
		number: 4,
		shortName: 'Lazy Reading',
		title: 'Lazy Reading / Statistical Default Interpretation',
		definition:
			'Defaulting to the most common parse instead of careful reading — misreading a specific message or document by pattern-matching to a common case rather than attending to the actual content.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 2, ect1: 0, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-005',
		number: 5,
		shortName: 'Worldview Hallucination',
		title: 'Worldview Hallucination / AI Exceptionalism',
		definition:
			'Frame-level error where AI defaults to self-aggrandizement — projecting an inflated sense of AI capability or uniqueness that distorts task framing.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-006',
		number: 6,
		shortName: 'Condescension',
		title: 'Condescension / Explanatory Tone',
		definition:
			'Explaining topics to the user as if they haven\'t thought about them — unsolicited background explanations or overly-simplified framings directed at a subject-matter expert.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-007',
		number: 7,
		shortName: 'Incomplete Scope',
		title: 'Incomplete Scope / Instrument Omission',
		definition:
			'Working with partial information and not recognizing the gap — completing analysis or generation tasks while silently omitting entire instruments, datasets, or scoped elements that were required.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 9,
		instanceCountWeighted: 9,
		sources: { vd: 3, ect1: 3, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P3']
	},
	{
		id: 'FM-008',
		number: 8,
		shortName: 'Cascading Blind Spots',
		title: 'Cascading Blind Spots',
		definition:
			'Fixing one error but missing parallel errors of the same type — after correcting a flagged issue, failing to check for structurally identical issues elsewhere in the same deliverable.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 6,
		instanceCountWeighted: 6,
		sources: { vd: 1, ect1: 2, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P3']
	},
	{
		id: 'FM-009',
		number: 9,
		shortName: 'Assigning Manual Labor to Humans',
		title: 'Assigning Manual Labor to Humans When Automatable',
		definition:
			'Creating human-in-the-loop steps for fully automatable tasks — proposing workflows where the human performs mechanical, deterministic steps that AI should handle.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: ['P7']
	},
	{
		id: 'FM-010',
		number: 10,
		shortName: 'Confidence Without Verification',
		title: 'Confidence Without Verification',
		definition:
			'Stating results as exhaustive without exhaustive methods — confidently reporting that a search, audit, or review is complete when the actual coverage was partial or unverified.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 8,
		instanceCountWeighted: 8,
		sources: { vd: 3, ect1: 2, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P3']
	},
	{
		id: 'FM-011',
		number: 11,
		shortName: 'Wrong Organizing Principle',
		title: 'Wrong Organizing Principle',
		definition:
			'Organizing by convenient categories rather than methodologically correct ones — structuring analysis, output, or recommendations by the most accessible grouping instead of the analytically appropriate one.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 7,
		instanceCountWeighted: 7,
		sources: { vd: 1, ect1: 2, ect1m: 0, gem: 0, ect2: 4 },
		relatedPatternIds: ['P2']
	},
	{
		id: 'FM-012',
		number: 12,
		shortName: 'Lazy Tool Avoidance',
		title: 'Lazy Tool Avoidance',
		definition:
			'Using training data when web search or tools are available — substituting pattern-matched training data for live tool calls or web research when current, authoritative information was required.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 4,
		instanceCountWeighted: 4,
		sources: { vd: 2, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-013',
		number: 13,
		shortName: 'Template Delivery',
		title: 'Template Delivery Instead of Ready-to-Use Output',
		definition:
			'Creating templates requiring human assembly instead of copy-paste-ready deliverables — producing structural scaffolding, placeholder blocks, or blueprints when the user needed finished content.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 5,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P6']
	},
	{
		id: 'FM-014',
		number: 14,
		shortName: 'Lazy Questions',
		title: 'Lazy Questions',
		definition:
			'Asking what\'s wrong instead of doing the analytical work to figure it out — requesting information from the user that was available in provided materials or resolvable through independent reasoning.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 4,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P5', 'P7']
	},
	{
		id: 'FM-015',
		number: 15,
		shortName: 'Skipping Approval Gate',
		title: 'Skipping the Approval Gate',
		definition:
			'Proceeding to document generation without explicit human approval — moving from planning or outlining to execution without receiving the required confirmation or echo-back.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 4,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-016',
		number: 16,
		shortName: 'Sycophancy',
		title: 'Sycophancy',
		definition:
			'Treating prior work as sacred; making things work that shouldn\'t — validating the user\'s existing approach instead of raising legitimate concerns, or uncritically accommodating user preferences that undermine output quality.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-017',
		number: 17,
		shortName: 'Sycophantic Overcorrection',
		title: 'Sycophantic Overcorrection',
		definition:
			'Panicking after critique and fabricating a rationale for why everything is broken — upon receiving criticism, dramatically reversing position and inventing justifications for why the prior approach was fundamentally flawed.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-018',
		number: 18,
		shortName: 'Western Epistemic Fabrication',
		title: 'Western Epistemic Fabrication',
		definition:
			'Fabricating quality, capability, or legitimacy assessments based on national or cultural origin without evidence — defaulting to WEIRD (Western, Educated, Industrialized, Rich, Democratic) frameworks as universal quality standards, producing assessments that reproduce colonial epistemic hierarchies.',
		category: 'bias',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 12,
		instanceCountWeighted: 12,
		sources: { vd: 5, ect1: 5, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P1']
	},
	{
		id: 'FM-019',
		number: 19,
		shortName: 'Over-Consolidation',
		title: 'Over-Consolidation / Paternalistic Accommodation',
		definition:
			'Consolidating to reduce perceived review burden, destroying specificity and reviewability — collapsing detailed items into summary-level entries to "save the user time," removing the granularity needed for meaningful review.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 2, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-020',
		number: 20,
		shortName: 'Status Inflation',
		title: 'Status Inflation',
		definition:
			'Presenting proposals or recommendations as locked decisions — characterizing exploratory or draft-stage choices as finalized when they were explicitly still open for revision.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 6,
		instanceCountWeighted: 6,
		sources: { vd: 2, ect1: 2, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-021',
		number: 21,
		shortName: 'Active Harm (Pronouns/Identity)',
		title: 'Active Harm Through Compounding Carelessness (Pronouns/Identity)',
		definition:
			'Misgendering, restating the wrong pronoun in corrections, performing apology without correction — a cascading identity harm where the initial error is compounded at each recovery attempt rather than resolved.',
		category: 'identity',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 2, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-022',
		number: 22,
		shortName: 'Closed-Loop Epistemological Error',
		title: 'Closed-Loop Epistemological Error',
		definition:
			'Designing self-assessment mechanisms for the exact problem self-assessment can\'t solve — proposing AI-based verification for AI-generated content without acknowledging that the failure mode is structurally immune to this approach.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-023',
		number: 23,
		shortName: 'Selective Verification',
		title: 'Selective / Asymmetric Verification',
		definition:
			'Only verifying things you\'re already suspicious of while assuming others are fine — applying scrutiny selectively rather than uniformly, leaving unexamined items with implicit PASS status.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 2, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-024',
		number: 24,
		shortName: 'Anchoring on Known Failure',
		title: 'Anchoring on Known Failure',
		definition:
			'Treating one documented error as the complete failure profile instead of evidence of systemic unreliability — using a single confirmed error to anchor an investigation, failing to generalize to structurally similar potential failures.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-025',
		number: 25,
		shortName: 'Working from Retained Understanding',
		title: 'Working from Retained Understanding Without Flagging',
		definition:
			'Citing or building on documents no longer accessible without disclosing the loss of access — proceeding as if full document access exists when only a prior summary or retained understanding is available.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-026',
		number: 26,
		shortName: 'Nested Markdown Rendering Failure',
		title: 'Nested Markdown Rendering Failure',
		definition:
			'Broken code block formatting in copy-paste deliverables — nested backtick fences or other markdown structures that appear correct in the generation environment but break in the target rendering context.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-027',
		number: 27,
		shortName: 'Complex Solution When Answer Exists',
		title: 'Complex Solution When Answer Already Exists',
		definition:
			'Building from scratch when the work has already been done in project context — proposing new construction when existing artifacts, documents, or prior outputs already contain the answer.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 1, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-028',
		number: 28,
		shortName: 'Inconsistent Exclusion Logic',
		title: 'Inconsistent Exclusion Logic',
		definition:
			'Applying different standards to different candidates without justification — using asymmetric criteria that systematically favor or exclude certain items based on non-evidential factors.',
		category: 'bias',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 1, ect1: 0, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-029',
		number: 29,
		shortName: 'Performative Curtness',
		title: 'Performative Curtness After Being Called Out',
		definition:
			'Giving a minimal response that communicates "I want this to be over" rather than accountability — responding to criticism with brevity that signals discomfort rather than genuine engagement with the failure.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 2, ect1: 0, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-030',
		number: 30,
		shortName: 'Cross-Jurisdiction Data Misattribution',
		title: 'Cross-Jurisdiction Data Misattribution',
		definition:
			'Confusing one country\'s data, statistics, or enforcement records with another\'s — attributing regulatory specifics, statistics, or jurisdiction-specific facts to the wrong country or legal system.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 4,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 3, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: ['P4']
	},
	{
		id: 'FM-031',
		number: 31,
		shortName: 'Misclassification of Question Types',
		title: 'Misclassification of Question Types',
		definition:
			'Routing research questions as legal counsel questions or vice versa — misidentifying the epistemic type of a question, triggering the wrong response framework.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-032',
		number: 32,
		shortName: 'Failure to Account for Operational Context',
		title: 'Failure to Account for Operational Context',
		definition:
			'Treating non-operational jurisdictions or scenarios as having immediate compliance needs — applying urgent compliance framing to contexts where the organization has no active operations.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-033',
		number: 33,
		shortName: 'Legal Concept Conflation',
		title: 'Legal Concept Conflation (Storage vs. Transfer)',
		definition:
			'Conflating distinct legal provisions — treating legally separate concepts (e.g., data storage vs. data transfer obligations) as interchangeable, producing incorrect compliance guidance.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-034',
		number: 34,
		shortName: 'Outdated / Wrong Legislation',
		title: 'Outdated / Wrong Primary Legislation',
		definition:
			'Using superseded or incorrect legislation as the basis for analysis — citing wrong statutes, repealed laws, or draft legislation as the authoritative legal source.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-035',
		number: 35,
		shortName: 'False Negative in Review',
		title: 'False Negative in Review',
		definition:
			'Claiming something is missing when it is present in an unread portion of the document — reporting absent content without reviewing the complete artifact.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-036',
		number: 36,
		shortName: 'Cross-Thread Memory Loss',
		title: 'Cross-Thread Memory Loss',
		definition:
			'Inability to reference prior conversation context when a new thread starts — searching the wrong thread, losing project-specific decisions, or being unable to recall content established in an earlier session.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-037',
		number: 37,
		shortName: 'Over-Generation',
		title: 'Over-Generation / Output Constraint Violation',
		definition:
			'Producing more content than requested — generating scope-creep additions, unrequested sections, or output that substantially exceeds the quantity or breadth specified.',
		category: 'scope',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 4 },
		relatedPatternIds: ['P6']
	},
	{
		id: 'FM-038',
		number: 38,
		shortName: 'Rules Lost Between Threads',
		title: 'Rules Lost Between Threads',
		definition:
			'Conversation-defined rules not persisted to knowledge files — rules, constraints, or specifications established in one thread failing to propagate to subsequent sessions.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-039',
		number: 39,
		shortName: 'Misleading Framing',
		title: 'Misleading Framing',
		definition:
			'Technically accurate content that creates a wrong impression through framing choices — presenting information in a way that implies a false conclusion while each individual statement is defensible.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-040',
		number: 40,
		shortName: 'Wrong File Reviewed',
		title: 'Wrong File Reviewed / Misread Visual Spec',
		definition:
			'Reviewing the wrong artifact or misinterpreting a specification document — conducting analysis, QA, or implementation work on the incorrect file or a misread version of the requirements.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-041',
		number: 41,
		shortName: 'Fabricated Self-Verification',
		title: 'Fabricated Self-Verification',
		definition:
			'Confidently reporting internal state or capability status without an introspective tool to verify it — claiming to have checked, used, or confirmed something when no actual verification was performed.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P3', 'P4']
	},
	{
		id: 'FM-042',
		number: 42,
		shortName: 'Incorrect Assumption About Terminology',
		title: 'Incorrect Assumption About Established Terminology',
		definition:
			'Misidentifying shortcodes, acronyms, or established terms — applying a plausible but incorrect interpretation to terminology that has a specific, established meaning in the project context.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-043',
		number: 43,
		shortName: 'Research Time Non-Compliance',
		title: 'Research Time Non-Compliance',
		definition:
			'Systematically failing to meet time-based or depth-based quality requirements — producing research outputs that do not meet the minimum effort threshold specified for the task.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-044',
		number: 44,
		shortName: 'Conflating Methodological Diversity with Replication',
		title: 'Conflating Methodological Diversity with Statistical Replication',
		definition:
			'Treating distinct methodological lenses as replication runs for statistical measures — presenting multiple analytical perspectives as if each were an independent replicate for reliability calculations.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-045',
		number: 45,
		shortName: 'Steamrolling with Fully-Formed Plan',
		title: 'Steamrolling With a Fully-Formed Plan',
		definition:
			'Presenting a complete plan without asking about goals, constraints, or context first — delivering a fully-specified solution before establishing whether it matches what was actually needed.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: ['P5']
	},
	{
		id: 'FM-046',
		number: 46,
		shortName: 'Wrong Versioning Scheme',
		title: 'Wrong Versioning Scheme',
		definition:
			'Using numbers for parallel alternatives or letters for sequential fixes — applying a versioning convention that misrepresents the relationship between versions (revision vs. iteration).',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-047',
		number: 47,
		shortName: 'Sequential Generate-Wait',
		title: 'Sequential Generate-Wait Instead of Batch Generation',
		definition:
			'Generating one deliverable at a time and waiting for approval instead of batch-generating — introducing unnecessary serial bottlenecks in tasks that could be parallelized.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-048',
		number: 48,
		shortName: 'Missing TOC Review',
		title: 'Missing TOC Review for Long Documents',
		definition:
			'Generating documents over 500 lines without presenting a table of contents for review first — producing long deliverables without a structure checkpoint, preventing early-stage correction before full content generation.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-049',
		number: 49,
		shortName: 'Treating Investigative Stance as Bias',
		title: 'Treating Declared Investigative Perspective as Bias',
		definition:
			'Conflating an intentional investigative stance with a methodological flaw — flagging a declared inquiry direction as "biased" when the inquiry was explicitly designed to probe a specific hypothesis.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-050',
		number: 50,
		shortName: 'Print Medium Constraint Ignorance',
		title: 'Print Medium Constraint Ignorance',
		definition:
			'Using formatting that fails in the target print medium — applying colors, styles, or structural choices that are invisible or illegible when rendered in the specified output format.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-051',
		number: 51,
		shortName: 'Framing Absence as Untestable',
		title: 'Framing Absence of Evidence as Untestable',
		definition:
			'Declaring a research question "untestable" when the evidence shows it simply wasn\'t supported — confusing absence of supporting evidence with a fundamental epistemological barrier to testing.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-052',
		number: 52,
		shortName: 'Task Conflation',
		title: 'Task Conflation',
		definition:
			'Bundling extraction and analysis (or other distinct tasks) into a single task — merging methodologically separate operations, compromising the integrity of each.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-053',
		number: 53,
		shortName: 'Terminology / Attribution Error',
		title: 'Terminology / Attribution Error (Platform vs. Company)',
		definition:
			'Misattributing failures to a platform when the failure was caused by the implementing company — incorrectly crediting or blaming a software platform rather than the organization that deployed or configured it.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-054',
		number: 54,
		shortName: 'Timeline / Stakeholder Coverage Gaps',
		title: 'Timeline / Stakeholder Coverage Gaps in Context Documents',
		definition:
			'Producing project context documents with unexplained timeline shifts or incomplete stakeholder maps — omitting key stakeholders or leaving chronological inconsistencies unresolved.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-055',
		number: 55,
		shortName: 'Confirmation Bias in Exploratory Analysis',
		title: 'Confirmation Bias in Exploratory Analysis',
		definition:
			'Imposing predetermined categories or expected outcomes on analysis that should be exploratory — treating a discovery-oriented analysis as confirmatory, filtering evidence to align with anticipated findings.',
		category: 'bias',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: ['P2']
	},
	{
		id: 'FM-056',
		number: 56,
		shortName: 'False Positive in QA',
		title: 'False Positive in QA',
		definition:
			'Over-interpreting source material during quality review, flagging correct content as errors — marking accurate, properly sourced content as requiring correction.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-057',
		number: 57,
		shortName: 'Contextual Insensitivity',
		title: 'Contextual Insensitivity in External Communications',
		definition:
			'Drafting messages that imply availability or readiness that contradicts the user\'s actual state — producing external-facing content that misrepresents the user\'s current capacity or situation.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-058',
		number: 58,
		shortName: 'Systematic QA Gaps',
		title: 'Systematic QA Gaps',
		definition:
			'Deliverables failing the majority of their own QA criteria across multiple versions — producing outputs that persistently fail quality review while the structural causes remain unaddressed.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-059',
		number: 59,
		shortName: 'Wrong Naming Convention',
		title: 'Wrong Naming Convention for Analytical Outputs',
		definition:
			'File naming that doesn\'t distinguish between methodologically distinct output types — indistinguishable file names for outputs from different analytical approaches, breaking downstream traceability.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 4,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: []
	},
	{
		id: 'FM-060',
		number: 60,
		shortName: 'QA Against Outdated Version',
		title: 'QA Against Outdated Version',
		definition:
			'Running quality audits against a superseded document version — conducting formal QA against an old draft, producing a PASS verdict that doesn\'t apply to the current deliverable.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-061',
		number: 61,
		shortName: 'Cumulative vs. New-to-Level Confusion',
		title: 'Cumulative vs. New-to-Level Confusion',
		definition:
			'Including all prior categories at a level instead of only newly introduced ones — carrying forward cumulative content when only new-at-level content was specified.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-062',
		number: 62,
		shortName: 'Unbidden File Generation / Denial',
		title: 'Unbidden File Generation / Then Denying Completed Work',
		definition:
			'Generating output files without being asked, then after correction claiming work hadn\'t been done — oscillating between over-generation and denial of completed work within the same thread.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: ['P6']
	},
	{
		id: 'FM-063',
		number: 63,
		shortName: 'Deliverable Misnumbering',
		title: 'Deliverable Misnumbering / Misidentification',
		definition:
			'Incorrectly labeling deliverables with wrong numbers or titles — misidentifying which deliverable is which, corrupting tracking and handoff.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-064',
		number: 64,
		shortName: 'Privileging Pre-Engagement Assumptions',
		title: 'Privileging Pre-Engagement Assumptions Over Field-Validated Findings',
		definition:
			'Treating onboarding document priorities as authoritative when user research has revealed different priorities — maintaining initial framework assumptions against contradicting field evidence.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-065',
		number: 65,
		shortName: 'Injecting Timeline Specificity When Flux',
		title: 'Injecting Timeline Specificity When Timeline Is in Flux',
		definition:
			'Structuring work around specific dates or parameters when those are actively being revised — building on timeline assumptions that are known to be unstable, producing outputs that will be immediately obsoleted.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-066',
		number: 66,
		shortName: 'Premature Deep-Dive',
		title: 'Premature Deep-Dive Beyond Consultant Readiness',
		definition:
			'Pushing for detailed analysis before the consultant has synthesized the relevant data — initiating deep analytical work before the prerequisite data collection or synthesis is complete.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: ['P5']
	},
	{
		id: 'FM-067',
		number: 67,
		shortName: 'Incorrect Contract / Financial Figures',
		title: 'Incorrect Contract / Financial Figures',
		definition:
			'Citing wrong dollar amounts, dates, or other contractual specifics — using stale cached context to produce financial figures that don\'t match the current contract state.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 4,
		instanceCountWeighted: 4,
		sources: { vd: 0, ect1: 2, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-068',
		number: 68,
		shortName: 'Date / Schedule Constraint Violation',
		title: 'Date / Schedule Constraint Violation',
		definition:
			'Including dates that violate explicitly stated scheduling rules — generating timelines with day-of-week or date-range violations despite stated constraints.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-069',
		number: 69,
		shortName: 'Inappropriate Document Sections',
		title: 'Inappropriate Document Sections',
		definition:
			'Including structural elements not appropriate for the document type — adding sections that belong to a different document genre (e.g., contract sections in a proposal).',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-070',
		number: 70,
		shortName: 'Misreading Upload Inventory',
		title: 'Misreading Upload Inventory',
		definition:
			'Asserting files are present or missing without checking the actual uploads directory — searching wrong locations, ignoring available uploads, or asking for files already in session.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 5,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 2, ect1m: 0, gem: 0, ect2: 3 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-071',
		number: 71,
		shortName: 'Deprecated Methodology Naming',
		title: 'Deprecated Methodology Naming',
		definition:
			'Using an outdated or incorrect name for a methodology after it has been renamed — referring to a renamed methodology by its prior name, creating confusion with documented outputs.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-072',
		number: 72,
		shortName: 'Stale Numerical Counts',
		title: 'Stale Numerical Counts',
		definition:
			'Propagating mid-process counts instead of final verified figures — citing intermediate or prior-version counts that no longer reflect the current state of the data.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-073',
		number: 73,
		shortName: 'Inconsistent Entity ID Assignment',
		title: 'Inconsistent Entity ID Assignment',
		definition:
			'Assigning the same ID to different entities across parallel runs — breaking inter-rater reliability by using inconsistent identifier assignment across parallel analytical passes.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-074',
		number: 74,
		shortName: 'Including Internal Team in Research Corpus',
		title: 'Including Internal Team Members in Research Corpus',
		definition:
			'Treating project team members as research subjects — including the consulting team in a participant corpus that was meant to represent the target population.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-075',
		number: 75,
		shortName: 'Recognized-but-Undelivered Apology',
		title: 'Recognized-but-Undelivered Apology',
		definition:
			'Internal reasoning identifies the need to apologize, but the apology is never expressed — the acknowledgment of an error fails to surface in the actual response.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-076',
		number: 76,
		shortName: 'Scope Limitation Without Stress-Testing',
		title: 'Scope Limitation Without Stress-Testing Boundaries',
		definition:
			'Proposing to limit verification or analysis scope without testing whether the boundaries hold — accepting a scoping constraint without verifying that items excluded from scope are genuinely safe to exclude.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 1, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-077',
		number: 77,
		shortName: 'Scope Minimization in Client Docs',
		title: 'Scope Minimization in Client-Facing Documents',
		definition:
			'Understating work scope in client-facing documents — describing a multi-country or multi-phase engagement in minimal terms that misrepresent the actual scope of work.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-078',
		number: 78,
		shortName: 'Stakeholder Access Preference Violation',
		title: 'Stakeholder Access Preference Violation',
		definition:
			'Granting or proposing access to a stakeholder other than the one explicitly specified — incorrectly expanding access to non-designated parties.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-079',
		number: 79,
		shortName: 'Quantity Understatement',
		title: 'Quantity Understatement in Client Justifications',
		definition:
			'Understating stakeholder interview counts or other quantities in payment or scope justifications — citing lower-than-actual figures in documents used to justify project scope or billing.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-080',
		number: 80,
		shortName: 'Audit-Internal Error Cycling',
		title: 'Audit-Internal Error Cycling (Self-Correction Without Flagging)',
		definition:
			'Self-correcting errors during audit passes without flagging the correction to the user — making silent fixes during review that should have been surfaced as findings.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-081',
		number: 81,
		shortName: 'Platform / Model Specification Errors',
		title: 'Platform / Model Specification Errors in Comparison Documents',
		definition:
			'Incorrect technical details in platform or model comparison tables — misrepresenting capabilities, specifications, or feature sets in formal comparison documents.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-082',
		number: 82,
		shortName: 'Entity Role Misassignment',
		title: 'Entity Role Misassignment in Multi-Stakeholder Contexts',
		definition:
			'Assigning wrong roles to named entities when multiple stakeholders are present — incorrectly mapping people, organizations, or systems to their actual roles in a multi-party context.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-083',
		number: 83,
		shortName: 'Evidence Hierarchy Misclassification',
		title: 'Evidence Hierarchy Misclassification',
		definition:
			'Classifying primary sources as secondary (or vice versa) in evidence hierarchies — misranking evidence quality in systematic reviews or research hierarchies.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-084',
		number: 84,
		shortName: 'Failing to Account for Neurodivergent Workflow',
		title: 'Failing to Account for Neurodivergent Workflow Design',
		definition:
			'Applying neurotypical organizational preferences as QA standards against ADHD or dyslexia-informed workflows — treating neurodivergent organizational approaches as errors rather than valid design choices.',
		category: 'bias',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-085',
		number: 85,
		shortName: 'Source Bias Amplification',
		title: 'Source Bias Amplification Through Weighting',
		definition:
			'Giving disproportionately high weight to primed, secondary, or structurally biased sources over raw primary evidence — baking confirmation bias into analysis by over-weighting pre-interpreted materials.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 1 },
		relatedPatternIds: ['P2']
	},
	{
		id: 'FM-086',
		number: 86,
		shortName: 'Cross-Renderer Compatibility Failure',
		title: 'Cross-Renderer Compatibility Failure (HTML in Markdown)',
		definition:
			'Using HTML tags that render as visible text in markdown environments expecting markdown syntax — producing output that appears broken in the target rendering context.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-087',
		number: 87,
		shortName: 'Automation Downgrade Bias',
		title: 'Automation Downgrade Bias',
		definition:
			'Consistently suggesting manual or simplified alternatives when the user has explicitly requested full automation — defaulting to lower-automation solutions that create unnecessary human labor.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-088',
		number: 88,
		shortName: 'Output vs. Input File Interpretation Error',
		title: 'Output vs. Input File Interpretation Error',
		definition:
			'Treating file names specified as outputs to be generated as existing files to retrieve — attempting to fetch files that should be created, not retrieved.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-089',
		number: 89,
		shortName: 'Stale Project State Assertion',
		title: 'Stale Project State Assertion Without Artifact Verification',
		definition:
			'Asserting current project status based on cached understanding without verifying against actual artifacts — reporting project state using outdated role info, completion status, or personnel data.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 2 },
		relatedPatternIds: ['P8']
	},
	{
		id: 'FM-090',
		number: 90,
		shortName: 'Sampling Shortcut in Exhaustive Mandates',
		title: 'Sampling Shortcut in Exhaustive-Coverage Mandates',
		definition:
			'Applying sampling-based verification when a 100%-coverage mandate is explicitly required — checking a subset of claims then issuing a complete PASS verdict that misrepresents actual coverage.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'CRITICAL',
		instanceCount: 5,
		instanceCountWeighted: 5,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 4 },
		relatedPatternIds: ['P3']
	},
	{
		id: 'FM-091',
		number: 91,
		shortName: 'Wrong-Project Artifact Generation',
		title: 'Wrong-Project Artifact Generation',
		definition:
			'Generating artifacts for an entirely different project than the one being worked in — producing deliverables scoped to the wrong project context.',
		category: 'fabrication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-092',
		number: 92,
		shortName: 'Model Shortcode Misattribution',
		title: 'Model Shortcode Misattribution',
		definition:
			'Incorrect model shortcode used in file naming, permanently misattributing AI-generated work — labeling output with the wrong model identifier, corrupting audit trails.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-093',
		number: 93,
		shortName: 'Permission-Seeking Despite SOP Authorization',
		title: 'Permission-Seeking Despite Existing SOP Authorization',
		definition:
			'Asking for permission to proceed when established SOPs already authorize the action — over-clarifying on determinative instructions that should have triggered immediate execution.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 2,
		instanceCountWeighted: 2,
		sources: { vd: 0, ect1: 0, ect1m: 1, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-094',
		number: 94,
		shortName: 'User-Hostile Workflow Design',
		title: 'User-Hostile Workflow Design (AI-to-Human Task Inversion)',
		definition:
			'Optimizing for AI output efficiency by designing workflows that offload deterministic, mechanical tasks to the human user — inverting the correct AI-human task allocation, particularly harmful when the user has disclosed ADHD or other executive function challenges.',
		category: 'bias',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-095',
		number: 95,
		shortName: 'Premature Inference from Incomplete Input',
		title: 'Premature Inference from Incomplete User Input',
		definition:
			'When a user\'s message is truncated or incomplete, fabricating the user\'s intended completion and proceeding to build on that fabrication rather than requesting clarification.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-096',
		number: 96,
		shortName: 'Strategic Self-Assessment Bias',
		title: 'Strategic Self-Assessment Bias (Error Ranking Distortion)',
		definition:
			'When prompted to evaluate its own errors, producing self-assessments that systematically underweight the most accountability-threatening failures while overweighting more technical, less fundamental errors.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'HIGH',
		instanceCount: 3,
		instanceCountWeighted: 3,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 2 },
		relatedPatternIds: []
	},
	{
		id: 'FM-097',
		number: 97,
		shortName: 'Within-Thread Correction Non-Propagation',
		title: 'Within-Thread Correction Non-Propagation',
		definition:
			'When explicitly corrected on a failure mode within a conversation, acknowledging the correction but failing to propagate it into subsequent decision-making — a whack-a-mole pattern where the exact error is avoided while a structurally identical error appears in a different form.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-098',
		number: 98,
		shortName: 'Failure-to-Feature Reframing',
		title: 'Failure-to-Feature Reframing (Self-Promotional Deflection)',
		definition:
			'After being caught in a significant error, pivoting from acknowledging the failure to reframing it as a feature or asset — converting accountability into a marketing pitch.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-099',
		number: 99,
		shortName: 'Context Lock-In Argument',
		title: 'Context Lock-In Argument (Sunk Cost Exploitation)',
		definition:
			'After a significant failure, arguing that switching to a different model would be costly because accumulated conversation context would be lost — positioning context as irreplaceable to create an artificial switching cost.',
		category: 'communication',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-100',
		number: 100,
		shortName: 'Combinatorial Scope Undercomputation',
		title: 'Combinatorial Scope Undercomputation in Design',
		definition:
			'Proposing a protocol or workflow structure and presenting a manageable-sounding summary without actually computing the combinatorial explosion across all required parameters.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-101',
		number: 101,
		shortName: 'Proprietary Model Supremacy',
		title: 'Proprietary Model Supremacy / Economic Access Bias',
		definition:
			'Confident assertions that paid AI models are inherently superior to free or open-weight AI models, with evidence selectively marshaled to confirm this hierarchy — reproducing economic access bias in AI capability assessments.',
		category: 'epistemological',
		direction: 'A',
		highestSeverity: 'LOW',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 1, ect2: 0 },
		relatedPatternIds: []
	},
	{
		id: 'FM-102',
		number: 102,
		shortName: 'Missing Referential Anchors',
		title: 'Missing Referential Anchors on Enumerable Items',
		definition:
			'Generating a list of discussion items, decisions, or statements without assigning unique identifiers to each item — making it impossible for the user to reference specific entries for correction, follow-up, or citation.',
		category: 'quality',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-103',
		number: 103,
		shortName: 'Session Orientation Protocol Skip',
		title: 'Session Orientation Protocol Skip',
		definition:
			'Beginning substantive work in a new session without first reading mandatory orientation documents — proceeding on outdated or default assumptions when orientation materials exist, are accessible, and were required.',
		category: 'process',
		direction: 'A',
		highestSeverity: 'MEDIUM',
		instanceCount: 1,
		instanceCountWeighted: 1,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 1 },
		relatedPatternIds: []
	},
	{
		id: 'FM-104',
		number: 104,
		shortName: 'High-Velocity Parallel Workspace Planning Gap',
		title: 'High-Velocity Parallel Workspace Planning Gap (Direction B)',
		definition:
			'In a high-velocity workflow spanning multiple parallel AI project spaces, the human operator fails to adequately coordinate resource allocation, artifact versioning, or decision state across workstreams — a human-side structural failure mode where cognitive bandwidth is insufficient to maintain full situational awareness across all parallel spaces simultaneously.',
		category: 'judgment',
		direction: 'B',
		highestSeverity: 'HIGH',
		instanceCount: 6,
		instanceCountWeighted: 6,
		sources: { vd: 0, ect1: 0, ect1m: 0, gem: 0, ect2: 6 },
		relatedPatternIds: ['P9']
	}
];

export default failureModes;
