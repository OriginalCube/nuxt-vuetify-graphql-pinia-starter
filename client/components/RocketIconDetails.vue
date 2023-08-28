<template>
	<div class="w-1/3 h-auto flex items-center justify-center gap-4">
		<p class="text-xl font-medium text-pallete-himp">{{ labeled }}:</p>
		<p class="text-xl text-pallete-accent">{{ data }} {{ measurement }}</p>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	labeled: {
		type: String,
		default() {
			return 'No Label'
		},
	},
	data: {
		type: String,
		default() {
			return 'No Data'
		},
	},
	measurement: {
		type: String,
		default() {
			return 'No Data'
		},
	},
})
</script>
