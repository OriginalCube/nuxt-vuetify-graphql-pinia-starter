<template>
	<div class="h-auto w-[380px] flex flex-col gap-2 items-center p-4">
		<img src="/assets/icons/project.png" class="w-2/4 h-auto opacity-75" alt="" />
		<div class="w-full h-auto flex flex-col items-center justify-center gap-1">
			<p class="w-full text-4xl font-bold text-white">{{ mission_name }}</p>
			<div class="flex items-center justify-between flex-wrap w-full">
				<LauncheIcon :info="rocket_name" image="rocket" :date="false" />
				<LauncheIcon :info="launch_date" image="calendar" :date="true" />
				<button class="text-white p-2" @click="handleDetails">Details</button>
			</div>
			<div v-if="showDetails" class="w-full h-auto p-2">
				<p class="text-md w-full text-left text-white">{{ details ? details : 'No Details' }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const showDetails = ref(false)

const handleDetails = () => {
	showDetails.value = !showDetails.value
}

defineProps({
	mission_name: String,
	launch_date: String,
	rocket_name: String,
	details: {
		type: String,
		default() {
			return 'No Data'
		},
	},
})
</script>
