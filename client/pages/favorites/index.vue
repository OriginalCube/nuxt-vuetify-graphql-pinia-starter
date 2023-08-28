<template>
	<div class="h-auto w-full flex flex-col items-center gap-4">
		<div class="w-full h-auto flex items-center justify-start gap-8">
			<img src="/assets/icons/launchThumbnail.png" class="h-24 w-auto p-2" alt="" />
			<p class="text-6xl text-pallete-header">Favorites</p>
		</div>
		<div class="flex w-full items-start justify-start gap-4">
			<div v-if="favorites" class="w-2/5 h-auto flex flex-col items-start justify-center p-4 gap-4">
				<RocketHeader
					v-for="(fav, index) in favorites"
					:id="fav.id"
					:key="index"
					:name="fav.name"
					:first_flight="fav.firstFlight"
				/>
			</div>
			<div v-if="favorites.length === 0" class="w-2/5 h-auto">
				<p class="text-4xl text-pallete-accent">No favorites yet</p>
			</div>
			<div class="w-3/5 h-auto flex flex-col gap-2 items-start justify-center">
				<p class="text-8xl font-bold text-pallete-header">SpaceX API</p>
				<p class="tex-4xl font-medium text-pallete-accent w-2/3">
					Welcome to the official SpaceX website, your portal to the forefront of space exploration
					and innovation. As a visionary aerospace company founded by Elon Musk, SpaceX has
					redefined the limits of possibility in the cosmos. With a relentless pursuit of reducing
					space transportation costs and enabling the colonization of Mars, we have pioneered
					revolutionary technologies like the Falcon rockets and the Crew Dragon spacecraft.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
useHead({
	title: 'Favorite Dashboard',
	meta: [{ name: 'Favorites Page where saved rockets are stored.' }],
})

const Favorites = useFavorites()
const { favorites } = storeToRefs(Favorites)
</script>
