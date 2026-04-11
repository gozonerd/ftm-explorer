<script lang="ts">
	import { stats } from '$lib/data/statistics.js';
	import { categories } from '$lib/data/categories.js';
	import { failureModes } from '$lib/data/failure-modes.js';
	import type { Severity } from '$lib/types.js';

	const SEVERITY_ORDER: Severity[] = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];

	const SEVERITY_COLOR: Record<Severity, string> = {
		CRITICAL: 'var(--color-severity-critical)',
		HIGH: 'var(--color-severity-high)',
		MEDIUM: 'var(--color-severity-medium)',
		LOW: 'var(--color-severity-low)'
	};

	const SEVERITY_TEXT: Record<Severity, string> = {
		CRITICAL: 'text-[var(--color-severity-critical)]',
		HIGH: 'text-[var(--color-severity-high)]',
		MEDIUM: 'text-[var(--color-severity-medium)]',
		LOW: 'text-[var(--color-severity-low)]'
	};

	// Severity distribution data
	const severityData = [
		{ label: 'Critical', key: 'critical' as const, sev: 'CRITICAL' as Severity },
		{ label: 'High', key: 'high' as const, sev: 'HIGH' as Severity },
		{ label: 'Medium', key: 'medium' as const, sev: 'MEDIUM' as Severity },
		{ label: 'Low', key: 'low' as const, sev: 'LOW' as Severity }
	];

	const totalSeverity = Object.values(stats.severityDistribution).reduce((a, b) => a + b, 0);

	// Instance count tiers
	const instanceTiers = [
		{ label: 'Singletons (1 instance)', count: stats.instanceCountDistribution.singletons, note: '42%' },
		{ label: '2 instances', count: stats.instanceCountDistribution.twoInstances, note: '22%' },
		{ label: '3+ instances', count: stats.instanceCountDistribution.threeOrMore, note: '36%' }
	];
	const maxTier = Math.max(...instanceTiers.map((t) => t.count));

	// Category distribution
	const maxCatCount = Math.max(...categories.map((c) => c.fmCount));

	// Top 10 most evidenced FMs
	const top10 = [...failureModes].sort((a, b) => b.instanceCount - a.instanceCount).slice(0, 10);
	const maxInstances = top10[0].instanceCount;

	// Direction breakdown
	const dirAPct = ((stats.dirACount / stats.totalFMs) * 100).toFixed(1);
	const dirBPct = ((stats.dirBCount / stats.totalFMs) * 100).toFixed(1);
</script>

<svelte:head>
	<title>Statistics — AI Failure Mode Taxonomy</title>
	<meta name="description" content="Distribution charts and key findings from the Bidirectional AI Failure Mode Taxonomy." />
</svelte:head>

<div class="max-w-4xl mx-auto">
	<h1 class="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Statistics</h1>
	<p class="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
		Quantitative analysis of 104 failure modes derived from {stats.tier1StructuredIncidents} structured incidents across {stats.projectSpaces} project spaces.
	</p>

	<!-- Top-level stats -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-[var(--color-accent)]">{stats.totalFMs}</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-1">Failure modes</p>
		</div>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-[var(--color-text-primary)]">{stats.totalIncidents}+</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-1">Qualifying incidents</p>
		</div>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-[var(--color-text-primary)]">{stats.tier1StructuredIncidents}</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-1">Tier 1 structured</p>
		</div>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-[var(--color-severity-critical)]">{stats.criticalIncidents}</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-1">CRITICAL incidents</p>
		</div>
	</div>

	<!-- Direction split -->
	<section aria-labelledby="dir-heading" class="mb-10">
		<h2 id="dir-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			Direction Split
		</h2>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5">
			<div class="flex gap-2 h-8 rounded-full overflow-hidden mb-3" role="img" aria-label="Direction A: {dirAPct}%, Direction B: {dirBPct}%">
				<div class="bg-[var(--color-dir-a)] rounded-full" style="width: {dirAPct}%"></div>
				<div class="bg-[var(--color-dir-b)] rounded-full" style="width: {dirBPct}%"></div>
			</div>
			<div class="flex gap-6 text-sm">
				<div class="flex items-center gap-2">
					<span class="w-3 h-3 rounded-full bg-[var(--color-dir-a)] shrink-0"></span>
					<span class="text-[var(--color-text-secondary)]">Direction A (AI errors): <strong class="text-[var(--color-text-primary)]">{stats.dirACount} FMs ({dirAPct}%)</strong></span>
				</div>
				<div class="flex items-center gap-2">
					<span class="w-3 h-3 rounded-full bg-[var(--color-dir-b)] shrink-0"></span>
					<span class="text-[var(--color-text-secondary)]">Direction B (Human errors): <strong class="text-[var(--color-text-primary)]">{stats.dirBCount} FM ({dirBPct}%)</strong></span>
				</div>
			</div>
		</div>
	</section>

	<!-- Severity distribution -->
	<section aria-labelledby="sev-heading" class="mb-10">
		<h2 id="sev-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			Max Severity Distribution
		</h2>
		<p class="text-xs text-[var(--color-text-muted)] mb-3">
			Severity is per-incident, not per-FM. This chart shows the worst severity reached by any incident associated with each FM.
		</p>
		<div class="space-y-3" role="img" aria-label="Severity distribution bar chart">
			{#each severityData as { label, key, sev }}
				{@const count = stats.severityDistribution[key]}
				<div class="flex items-center gap-3">
					<span class="text-xs text-[var(--color-text-secondary)] w-20 shrink-0 text-right">{label}</span>
					<div class="flex-1 bg-[var(--color-bg-panel)] rounded-full h-5 overflow-hidden" role="presentation">
						<div
							class="h-full rounded-full"
							style="width: {(count / totalSeverity) * 100}%; background-color: {SEVERITY_COLOR[sev]}"
						></div>
					</div>
					<span class="text-xs font-semibold w-20 shrink-0 {SEVERITY_TEXT[sev]}">
						{count} <span class="text-[var(--color-text-muted)] font-normal">({((count / totalSeverity) * 100).toFixed(1)}%)</span>
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Instance count distribution -->
	<section aria-labelledby="inst-heading" class="mb-10">
		<h2 id="inst-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			Evidence Density
		</h2>
		<p class="text-xs text-[var(--color-text-muted)] mb-3">
			How many failure modes have only 1 documented instance vs. multiple?
		</p>
		<div class="space-y-3" role="img" aria-label="Evidence density bar chart">
			{#each instanceTiers as tier}
				<div class="flex items-center gap-3">
					<span class="text-xs text-[var(--color-text-secondary)] w-32 shrink-0 text-right">{tier.label}</span>
					<div class="flex-1 bg-[var(--color-bg-panel)] rounded-full h-5 overflow-hidden" role="presentation">
						<div
							class="h-full rounded-full bg-[var(--color-accent)]"
							style="width: {(tier.count / maxTier) * 100}%"
						></div>
					</div>
					<span class="text-xs font-semibold text-[var(--color-text-primary)] w-20 shrink-0">
						{tier.count} FMs
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Category distribution -->
	<section aria-labelledby="cat-heading" class="mb-10">
		<h2 id="cat-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			Category Distribution
		</h2>
		<div class="space-y-3" role="img" aria-label="Category distribution bar chart">
			{#each [...categories].sort((a, b) => b.fmCount - a.fmCount) as cat}
				<div class="flex items-center gap-3">
					<span class="text-xs text-[var(--color-text-secondary)] w-32 shrink-0 text-right">{cat.label}</span>
					<div class="flex-1 bg-[var(--color-bg-panel)] rounded-full h-5 overflow-hidden" role="presentation">
						<div
							class="h-full rounded-full bg-[var(--color-accent)]"
							style="width: {(cat.fmCount / maxCatCount) * 100}%"
						></div>
					</div>
					<span class="text-xs font-semibold text-[var(--color-text-primary)] w-20 shrink-0">
						{cat.fmCount} <span class="text-[var(--color-text-muted)] font-normal">({((cat.fmCount / 104) * 100).toFixed(1)}%)</span>
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Top 10 most evidenced FMs -->
	<section aria-labelledby="top10-heading" class="mb-10">
		<h2 id="top10-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			Top 10 Most Evidenced Failure Modes
		</h2>
		<div class="space-y-2">
			{#each top10 as fm}
				<div class="flex items-center gap-3">
					<span class="font-mono text-[10px] text-[var(--color-text-muted)] w-14 shrink-0">{fm.id}</span>
					<span class="text-xs text-[var(--color-text-secondary)] w-48 shrink-0 truncate">{fm.shortName}</span>
					<div class="flex-1 bg-[var(--color-bg-panel)] rounded-full h-4 overflow-hidden" role="presentation">
						<div
							class="h-full rounded-full bg-[var(--color-accent)]"
							style="width: {(fm.instanceCount / maxInstances) * 100}%"
						></div>
					</div>
					<span class="text-xs font-semibold text-[var(--color-text-primary)] w-12 shrink-0">
						{fm.instanceCount}
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Key findings -->
	<section aria-labelledby="findings-heading">
		<h2 id="findings-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			Key Findings
		</h2>
		<div class="space-y-4">
			<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5">
				<p class="text-sm font-semibold text-[var(--color-severity-critical)] mb-1">Fabrication and CRITICAL severity</p>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					Fabrication represents 13.1% of incidents but accounts for <strong class="text-[var(--color-text-primary)]">46% of all CRITICAL severity incidents</strong>.
					When AI fabricates, it tends to be catastrophic. When it makes process or quality errors, they tend to be medium or low severity.
				</p>
			</div>
			<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5">
				<p class="text-sm font-semibold text-[var(--color-accent)] mb-1">Direction B is rare but real</p>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					Only 1 of 104 failure modes (FM-104) is Direction B — human-process error.
					However, this FM has 8 documented instances across 4 projects, making it one of the more evidenced entries in the taxonomy.
					Its prevalence across projects led to formalization of pre-task context requirements.
				</p>
			</div>
			<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5">
				<p class="text-sm font-semibold text-[var(--color-accent)] mb-1">Singleton abundance</p>
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
					<strong class="text-[var(--color-text-primary)]">{stats.instanceCountDistribution.singletons} of 104 FMs</strong> have only one documented instance,
					suggesting the taxonomy is still growing — there are likely more incidents of these types that were not classified or not yet encountered.
				</p>
			</div>
		</div>
	</section>
</div>
