<script lang="ts">
	import { categories } from '$lib/data/categories.js';
	import { failureModes } from '$lib/data/failure-modes.js';
	import { stats } from '$lib/data/statistics.js';
	import type { CategoryId, Direction } from '$lib/types.js';

	const maxCount = Math.max(...categories.map((c) => c.fmCount));

	function pct(count: number): string {
		return ((count / 104) * 100).toFixed(1);
	}

	const fmsByCategory = new Map(
		categories.map((c) => [c.id, failureModes.filter((fm) => fm.category === c.id)])
	);

	let expanded = $state<CategoryId | null>(null);

	function toggle(id: CategoryId) {
		expanded = expanded === id ? null : id;
	}

	const DIR_TEXT: Record<Direction, string> = { A: 'text-[var(--color-dir-a)]', B: 'text-[var(--color-dir-b)]' };
</script>

<svelte:head>
	<title>Categories — AI Failure Mode Taxonomy</title>
	<meta name="description" content="Explore all 9 failure categories of the Bidirectional AI Failure Mode Taxonomy." />
</svelte:head>

<div class="max-w-4xl mx-auto">
	<h1 class="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Failure Categories</h1>
	<p class="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
		104 failure modes across 9 categories. Direction A covers AI errors; Direction B covers human-process errors.
	</p>

	<!-- Summary strip -->
	<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-2xl font-bold text-[var(--color-accent)]">{stats.totalFMs}</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-0.5">Total FMs</p>
		</div>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-2xl font-bold text-[var(--color-dir-a)]">{stats.dirACount}</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-0.5">Direction A</p>
		</div>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-2xl font-bold text-[var(--color-dir-b)]">{stats.dirBCount}</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-0.5">Direction B</p>
		</div>
		<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-4 text-center">
			<p class="text-2xl font-bold text-[var(--color-text-primary)]">9</p>
			<p class="text-xs text-[var(--color-text-secondary)] mt-0.5">Categories</p>
		</div>
	</div>

	<!-- Distribution bar chart -->
	<section aria-labelledby="dist-heading" class="mb-10">
		<h2 id="dist-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			FM Count by Category
		</h2>
		<div class="space-y-3" role="img" aria-label="Bar chart showing failure mode count by category">
			{#each [...categories].sort((a, b) => b.fmCount - a.fmCount) as cat}
				<div class="flex items-center gap-3">
					<span class="text-xs text-[var(--color-text-secondary)] w-32 shrink-0 text-right">{cat.label}</span>
					<div class="flex-1 bg-[var(--color-bg-panel)] rounded-full h-5 overflow-hidden" role="presentation">
						<div
							class="h-full rounded-full bg-[var(--color-accent)]"
							style="width: {(cat.fmCount / maxCount) * 100}%"
						></div>
					</div>
					<span class="text-xs font-semibold text-[var(--color-text-primary)] w-20 shrink-0">
						{cat.fmCount} <span class="text-[var(--color-text-muted)] font-normal">({pct(cat.fmCount)}%)</span>
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Category cards -->
	<section aria-labelledby="cat-cards-heading">
		<h2 id="cat-cards-heading" class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
			Category Details
		</h2>
		<ul class="space-y-3" role="list">
			{#each categories as cat}
				{@const fms = fmsByCategory.get(cat.id) ?? []}
				{@const isOpen = expanded === cat.id}
				<li>
					<div class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl overflow-hidden">
						<button
							onclick={() => toggle(cat.id)}
							aria-expanded={isOpen}
							aria-controls="cat-detail-{cat.id}"
							class="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-[var(--color-bg-primary)]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)]"
						>
							<div class="flex-1 min-w-0">
								<div class="flex items-center gap-2 mb-1 flex-wrap">
									<span class="font-semibold text-[var(--color-text-primary)]">{cat.label}</span>
									<span class="text-xs text-[var(--color-accent)] font-medium">{cat.fmCount} FM{cat.fmCount !== 1 ? 's' : ''}</span>
									<span class="text-xs text-[var(--color-text-muted)]">
										{cat.direction === 'both' ? 'Dir A + B' : `Dir ${cat.direction}`}
									</span>
								</div>
								<p class="text-sm text-[var(--color-text-secondary)]">{cat.description}</p>
							</div>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="shrink-0 text-[var(--color-text-muted)] transition-transform {isOpen ? 'rotate-180' : ''}"
								aria-hidden="true">
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>

						{#if isOpen}
							<div id="cat-detail-{cat.id}" class="px-5 pb-4 pt-2 border-t border-[var(--color-border-muted)]">
								<ul class="space-y-1.5" role="list">
									{#each fms as fm}
										<li class="flex items-center gap-3 text-sm">
											<span class="font-mono text-[10px] text-[var(--color-text-muted)] w-14 shrink-0">{fm.id}</span>
											<span class="text-[var(--color-text-secondary)] flex-1 min-w-0">{fm.shortName}</span>
											<span class="shrink-0 text-[10px] font-bold {DIR_TEXT[fm.direction]}">Dir {fm.direction}</span>
										</li>
									{/each}
								</ul>
								<a href="/explorer"
									class="inline-block mt-3 text-xs text-[var(--color-accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded">
									View all in Explorer →
								</a>
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</section>
</div>
