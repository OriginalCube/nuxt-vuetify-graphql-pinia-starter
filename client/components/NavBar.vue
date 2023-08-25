<template>
	<div class="w-16 h-screen">
		<div class="w-16 bg-black m-0 h-screen fixed">
			<div class="pt-16 flex flex-col gap-8 items-center justify-center">
				<NavBarIcon name="Dashboard" image="full-moon" />
				<NavBarIcon name="Rockets" image="rocket" />
				<NavBarIcon name="Favorites" image="star" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>
