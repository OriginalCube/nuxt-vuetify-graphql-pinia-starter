<template>
	<div class="h-auto w-[380px] flex flex-col gap-2 items-center p-4">
		<img src="/assets/icons/project.png" class="w-2/4 h-auto opacity-75" alt="" />
		<div class="w-full h-auto flex flex-col items-center justify-center gap-1">
			<p class="w-full text-4xl font-bold text-white">{{ name }}</p>
			<div class="flex items-center justify-between flex-wrap w-full">
				<LauncheIcon :info="first_flight" image="rocket" :date="false" />
				<button class="text-white p-2" @click="handleDetails">Details</button>
			</div>
			<div v-if="showDetails" class="w-full h-auto p-2">
				<p class="text-md w-full text-left text-white">
					{{ description ? description : 'No Details' }}
				</p>
			</div>
			<NuxtLink :to="address(id)" class="w-auto h-auto border-2 rounded-md text-white">
				<button class="p-1 px-4 outline-none">More Info</button>
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
const showDetails = ref(false)

const handleDetails = () => {
	showDetails.value = !showDetails.value
}

defineProps({
	name: {
		type: String,
		default() {
			return 'No name'
		},
	},
	description: {
		type: String,
		default() {
			return 'No description'
		},
	},
	first_flight: {
		type: String,
		default() {
			return 'No Info'
		},
	},
	id: {
		type: String,
		default() {
			return 0
		},
	},
})

const address = (id: number) => {
	return `/rockets/${id}`
}
</script>
