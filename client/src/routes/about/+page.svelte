<script>
	import { siteName } from '../../components/SiteName.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Fat Dog Club" />
</svelte:head>

<div class="text-column">
	<h1>About
		{siteName}
	</h1>

	<p>
		<span class="bold">
			{siteName}
		</span> was inspired by the purchase of an expired domain from NameCheap for the pricey sum of <span
			class="bold">$8</span>. The
		current plan for the site is to attempt to make an apparel site by utilising:
	</p>

	<ul>
		<li><span class="bold">-</span> SendGrid for email handling</li>
		<li>
			<span class="bold">-</span> Spreadshirt for on demand printing, display products from Spreadshirt store on
			site
		</li>
		<li><span class="bold">-</span> Svelte for the website framework</li>
		<li><span class="bold">-</span> Generate images in Midjourney for products</li>
		<li><span class="bold">-</span> Attempt to make it modular for easy setup for other similar sites</li>
	</ul>
</div>