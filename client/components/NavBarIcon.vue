<template>
	<div class="h-auto w-full flex items-center justify-around gap-2 group opacity-80">
		<div class="h-auto w-4/6 bg-pallete-himp p-2 rounded-md hover:rounded-sm">
			<img class="w-full h-auto hover:rotate-45" :src="getImage(image)" alt="" />
		</div>

		<p
			class="absolute scale-0 left-20 bg-pallete-himp group-hover:scale-100 p-2 rounded-md shadow-xl text-pallete-background"
		>
			{{ name }}
		</p>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	image: { type: String, default: 'rocket' },
	name: String,
})
const getImage = (image: string) => {
	return `/assets/icons/${image}.png`
}
</script>
