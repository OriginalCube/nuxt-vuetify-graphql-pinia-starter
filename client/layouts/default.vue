<template>
	<div class="flex flex-row gap-4">
		<NavBar />
		<div class="flex flex-col">
			<div class="w-auto h-auto p-4">
				<slot />
			</div>
			<MainFooter />
		</div>
	</div>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
