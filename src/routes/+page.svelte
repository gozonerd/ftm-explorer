<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>AI Failure Mode Taxonomy Explorer | Krystal Martinez</title>
</svelte:head>

<!-- Hero -->
<div class="text-center max-w-3xl mx-auto mb-16 pt-8">
	<div
		class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] text-xs font-medium mb-6"
	>
		<span aria-hidden="true">●</span>
		Original Research &mdash; Stahl Systems
	</div>
	<h1
		class="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-6"
		data-testid="hero-headline"
	>
		104 Failure Modes.<br />247 Incidents.<br />19 Project Spaces.
	</h1>
	<p class="text-lg text-[var(--color-text-secondary)] mb-3 leading-relaxed">
		The first bidirectional taxonomy of human-AI collaborative failure.
	</p>
	<p class="text-base text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-2xl mx-auto">
		Empirically derived from 129 structured incidents across 21 Claude project spaces. Covers AI
		errors (Direction A), human-process errors (Direction B), and 9 cross-project failure patterns.
	</p>
	<button
		onclick={() => goto('/explorer')}
		class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
		data-testid="cta-explore"
	>
		Explore the Taxonomy
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	</button>
</div>

<!-- Stats strip -->
<div
	class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
	data-testid="stats-strip"
	aria-label="Taxonomy statistics"
>
	<div
		class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5 text-center"
	>
		<p class="text-3xl font-bold text-[var(--color-accent)] mb-1" aria-label="104 failure modes">104</p>
		<p class="text-xs text-[var(--color-text-secondary)]">Failure modes catalogued</p>
	</div>
	<div
		class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5 text-center"
	>
		<p class="text-3xl font-bold text-[var(--color-text-primary)] mb-1" aria-label="247 plus incidents">247+</p>
		<p class="text-xs text-[var(--color-text-secondary)]">Qualifying incidents analyzed</p>
	</div>
	<div
		class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5 text-center"
	>
		<p
			class="text-3xl font-bold text-[var(--color-dir-a)] mb-1"
			aria-label="103 Direction A AI errors"
		>103</p>
		<p class="text-xs text-[var(--color-text-secondary)]">Direction A &mdash; AI errors</p>
	</div>
	<div
		class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5 text-center"
	>
		<p
			class="text-3xl font-bold text-[var(--color-dir-b)] mb-1"
			aria-label="1 Direction B human error"
		>1</p>
		<p class="text-xs text-[var(--color-text-secondary)]">Direction B &mdash; human error</p>
	</div>
	<div
		class="col-span-2 md:col-span-1 bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-5 text-center"
	>
		<p
			class="text-3xl font-bold text-[var(--color-severity-critical)] mb-1"
			aria-label="13 critical severity incidents"
		>13</p>
		<p class="text-xs text-[var(--color-text-secondary)]">CRITICAL-severity incidents</p>
	</div>
</div>

<!-- Key finding callout -->
<div
	class="bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] rounded-xl p-6 mb-16 max-w-3xl mx-auto"
>
	<p class="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-2">
		Key Finding
	</p>
	<p class="text-lg text-[var(--color-text-primary)] leading-relaxed">
		Fabrication represents <strong>13.1% of incidents</strong> but accounts for
		<strong class="text-[var(--color-severity-critical)]">46% of all CRITICAL severity incidents</strong>.
		When AI fabricates, it tends to be catastrophic. When it makes process or quality errors, they
		tend to be medium or low severity.
	</p>
</div>

<!-- Navigation cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
	<a
		href="/explorer"
		class="group bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] hover:border-[var(--color-accent)] rounded-xl p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
	>
		<h2 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
			Explorer
		</h2>
		<p class="text-xs text-[var(--color-text-secondary)]">
			Filter and drill into all 104 failure modes
		</p>
	</a>
	<a
		href="/categories"
		class="group bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] hover:border-[var(--color-accent)] rounded-xl p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
	>
		<h2 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
			Categories
		</h2>
		<p class="text-xs text-[var(--color-text-secondary)]">
			Explore the taxonomy by failure category
		</p>
	</a>
	<a
		href="/patterns"
		class="group bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] hover:border-[var(--color-accent)] rounded-xl p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
	>
		<h2 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
			Patterns
		</h2>
		<p class="text-xs text-[var(--color-text-secondary)]">
			9 cross-project failure patterns
		</p>
	</a>
	<a
		href="/statistics"
		class="group bg-[var(--color-bg-panel)] border border-[var(--color-border-muted)] hover:border-[var(--color-accent)] rounded-xl p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
	>
		<h2 class="text-sm font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
			Statistics
		</h2>
		<p class="text-xs text-[var(--color-text-secondary)]">
			Distribution charts and key findings
		</p>
	</a>
</div>
