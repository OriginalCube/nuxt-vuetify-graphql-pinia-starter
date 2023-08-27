<template>
	<div class="h-auto w-full flex flex-row">
		<NavBar />
		<div class="flex flex-col w-full h-auto">
			<div style="min-height: 100vh" class="w-auto h-auto p-4">
				<slot />
			</div>
			<MainFooter />
		</div>
	</div>
</template>
<script lang="ts" setup></script>
