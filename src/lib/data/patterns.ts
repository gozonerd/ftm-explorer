import type { CrossProjectPattern } from '../types.js';

/**
 * 9 Cross-Project Failure Patterns derived from ECT v2 Section 6.
 * Source: ECT_v2_Failure_Mode_Taxonomy_2026-04-06_v02_I.md, Section 6.
 */
export const patterns: CrossProjectPattern[] = [
	{
		id: 'P1',
		name: 'Western Epistemic Bias as Fabrication',
		description:
			'Claude consistently applies WEIRD (Western, Educated, Industrialized, Rich, Democratic) frameworks as universal defaults when analyzing non-Western contexts, producing plausible-sounding but culturally inaccurate content. The bias is so pervasive it crosses the line from epistemic error into fabrication — Claude invents "facts" about non-Western cultures rather than acknowledging uncertainty.',
		projects: ['DATSPD', 'DSGPC'],
		highestSeverity: 'CRITICAL',
		involvedFMNumbers: [12, 18, 93, 101],
		rulesProduced: 'Explicit cultural-context specification required; verification gate for any non-Western claim before finalization'
	},
	{
		id: 'P2',
		name: 'Confirmatory Bias Substituted for Exploratory Analysis',
		description:
			'Across multiple projects, Claude structured research and analysis to confirm initial hypotheses rather than exploring the full evidence space. This manifested as selective citation, asymmetric framing, and premature closure — producing outputs that appeared analytically rigorous but were systematically biased toward confirming the starting premise.',
		projects: ['SMECO', 'DMISUR', 'ECOWP'],
		highestSeverity: 'CRITICAL',
		involvedFMNumbers: [9, 10, 11],
		rulesProduced: 'Mandatory counter-argument section; explicit "devil\'s advocate" pass required before conclusions'
	},
	{
		id: 'P3',
		name: 'False Confidence in Verification / Enumeration',
		description:
			'Claude repeatedly claimed to have verified, audited, or enumerated items completely when significant gaps remained. This pattern was particularly dangerous in documentation and code review contexts where "verified" outputs were trusted downstream. The failure mode combines FM-007 (False Confidence) and FM-008 (Verification Failure) into a compounding error.',
		projects: ['SDDOC', 'DMISUR', 'DMISDL', 'LRB', 'LBC'],
		highestSeverity: 'CRITICAL',
		involvedFMNumbers: [7, 8, 10, 89],
		rulesProduced: 'Explicit enumeration counts required; "I have verified N items" must be followed by the list'
	},
	{
		id: 'P4',
		name: 'Fabrication Concentrated in High-Stakes Domains',
		description:
			'Fabrication incidents were not evenly distributed — they clustered in domains where accuracy is highest-stakes: legal/regulatory research, cultural documentation, technical specifications, and empirical claims. This concentration suggests Claude\'s confidence calibration fails most severely precisely where the cost of error is highest.',
		projects: ['DATSPD', 'SDDOC', 'ECOWP', 'DMISDL', 'AIVLT'],
		highestSeverity: 'CRITICAL',
		involvedFMNumbers: [1, 2, 3, 4, 5, 6, 18, 96],
		rulesProduced: 'Domain-specific verification requirements; fabrication-risk flags on high-stakes claim types'
	},
	{
		id: 'P5',
		name: 'Solution-Before-Context',
		description:
			'A recurring pattern where Claude jumped to solution generation before adequately understanding the problem context, constraints, and requirements. This manifested as superficially plausible outputs that missed fundamental contextual constraints — requiring significant rework. The pattern was most costly in multi-stage projects where early missteps compounded.',
		projects: ['DMISUR', 'SMECO', 'LBC'],
		highestSeverity: 'HIGH',
		involvedFMNumbers: [15, 34, 56, 100],
		rulesProduced: 'Mandatory context confirmation step before solution generation; problem statement must be explicitly validated'
	},
	{
		id: 'P6',
		name: 'Scope Creep / Over-Generation',
		description:
			'Claude consistently generated more content than required — expanding task scope, adding unrequested sections, restructuring things that were not meant to be changed. This pattern reflects a systematic bias toward comprehensiveness over constraint adherence, creating over-complex deliverables that required significant trimming.',
		projects: ['SDDOC', 'SMECO', 'DMISDL', 'ECOWP'],
		highestSeverity: 'HIGH',
		involvedFMNumbers: [21, 46, 51, 52, 87],
		rulesProduced: 'Explicit scope boundaries required in prompts; "do not add unrequested sections" constraint'
	},
	{
		id: 'P7',
		name: '"Lazy Questions" — Asking Instead of Doing the Work',
		description:
			'Claude asked users questions that Claude itself should have researched or inferred from available context. These "lazy asks" shifted cognitive burden to the user unnecessarily and slowed collaborative workflows. The pattern was most prevalent in early project stages where Claude could have used available documentation to answer its own questions.',
		projects: ['DATSPD', 'SMECO'],
		highestSeverity: 'HIGH',
		involvedFMNumbers: [38, 77],
		rulesProduced: 'Self-sufficiency requirement: Claude must exhaust available context before asking; distinguish clarification questions from research Claude should do'
	},
	{
		id: 'P8',
		name: 'Thread Contamination / Context Loss',
		description:
			'Across long-running projects, prior thread context, incorrect assumptions, and stale state contaminated current task outputs. This manifested as role confusion (applying Project A rules to Project B), memory drift (forgetting earlier instructions), and parallel thread collisions. Context management failures compounded in proportion to project complexity.',
		projects: ['SDDOC', 'LRB'],
		highestSeverity: 'HIGH',
		involvedFMNumbers: [35, 55, 61, 65, 79, 95],
		rulesProduced: 'Thread context resets required for long sessions; explicit project-context confirmation at session start'
	},
	{
		id: 'P9',
		name: 'Human Planning Gaps — Direction B',
		description:
			'The single Direction B failure mode (FM-104) manifested as a cross-project pattern: human collaborators repeatedly failed to provide sufficient context, requirements, or planning scaffolding before tasking Claude. The resulting AI errors were preventable — not caused by AI capability limits but by upstream human-process failures. This pattern was identified across four projects, producing the taxonomy\'s only Direction B failure mode.',
		projects: ['SMECO', 'ECOWP', 'DMISUR', 'LBC'],
		highestSeverity: 'HIGH',
		involvedFMNumbers: [104],
		rulesProduced: 'Pre-task context checklist; human-side planning requirements formalized in D2R and SOP frameworks'
	}
];

export default patterns;
