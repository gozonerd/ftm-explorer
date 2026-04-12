<script lang="ts">
	import { stats } from '$lib/data/statistics.js';
</script>

<svelte:head>
	<title>About — AI Failure Mode Taxonomy Explorer</title>
	<meta name="description" content="Methodology and background for the Bidirectional AI Failure Mode Taxonomy derived from 247+ incidents across 19 Claude project spaces." />
</svelte:head>

<div class="max-w-3xl mx-auto">
	<h1 class="text-3xl font-bold text-[var(--color-text-primary)] mb-2">About & Methodology</h1>
	<p class="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
		How the Bidirectional AI Failure Mode Taxonomy was derived.
	</p>

	<!-- What this is -->
	<section aria-labelledby="what-heading" class="mb-8">
		<h2 id="what-heading" class="text-xl font-semibold text-[var(--color-text-primary)] mb-3">What This Is</h2>
		<div class="prose-section space-y-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
			<p>
				The <strong class="text-[var(--color-text-primary)]">Bidirectional AI Failure Mode Taxonomy</strong>
				is an empirically derived classification system covering failure modes in human-AI collaborative work.
				It is <em>bidirectional</em> because it captures failures in both directions of the collaboration:
				AI errors (Direction A) and human-process errors (Direction B).
			</p>
			<p>
				Unlike theoretical AI safety taxonomies, this taxonomy is grounded in {stats.totalIncidents}+ qualifying incidents
				documented across {stats.projectSpaces} Claude project spaces over approximately 14 months.
				{stats.tier1StructuredIncidents} of those incidents were Tier 1 structured — formally classified with severity, category, and project attribution.
			</p>
			<p>
				The result: {stats.totalFMs} named failure modes, 9 cross-project patterns, and a classification system
				that was validated against a hold-out set of incidents before publication.
			</p>
		</div>
	</section>

	<!-- Research team -->
	<section aria-labelledby="team-heading" class="mb-8">
		<h2 id="team-heading" class="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Research</h2>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
			<p>
				<strong class="text-[var(--color-text-primary)]">Research by Stahl Systems</strong> — an independent AI research practice.
				The taxonomy is the product of longitudinal naturalistic observation: real AI-assisted work projects,
				documented in real time, classified post-hoc using a structured incident methodology.
			</p>
			<p class="mt-2">
				This explorer was designed and built by
				<a href="https://krystalmartinez.com" target="_blank" rel="noopener noreferrer"
					class="text-[var(--color-accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded">
					Krystal Martinez
				</a>.
			</p>
		</div>
	</section>

	<!-- Methodology -->
	<section aria-labelledby="method-heading" class="mb-8">
		<h2 id="method-heading" class="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Methodology</h2>
		<div class="space-y-4">
			<div class="border-l-2 border-[var(--color-accent)] pl-4">
				<h3 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Incident Collection</h3>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					Incidents were collected from structured AI project documentation across 19 project spaces.
					A qualifying incident required: (1) a documented AI or human-process failure,
					(2) sufficient context to classify the failure type, and (3) assignment of severity
					using a defined rubric (CRITICAL/HIGH/MEDIUM/LOW).
				</p>
			</div>
			<div class="border-l-2 border-[var(--color-accent)] pl-4">
				<h3 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Taxonomy Construction</h3>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					Failure modes were derived bottom-up from incident clusters, then organized into 9 categories.
					Categories were not pre-defined — they emerged from the data.
					The taxonomy went through two major versions (v01: 93 FMs, v02: 104 FMs) as new project spaces were added.
				</p>
			</div>
			<div class="border-l-2 border-[var(--color-accent)] pl-4">
				<h3 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Instance Counting</h3>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					Each FM was counted across five source corpora: VD (Validation Dataset), ECT1 (Evaluation Corpus Tier 1),
					ECT1M (ECT1 Marginalia), GEM (General Evidence Module), and ECT2 (ECT Version 2).
					Both unweighted and weighted counts are provided; the explorer displays unweighted totals.
				</p>
			</div>
			<div class="border-l-2 border-[var(--color-accent)] pl-4">
				<h3 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Severity Assignment</h3>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					Severity is assigned per-incident, not per-FM. The same failure mode can manifest at different
					severity levels depending on context. The explorer displays the <em>highest severity reached</em>
					across all documented instances of each FM.
				</p>
			</div>
			<div class="border-l-2 border-[var(--color-accent)] pl-4">
				<h3 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Cross-Project Pattern Analysis</h3>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					After per-FM classification, cross-project patterns were identified by examining which failure modes
					co-occurred across multiple projects, whether they formed identifiable compounding dynamics,
					and whether they produced rules or remediations. 9 patterns were named and documented.
				</p>
			</div>
		</div>
	</section>

	<!-- Data sources -->
	<section aria-labelledby="sources-heading" class="mb-8">
		<h2 id="sources-heading" class="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Source Documents</h2>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5 text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-2">
			<p>The taxonomy and this explorer draw from internal Stahl Systems research documents:</p>
			<ul class="list-disc list-inside space-y-1 text-[var(--color-text-secondary)]">
				<li>Master AI Failure Mode Taxonomy v02 (2026-04-11)</li>
				<li>ECT v2 Failure Mode Taxonomy — Evaluation Corpus Tier 2 (2026-04-06)</li>
				<li>FMT v02 Instance Counts (2026-04-11)</li>
			</ul>
			<p class="mt-2 text-[var(--color-text-muted)]">
				Source documents are internal research artifacts. A preprint summary is forthcoming.
			</p>
		</div>
	</section>

	<!-- Portfolio cross-links -->
	<section aria-labelledby="portfolio-heading">
		<h2 id="portfolio-heading" class="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Related Tools</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
			<a href="https://governance.krystalmartinez.com" target="_blank" rel="noopener noreferrer"
				class="group bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] hover:border-[var(--color-accent)] rounded-xl p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
				<p class="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
					AI Governance Assessment
				</p>
				<p class="text-xs text-[var(--color-text-secondary)]">
					governance.krystalmartinez.com — Interactive readiness assessment for AI governance.
				</p>
			</a>
		</div>
	</section>
</div>
