<template>
	<div
		class="w-full h-auto flex items-center justify-between gap-2 border-2 border-pallete-accent p-2 rounded-md"
	>
		<NuxtLink :to="address(id)" class="h-auto w-full flex items-center justify-between">
			<img src="/assets/icons/rocketIcon.png" class="h-8 w-auto" alt="" />
			<p class="text-2xl text-pallete-accent">{{ name }}</p>
			<p class="text-2xl text-pallete-accent">{{ first_flight }}</p>
		</NuxtLink>
		<img
			src="/assets/icons/p.png"
			class="h-8 w-auto rotate-45 cursor-pointer p-2"
			alt=""
			@click="handleRemove(id)"
		/>
	</div>
</template>

<script lang="ts" setup>
const favorites = useFavorites()
defineProps({
	name: {
		type: String,
		default() {
			return 'No name'
		},
	},
	first_flight: {
		type: String,
		default() {
			return 'No Date'
		},
	},
	id: {
		type: Number,
		default() {
			return 0
		},
	},
})

const address = (id: number) => {
	return `/rockets/${id}`
}

const handleRemove = (id: number) => {
	favorites.removeFavorite(id)
}
</script>
