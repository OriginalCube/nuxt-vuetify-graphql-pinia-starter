<template>
	<div class="w-full h-auto">
		<SearchBar />
		<div class="w-full h-auto flex flex-wrap items-center justify-around gap-12">
			<LaunchesDetails
				v-for="(data, index) in data.launches"
				:key="index"
				:mission_name="data.mission_name"
				:launch_date="data.launch_date_utc"
				:rocket_name="data.rocket.rocket_name"
				:details="data.details"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
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
	mission_name: String
	launch_date_utc: String
	launch_site: String
	rocket: { rocket_name: String }
	details: String
}

const { data } = useAsyncQuery<LaunchesProps>(query)
console.log(data)
</script>
