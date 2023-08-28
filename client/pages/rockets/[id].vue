<template>
	<div v-if="data" class="w-auto h-auto flex flex-col items-center justify-center gap-10 mt-20">
		<div class="w-auto h-auto flex items-center justify-center gap-10">
			<div class="h-[500px] w-auto overflow-hidden">
				<img src="/assets/images/thumbnail.jpg" class="h-full w-full object-cover" alt="" />
			</div>
			<div class="h-auto w-80 text-white p-2 flex flex-col gap-4">
				<p class="text-7xl font-bold text-pallete-header">{{ data.rocket.name }}</p>
				<p class="text-md font-light text-pallete-accent">{{ data.rocket.first_flight }}</p>
				<p class="text-xl font-normal text-pallete-accent">{{ data.rocket.description }}</p>
				<div
					class="h-auto border-2 border-pallete-imp text-pallete-imp cursor-pointer rounded-md w-2/3 hover:bg-pallete-imp hover:text-pallete-background"
				>
					<button class="outline-none p-2 m-auto" @click="handleFavorites">Add to Favorites</button>
				</div>
			</div>
		</div>
		<p class="text-6xl font-bold text-pallete-header w-full text-center">Rocket Specifications</p>
		<div class="h-auto w-2/5 flex flex-wrap justify-around items-center gap-8">
			<RocketIconDetails labeled="Height" measurement="m" :data="data.rocket.height.meters" />
			<RocketIconDetails labeled="Diameter" measurement="m" :data="data.rocket.diameter.meters" />
			<RocketIconDetails labeled="Mass" measurement="kg" :data="data.rocket.mass.kg" />
			<RocketIconDetails labeled="Stages" measurement=" " :data="data.rocket.stages" />
		</div>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: `SpaceX Rocket details`,
	meta: [{ name: `SpaceX Rocket full description` }],
})

const handleFavorites = () => {
	console.log('hello practice')
}

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
