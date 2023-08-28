<template>
	<div class="flex items-center justify-around gap-1 w-28 h-auto p-2 hover:scale-105">
		<img :src="imageAddress()" alt="" class="h-auto w-8" />
		<p class="text-pallete-header">{{ props.name }}</p>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	image: String,
	name: String,
})

const imageAddress = () => {
	return `/assets/icons/${props.image}.png`
}
</script>
