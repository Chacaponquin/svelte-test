<script lang="ts">
	import Header from './components/Header/Header.svelte';
	import Footer from './components/Footer/Footer.svelte';
	import Category from './components/Category/Category.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	$: categories = data.categories;
</script>

<svelte:head>
	<title>Categories List</title>
</svelte:head>

<main class="flex flex-col w-full h-screen justify-between">
	<Header />

	<section class="flex flex-col w-full">
		{#each categories as category (category.id)}
			<Category {category} />
		{/each}
	</section>

	<Footer />
</main>
