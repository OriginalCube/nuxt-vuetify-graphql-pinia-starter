<template>
	<div class="w-full h-auto flex items-center justify-center">
		<div class="w-5/6 h-28 flex flex-col items-center justify-center gap-2">
			<div class="w-2/3 h-auto">
				<input
					class="border-2 w-full p-3 rounded-sm bg-slate-700 shadow-md text-md outline-none text-white"
					placeholder="Search Rocket"
					type="text"
					name="search"
				/>
			</div>

			<div class="flex w-2/3 items-center justify-end gap-2">
				<div class="w-auto h-auto bg-slate-700 rounded-md">
					<button class="text-sm rounded-md text-slate-300 shadow-md p-2">Ascending</button>
				</div>
				<div class="w-auto h-auto bg-slate-700 rounded-md">
					<button class="text-sm rounded-md text-slate-300 shadow-md p-2">Descending</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>
