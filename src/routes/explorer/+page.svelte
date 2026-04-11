<script lang="ts">
	import { FilterStore } from '$lib/FilterStore.svelte.js';
	import { categories } from '$lib/data/categories.js';
	import { getCategoryLabel } from '$lib/data/categories.js';
	import type { CategoryId, Direction, Severity, FailureMode } from '$lib/types.js';

	const store = new FilterStore();

	const SEVERITY_ORDER: Severity[] = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
	const DIRECTION_LABELS: Record<Direction, string> = {
		A: 'Direction A — AI errors',
		B: 'Direction B — Human errors'
	};

	const SEVERITY_LABELS: Record<Severity, string> = {
		CRITICAL: 'Critical',
		HIGH: 'High',
		MEDIUM: 'Medium',
		LOW: 'Low'
	};

	const SEVERITY_COLOR: Record<Severity, string> = {
		CRITICAL: 'text-[var(--color-severity-critical)] bg-[var(--color-severity-critical)]/10',
		HIGH: 'text-[var(--color-severity-high)] bg-[var(--color-severity-high)]/10',
		MEDIUM: 'text-[var(--color-severity-medium)] bg-[var(--color-severity-medium)]/10',
		LOW: 'text-[var(--color-severity-low)] bg-[var(--color-severity-low)]/10'
	};

	const DIR_COLOR: Record<Direction, string> = {
		A: 'text-[var(--color-dir-a)] bg-[var(--color-dir-a)]/10',
		B: 'text-[var(--color-dir-b)] bg-[var(--color-dir-b)]/10'
	};

	let expandedId = $state<string | null>(null);

	function toggleExpand(id: string) {
		expandedId = expandedId === id ? null : id;
	}

	function handleSearchInput(e: Event) {
		store.setSearch((e.target as HTMLInputElement).value);
	}

	function handleSortChange(e: Event) {
		store.setSort((e.target as HTMLSelectElement).value as Parameters<typeof store.setSort>[0]);
	}
</script>

<svelte:head>
	<title>Explorer — AI Failure Mode Taxonomy</title>
	<meta
		name="description"
		content="Filter and explore all 104 AI failure modes from the Bidirectional Failure Mode Taxonomy."
	/>
</svelte:head>

<div class="flex gap-8 min-h-[600px]">
	<!-- ── Sidebar ──────────────────────────────────────────────────────────── -->
	<aside
		class="w-64 shrink-0 hidden md:block"
		aria-label="Filter controls"
	>
		<div class="sticky top-20 space-y-6">
			<!-- Search -->
			<div>
				<label
					for="fm-search"
					class="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2"
				>
					Search
				</label>
				<input
					id="fm-search"
					type="search"
					placeholder="Name, ID, or keyword…"
					value={store.searchQuery}
					oninput={handleSearchInput}
					class="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
					aria-label="Search failure modes"
				/>
			</div>

			<!-- Sort -->
			<div>
				<label
					for="fm-sort"
					class="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2"
				>
					Sort by
				</label>
				<select
					id="fm-sort"
					value={store.sortKey}
					onchange={handleSortChange}
					class="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] text-sm text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
				>
					<option value="number">FM number</option>
					<option value="instances">Most evidenced</option>
					<option value="severity">Highest severity</option>
					<option value="alpha">Alphabetical</option>
				</select>
			</div>

			<!-- Direction -->
			<fieldset>
				<legend
					class="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2"
				>
					Direction
				</legend>
				{#each (['A', 'B'] as Direction[]) as dir}
					<label class="flex items-center gap-2 py-1 cursor-pointer group">
						<input
							type="checkbox"
							checked={store.directions.has(dir)}
							onchange={() => store.toggleDirection(dir)}
							class="rounded border-[var(--color-border-muted)] bg-[var(--color-bg-panel)] text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] w-4 h-4 shrink-0"
						/>
						<span class="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">
							{DIRECTION_LABELS[dir]}
						</span>
					</label>
				{/each}
			</fieldset>

			<!-- Severity -->
			<fieldset>
				<legend
					class="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2"
				>
					Max severity
				</legend>
				{#each SEVERITY_ORDER as sev}
					<label class="flex items-center gap-2 py-1 cursor-pointer group">
						<input
							type="checkbox"
							checked={store.severities.has(sev)}
							onchange={() => store.toggleSeverity(sev)}
							class="rounded border-[var(--color-border-muted)] bg-[var(--color-bg-panel)] text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] w-4 h-4 shrink-0"
						/>
						<span class="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">
							{SEVERITY_LABELS[sev]}
						</span>
					</label>
				{/each}
			</fieldset>

			<!-- Category -->
			<fieldset>
				<legend
					class="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2"
				>
					Category
				</legend>
				{#each categories as cat}
					<label class="flex items-center gap-2 py-1 cursor-pointer group">
						<input
							type="checkbox"
							checked={store.categories.has(cat.id)}
							onchange={() => store.toggleCategory(cat.id as CategoryId)}
							class="rounded border-[var(--color-border-muted)] bg-[var(--color-bg-panel)] text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] w-4 h-4 shrink-0"
						/>
						<span class="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">
							{cat.label}
							<span class="text-[var(--color-text-muted)] text-xs">({cat.fmCount})</span>
						</span>
					</label>
				{/each}
			</fieldset>

			<!-- Reset -->
			{#if store.hasActiveFilters}
				<button
					onclick={() => store.reset()}
					class="w-full text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] py-1.5 border border-[var(--color-border-muted)] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
				>
					Clear all filters
				</button>
			{/if}
		</div>
	</aside>

	<!-- ── Main content ────────────────────────────────────────────────────── -->
	<div class="flex-1 min-w-0">
		<!-- Header -->
		<div class="flex flex-wrap items-center justify-between gap-4 mb-6">
			<div>
				<h1 class="text-2xl font-bold text-[var(--color-text-primary)]">FM Explorer</h1>
				<p class="text-sm text-[var(--color-text-secondary)] mt-0.5">
					Showing
					<span class="font-semibold text-[var(--color-text-primary)]">{store.resultCount}</span>
					of 104 failure modes
				</p>
			</div>

			<!-- Mobile sort/filter summary -->
			<div class="flex items-center gap-2 md:hidden">
				<label for="fm-sort-mobile" class="sr-only">Sort by</label>
				<select
					id="fm-sort-mobile"
					value={store.sortKey}
					onchange={handleSortChange}
					class="px-3 py-2 rounded-lg bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] text-sm text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
				>
					<option value="number">FM #</option>
					<option value="instances">Most evidenced</option>
					<option value="severity">Severity</option>
					<option value="alpha">A–Z</option>
				</select>
			</div>
		</div>

		<!-- Mobile search -->
		<div class="md:hidden mb-4">
			<label for="fm-search-mobile" class="sr-only">Search failure modes</label>
			<input
				id="fm-search-mobile"
				type="search"
				placeholder="Search failure modes…"
				value={store.searchQuery}
				oninput={handleSearchInput}
				class="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
			/>
		</div>

		<!-- Active filter chips -->
		{#if store.hasActiveFilters}
			<div class="flex flex-wrap gap-2 mb-4" aria-live="polite" aria-label="Active filters">
				{#if store.searchQuery.trim()}
					<span
						class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] text-xs font-medium"
					>
						Search: "{store.searchQuery.trim()}"
						<button
							onclick={() => store.setSearch('')}
							aria-label="Remove search filter"
							class="ml-0.5 hover:opacity-70 focus-visible:outline-none"
						>×</button>
					</span>
				{/if}
				{#each [...store.directions] as dir}
					<span
						class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] text-xs font-medium"
					>
						Dir {dir}
						<button
							onclick={() => store.toggleDirection(dir)}
							aria-label="Remove direction {dir} filter"
							class="ml-0.5 hover:opacity-70 focus-visible:outline-none"
						>×</button>
					</span>
				{/each}
				{#each [...store.severities] as sev}
					<span
						class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] text-xs font-medium"
					>
						{SEVERITY_LABELS[sev]}
						<button
							onclick={() => store.toggleSeverity(sev)}
							aria-label="Remove severity {sev} filter"
							class="ml-0.5 hover:opacity-70 focus-visible:outline-none"
						>×</button>
					</span>
				{/each}
				{#each [...store.categories] as catId}
					<span
						class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] text-xs font-medium"
					>
						{getCategoryLabel(catId as CategoryId)}
						<button
							onclick={() => store.toggleCategory(catId as CategoryId)}
							aria-label="Remove category {catId} filter"
							class="ml-0.5 hover:opacity-70 focus-visible:outline-none"
						>×</button>
					</span>
				{/each}
				<button
					onclick={() => store.reset()}
					class="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] focus-visible:outline-none"
				>
					Clear all
				</button>
			</div>
		{/if}

		<!-- Empty state -->
		{#if store.resultCount === 0}
			<div class="text-center py-16 text-[var(--color-text-muted)]">
				<p class="text-lg mb-2">No failure modes match your filters.</p>
				<button
					onclick={() => store.reset()}
					class="text-sm text-[var(--color-accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
				>
					Clear all filters
				</button>
			</div>
		{:else}
			<!-- FM card list -->
			<ul class="space-y-2" role="list" aria-label="Failure mode results">
				{#each store.filtered as fm (fm.id)}
					{@const isExpanded = expandedId === fm.id}
					<li>
						<div
							class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl overflow-hidden"
						>
							<!-- Card header -->
							<button
								onclick={() => toggleExpand(fm.id)}
								aria-expanded={isExpanded}
								aria-controls="fm-detail-{fm.id}"
								class="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-[var(--color-bg-primary)]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)]"
							>
								<!-- FM number badge -->
								<span
									class="shrink-0 text-xs font-mono font-semibold text-[var(--color-text-muted)] pt-0.5 w-14"
									aria-label="Failure mode {fm.id}"
								>
									{fm.id}
								</span>

								<!-- Title block -->
								<div class="flex-1 min-w-0">
									<div class="flex flex-wrap items-center gap-2 mb-1">
										<span
											class="text-sm font-semibold text-[var(--color-text-primary)]"
										>
											{fm.shortName}
										</span>

										<!-- Direction badge -->
										<span
											class="text-[10px] font-bold px-1.5 py-0.5 rounded {DIR_COLOR[fm.direction]}"
											aria-label="Direction {fm.direction}"
										>
											Dir {fm.direction}
										</span>

										<!-- Severity badge -->
										<span
											class="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase {SEVERITY_COLOR[fm.highestSeverity]}"
											aria-label="Max severity: {fm.highestSeverity}"
										>
											{fm.highestSeverity}
										</span>
									</div>
									<p class="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
										{fm.definition}
									</p>
								</div>

								<!-- Instance count -->
								<div class="shrink-0 text-right">
									<span
										class="text-lg font-bold text-[var(--color-text-primary)]"
										aria-label="{fm.instanceCount} documented instances"
									>
										{fm.instanceCount}
									</span>
									<p class="text-[10px] text-[var(--color-text-muted)]">
										instance{fm.instanceCount === 1 ? '' : 's'}
									</p>
								</div>

								<!-- Expand chevron -->
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="shrink-0 text-[var(--color-text-muted)] transition-transform mt-0.5 {isExpanded
										? 'rotate-180'
										: ''}"
									aria-hidden="true"
								>
									<path d="M6 9l6 6 6-6" />
								</svg>
							</button>

							<!-- Expanded detail panel -->
							{#if isExpanded}
								<div
									id="fm-detail-{fm.id}"
									class="px-5 pb-5 pt-2 border-t border-[var(--color-border-muted)] space-y-4"
								>
									<!-- Full title + definition -->
									<div>
										<p class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">
											Full title
										</p>
										<p class="text-sm text-[var(--color-text-primary)]">{fm.title}</p>
									</div>
									<div>
										<p class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">
											Definition
										</p>
										<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{fm.definition}</p>
									</div>

									<!-- Meta row -->
									<div class="flex flex-wrap gap-6 text-xs">
										<div>
											<p class="text-[var(--color-text-muted)] uppercase tracking-wide font-semibold mb-0.5">Category</p>
											<p class="text-[var(--color-text-primary)]">{getCategoryLabel(fm.category)}</p>
										</div>
										<div>
											<p class="text-[var(--color-text-muted)] uppercase tracking-wide font-semibold mb-0.5">Direction</p>
											<p class="text-[var(--color-text-primary)]">{DIRECTION_LABELS[fm.direction]}</p>
										</div>
										<div>
											<p class="text-[var(--color-text-muted)] uppercase tracking-wide font-semibold mb-0.5">Max severity</p>
											<p class="font-semibold {fm.highestSeverity === 'CRITICAL' ? 'text-[var(--color-severity-critical)]' : fm.highestSeverity === 'HIGH' ? 'text-[var(--color-severity-high)]' : fm.highestSeverity === 'MEDIUM' ? 'text-[var(--color-severity-medium)]' : 'text-[var(--color-severity-low)]'}">{fm.highestSeverity}</p>
										</div>
										<div>
											<p class="text-[var(--color-text-muted)] uppercase tracking-wide font-semibold mb-0.5">Instances (total)</p>
											<p class="text-[var(--color-text-primary)]">{fm.instanceCount} ({fm.instanceCountWeighted} weighted)</p>
										</div>
									</div>

									<!-- Source breakdown -->
									<div>
										<p class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">
											Source breakdown
										</p>
										<div class="flex flex-wrap gap-3 text-xs">
											{#each [['VD', fm.sources.vd], ['ECT1', fm.sources.ect1], ['ECT1M', fm.sources.ect1m], ['GEM', fm.sources.gem], ['ECT2', fm.sources.ect2]] as [label, count]}
												<span
													class="px-2 py-0.5 rounded bg-[var(--color-bg-primary)] border border-[var(--color-border-muted)] text-[var(--color-text-secondary)]"
												>
													{label}: {count}
												</span>
											{/each}
										</div>
									</div>

									<!-- Related patterns -->
									{#if fm.relatedPatternIds.length > 0}
										<div>
											<p class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">
												Cross-project patterns
											</p>
											<div class="flex flex-wrap gap-2">
												{#each fm.relatedPatternIds as pid}
													<a
														href="/patterns#{pid}"
														class="text-xs px-2 py-0.5 rounded bg-[var(--color-accent-muted)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
													>
														{pid}
													</a>
												{/each}
											</div>
										</div>
									{/if}
								</div>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
