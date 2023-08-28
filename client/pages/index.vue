<template>
	<div class="w-full h-auto">
		<div class="w-full h-auto flex items-center justify-start gap-8">
			<img src="/assets/icons/half-moon.png" class="h-24 w-auto p-2" alt="" />
			<p class="text-6xl text-pallete-header">Launches</p>
		</div>
		<SearchBar @sortDate="reverseDate" @searchYear="searchYear" />

		<div v-if="datas" class="w-full h-auto flex flex-wrap items-center justify-around gap-12">
			<LaunchesDetails
				v-for="(launch, index) in datas"
				:key="index"
				:mission_name="launch.mission_name"
				:launch_date="launch.launch_date_utc"
				:rocket_name="launch.rocket.rocket_name"
				:details="launch.details"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
defineEmits(['sortDate'])

const query = gql`
	query {
		launches {
			mission_name
			launch_date_utc
			rocket {
				rocket_name
			}
			details
		}
	}
`
interface LaunchesProps {
	launches: {
		mission_name: String
		launch_date_utc: String
		launch_site: { site_name: String }
		rocket: { rocket_name: String }
		details: String
	}
}

const { data } = useAsyncQuery<LaunchesProps>(query)
const datas = ref(data.value?.launches)
const reverseDate = () => {
	datas.value = datas.value?.reverse()
}

const searchYear = (year: number) => {
	const infoArr = []
	if (year !== 0) {
		for (let i = 0; i < data.value?.launches.length; ++i) {
			if (new Date(data.value?.launches[i].launch_date_utc).getFullYear() === year) {
				infoArr.push(data.value?.launches[i])
			}
		}
		datas.value = infoArr
	} else {
		datas.value = data.value?.launches
	}
}

useHead({
	title: 'Launches Dashboard',
	meta: [
		{
			name: 'SpaceX Launches Detail Page',
		},
	],
})
</script>
