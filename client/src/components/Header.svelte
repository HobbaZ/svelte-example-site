<script>
	import { page } from '$app/stores';
	import { siteName } from './SiteName.svelte';
	let logo = '/images/Fat Dog Club Logo White Text.png'
</script>

<header>
	<div class="mainImage">
		<a href="/">
			<img src="{logo}" alt="{siteName} logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname==='/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname==='/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>

</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		display: flex;
		flex-direction: row;

	}

	.corner a {
		display: flex;
		padding-top: 5px;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 10px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);

	}

	li[aria-current='page'] a {
		color: var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.mainImage {
		object-fit: contain;
	}

	img {
		width: 10%;
		height: fit-content;
	}
</style>