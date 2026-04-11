<script lang="ts">
	import { patterns } from '$lib/data/patterns.js';
	import { failureModes } from '$lib/data/failure-modes.js';
	import type { Severity } from '$lib/types.js';

	const SEVERITY_COLOR: Record<Severity, string> = {
		CRITICAL: 'text-[var(--color-severity-critical)] bg-[var(--color-severity-critical)]/10',
		HIGH: 'text-[var(--color-severity-high)] bg-[var(--color-severity-high)]/10',
		MEDIUM: 'text-[var(--color-severity-medium)] bg-[var(--color-severity-medium)]/10',
		LOW: 'text-[var(--color-severity-low)] bg-[var(--color-severity-low)]/10'
	};

	function getFmShortName(num: number): string {
		return failureModes.find((fm) => fm.number === num)?.shortName ?? `FM-${String(num).padStart(3, '0')}`;
	}

	function fmId(num: number): string {
		return `FM-${String(num).padStart(3, '0')}`;
	}
</script>

<svelte:head>
	<title>Cross-Project Patterns — AI Failure Mode Taxonomy</title>
	<meta name="description" content="9 named cross-project failure patterns identified across 19 Claude project spaces." />
</svelte:head>

<div class="max-w-4xl mx-auto">
	<h1 class="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Cross-Project Patterns</h1>
	<p class="text-[var(--color-text-secondary)] mb-2 leading-relaxed">
		Beyond individual failure modes, 9 named patterns emerged from systematic analysis across 19 project spaces.
		These patterns represent compounding or recurring failure dynamics that manifest across projects — not just isolated incidents.
	</p>
	<p class="text-sm text-[var(--color-text-muted)] mb-8">
		Source: ECT v2 Section 6 — Cross-Project Pattern Analysis.
	</p>

	<!-- Pattern cards -->
	<ul class="space-y-6" role="list">
		{#each patterns as pattern}
			<li
				id={pattern.id}
				class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-6"
			>
				<!-- Header -->
				<div class="flex flex-wrap items-start gap-3 mb-4">
					<span class="text-xs font-bold text-[var(--color-text-muted)] bg-[var(--color-bg-primary)] px-2 py-0.5 rounded font-mono">
						{pattern.id}
					</span>
					<h2 class="text-lg font-semibold text-[var(--color-text-primary)] flex-1 min-w-0">
						{pattern.name}
					</h2>
					<span class="text-[10px] font-bold px-2 py-0.5 rounded uppercase {SEVERITY_COLOR[pattern.highestSeverity]}"
						aria-label="Highest severity: {pattern.highestSeverity}">
						{pattern.highestSeverity}
					</span>
				</div>

				<!-- Description -->
				<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
					{pattern.description}
				</p>

				<!-- Meta -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
					<div>
						<p class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">
							Projects affected
						</p>
						<div class="flex flex-wrap gap-1.5">
							{#each pattern.projects as proj}
								<span class="text-xs px-2 py-0.5 rounded bg-[var(--color-bg-primary)] border border-[var(--color-border-muted)] text-[var(--color-text-secondary)]">
									{proj}
								</span>
							{/each}
						</div>
					</div>
					<div>
						<p class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">
							Involved failure modes
						</p>
						<div class="flex flex-wrap gap-1.5">
							{#each pattern.involvedFMNumbers as num}
								<a
									href="/explorer"
									title="{fmId(num)}: {getFmShortName(num)}"
									class="text-xs px-2 py-0.5 rounded bg-[var(--color-accent-muted)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] font-mono"
								>
									{fmId(num)}
								</a>
							{/each}
						</div>
					</div>
				</div>

				<!-- Rules produced -->
				{#if pattern.rulesProduced}
					<div class="border-t border-[var(--color-border-muted)] pt-3 mt-2">
						<p class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">
							Rules / remediations produced
						</p>
						<p class="text-xs text-[var(--color-text-secondary)] leading-relaxed">
							{pattern.rulesProduced}
						</p>
					</div>
				{/if}
			</li>
		{/each}
	</ul>

	<!-- Cross-link to about -->
	<div class="mt-10 text-center">
		<a href="/about"
			class="text-sm text-[var(--color-accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded">
			Read about the research methodology →
		</a>
	</div>
</div>
