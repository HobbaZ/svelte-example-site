<script>
	import {siteName} from './SiteName.svelte';
	let date = new Date().getFullYear();
</script>

<footer>
	<p>
		{siteName} Est. {date}
	</p>
	<a href="https://www.linkedin.com/in/zachary-hobba-52aaa182/" title="Zac's LinkedIn"><i class="fab fa-linkedin"></i>
	</a>

	<a href="mailto:zachobba@gmail.com" title="zac's email address">
		<i class="fas fa-envelope-square footerIcon"></i>
	</a>
	<a href="https://github.com/HobbaZ" title="Zac's Github">
		<i class="fab fa-github footerIcon"></i>
	</a>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-size: 25px;
		padding-left: 10px;
		font-weight: bold;
	}

	footer a:hover {
		color: var(--color-theme-1);
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>