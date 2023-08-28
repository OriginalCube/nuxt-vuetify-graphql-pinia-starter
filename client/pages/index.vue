<template>
	<div class="w-full h-auto">
		<SearchBar @sortDate="reverseDate" @searchYear="searchYear" />
		<div v-if="datas" class="w-full h-auto flex flex-wrap items-center justify-around gap-12">
			<LaunchesDetails
				v-for="(launch, index) in datas.launches"
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
const datas = ref(data)

const reverseDate = () => {
	datas.value.value = datas.value.launches.reverse()
}

const searchYear = (year: number) => {
	console.log(data._rawValue)
	data.value.launches = data._rawValue.launches.filter(
		(e: any) => new Date(e.launch_date_utc).getFullYear() === year,
	)
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
