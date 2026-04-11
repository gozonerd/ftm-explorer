<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let { children } = $props();

	let isDark = $state(true);

	const navLinks = [
		{ href: '/explorer', label: 'Explorer' },
		{ href: '/categories', label: 'Categories' },
		{ href: '/patterns', label: 'Patterns' },
		{ href: '/statistics', label: 'Statistics' },
		{ href: '/about', label: 'About' }
	];

	onMount(() => {
		const stored = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const useDark = stored ? stored === 'dark' : prefersDark !== false;
		isDark = useDark;
		if (!useDark) {
			document.documentElement.classList.add('light');
		} else {
			document.documentElement.classList.remove('light');
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.remove('light');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.add('light');
			localStorage.setItem('theme', 'light');
		}
	}

	function isActive(href: string): boolean {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white focus:rounded-md focus:font-semibold"
>
	Skip to main content
</a>

<div class="min-h-screen flex flex-col bg-[var(--color-bg-primary)]">
	<header class="border-b border-[var(--color-border-muted)] px-4 py-3 sticky top-0 z-40 bg-[var(--color-bg-primary)]">
		<nav
			class="max-w-6xl mx-auto flex items-center justify-between gap-4"
			aria-label="Primary navigation"
		>
			<!-- Logo / home link -->
			<a
				href="/"
				class="text-base font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded shrink-0"
				aria-label="FTM Explorer home"
			>
				FTM Explorer
			</a>

			<!-- Nav links — desktop -->
			<ul class="hidden md:flex items-center gap-1 list-none m-0 p-0" role="list">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							aria-current={isActive(link.href) ? 'page' : undefined}
							class="px-3 py-1.5 rounded text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
								{isActive(link.href)
								? 'text-[var(--color-accent)] bg-[var(--color-accent-muted)] font-medium'
								: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-panel)]'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Theme toggle -->
			<button
				onclick={toggleTheme}
				aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
				class="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-panel)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] shrink-0"
			>
				{#if isDark}
					<!-- Sun icon -->
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="5" />
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</svg>
				{:else}
					<!-- Moon icon -->
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				{/if}
			</button>
		</nav>

		<!-- Mobile nav — py-3 ensures ≥44px touch target -->
		<nav
			class="md:hidden mt-2 flex gap-1 overflow-x-auto pb-1"
			aria-label="Mobile navigation"
		>
			{#each navLinks as link}
				<a
					href={link.href}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class="px-3 py-3 rounded text-sm whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[44px] inline-flex items-center
						{isActive(link.href)
						? 'text-[var(--color-accent)] bg-[var(--color-accent-muted)] font-medium'
						: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-panel)]'}"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</header>

	<main id="main-content" class="flex-1 px-4 py-8" tabindex="-1">
		<div class="max-w-6xl mx-auto">
			{@render children()}
		</div>
	</main>

	<footer class="border-t border-[var(--color-border-muted)] px-4 py-6 mt-8">
		<div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="text-xs text-[var(--color-text-secondary)] text-center sm:text-left">
				Built by
				<a
					href="https://krystalmartinez.com"
					class="hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
					target="_blank"
					rel="noopener noreferrer"
				>
					Krystal Martinez
				</a>
				&mdash; Research by Stahl Systems
			</p>
			<nav
				class="flex flex-wrap justify-center gap-4 text-xs text-[var(--color-text-secondary)]"
				aria-label="Footer navigation"
			>
				<a
					href="https://governance.krystalmartinez.com"
					class="hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
					target="_blank"
					rel="noopener noreferrer"
				>
					Governance Tool
				</a>
				<a
					href="/about"
					class="hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
				>
					About
				</a>
				<a
					href="/privacy"
					class="hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
				>
					Privacy Policy
				</a>
				<a
					href="/terms"
					class="hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
				>
					Terms of Use
				</a>
			</nav>
		</div>
	</footer>
</div>
