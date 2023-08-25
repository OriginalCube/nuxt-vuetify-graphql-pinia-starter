<template>
	<div class="h-auto w-full flex items-center justify-around gap-2 group">
		<div class="h-auto w-4/6 bg-slate-800 p-2 rounded-md hover:rounded-sm">
			<img class="w-full h-auto hover:rotate-45" :src="getImage(image)" alt="" />
		</div>

		<p class="absolute scale-0 left-20 bg-black group-hover:scale-100 p-2 rounded-md shadow-xl">
			{{ name }}
		</p>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		image: String,
		name: String,
	},
	methods: {
		getImage(image: string) {
			return `/assets/icons/${image}.png`
		},
	},
}
</script>

<style></style>
