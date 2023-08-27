<template>
	<header class="w-16 h-screen">
		<div class="w-16 bg-black m-0 h-screen fixed">
			<div class="pt-16 flex flex-col gap-8 items-center justify-center">
				<NuxtLink to="/">
					<NavBarIcon name="Launches" image="full-moon" />
				</NuxtLink>
				<NuxtLink to="/rockets">
					<NavBarIcon name="Rockets" image="rocket" />
				</NuxtLink>
				<NavBarIcon name="Favorites" image="star" />
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup></script>
