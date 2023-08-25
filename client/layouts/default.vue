<template>
	<div class="flex flex-row">
		<NavBar />
		<div class="flex flex-col w-full h-auto">
			<div class="w-auto h-auto p-4">
				<slot />
			</div>
			<MainFooter />
		</div>
	</div>
</template>
<script lang="ts" setup></script>
