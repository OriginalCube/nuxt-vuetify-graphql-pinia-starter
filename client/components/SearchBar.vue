<template>
	<div class="w-full h-auto flex items-center justify-center">
		<div class="w-5/6 h-28 flex flex-col items-center justify-center gap-2">
			<div
				class="w-2/3 h-auto flex items-center justify-center gap-2 rounded-sm bg-slate-700 shadow-md"
			>
				<input
					v-model="year"
					class="border-2 w-full p-3 text-md outline-none text-pallete-accent"
					placeholder="Enter Year Launch"
					type="number"
					name="search"
				/>
				<img
					src="/assets/icons/search.png"
					class="h-8 w-auto p-2 cursor-pointer"
					alt=""
					@click="handleYear"
				/>
			</div>

			<div class="flex w-2/3 items-center justify-end gap-2">
				<div
					class="w-auto h-auto border-2 border-pallete-imp rounded-md text-pallete-imp hover:bg-pallete-imp hover:text-pallete-background"
				>
					<button class="text-sm rounded-md shadow-md p-2" @click="handleDate">
						Re:Sort By Date
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const year = ref(0)
const emit = defineEmits(['sortDate', 'searchYear'])

const handleYear = () => {
	emit('searchYear', year.value)
}

const handleDate = () => {
	emit('sortDate')
}
</script>
