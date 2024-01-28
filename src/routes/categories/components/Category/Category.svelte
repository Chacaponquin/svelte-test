<script lang="ts">
	import Check from './components/Check.svelte';

	import type { Category } from '$lib/categories/domain';
	export let category: Category;
</script>

<div
	class="py-2 flex px-10 gap-x-10 items-center justify-between transition-all duration-300 cursor-pointer border-b-2 border-gray-200 hover:bg-yellow-300/50"
>
	<div class="flex items-center gap-x-10">
		<img
			src={category.image}
			alt={category.alt}
			class="object-cover rounded-full w-[70px] h-[70px]"
		/>

		<p>{category.name}</p>
	</div>

	<Check />
</div>
