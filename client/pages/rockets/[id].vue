<template>
	<div v-if="data" class="w-auto h-auto flex items-center justify-center gap-10">
		<div class="h-[500px] w-auto overflow-hidden">
			<img src="/assets/images/rocket.jpg" class="h-full w-full object-cover" alt="" />
		</div>
		<div class="h-auto w-80 text-white p-2">
			<p class="text-6xl font-bold">{{ data.rocket.name }}</p>
			<p class="text-md font-light">{{ data.rocket.first_flight }}</p>
			<p class="text-xl font-normal">{{ data.rocket.description }}</p>
			<p class="text-normal font-normal">Height :{{ data.rocket.height.meters }} m</p>
			<p class="text-normal font-normal">Diameter :{{ data.rocket.diameter.meters }} m</p>
			<p class="text-normal font-normal">Mass :{{ data.rocket.mass.kg }} kg</p>
			<p class="text-normal font-normal">Stages : {{ data.rocket.stages }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const query = gql`
	query ($id: ID!) {
		rocket(id: $id) {
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
		}
	}
`
const { data } = useAsyncQuery(query, { id: id.toString() })
</script>
