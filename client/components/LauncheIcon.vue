<template>
	<div class="w-1/2 flex items-center justify-start gap-2">
		<img class="h-8 p-1 w-auto" :src="imageUrl(image)" alt="" />
		<p class="text-md text-white">{{ getInfo(info, date) }}</p>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	info: {
		type: String,
		default() {
			return 'No data'
		},
	},
	image: {
		type: String,
		default() {
			return 'rocket'
		},
	},
	date: {
		type: Boolean,
		default() {
			return false
		},
	},
})

const imageUrl = (str: string) => {
	return `/assets/icons/${str}.png`
}

const getInfo = (str: string, date: boolean) => {
	if (date) {
		const getDate = new Date(str)
		return `${getDate.getDay() + 1} / ${getDate.getMonth()} / ${getDate.getFullYear()}`
	} else {
		return str
	}
}
</script>
