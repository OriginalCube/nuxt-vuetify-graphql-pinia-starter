<template>
	<div class="w-full h-auto">
		<p class="text-7xl text-white">Rockets</p>
		<div v-if="data" class="w-full h-auto flex flex-wrap items-center justify-around gap-12">
			<RocketDetails
				v-for="(rocketData, index) in data.rockets"
				:id="rocketData.id"
				:key="index"
				:name="rocketData.name"
				:description="rocketData.description"
				:first_flight="rocketData.first_flight"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const query = gql`
	query {
		rockets {
			name
			description
			first_flight
			height {
				meters
			}
			diameter {
				meters
			}
			mass {
				kg
			}
			stages
			id
		}
	}
`
interface RocketProps {
	name: String
	description: String
	first_flight: String
	height: { meters: String }
	diameter: { meters: String }
	mass: { kg: String }
	stages: Number
	id: Number
}

const { data } = useAsyncQuery<RocketProps>(query)
</script>
