<template>
	<div class="h-80 w-full p-2 bg-slate-900 flex items-center justify-evenly relative bottom-0">
		<div class="h-5/6 w-11/12 flex flex-col gap-8">
			<div class="flex items-center gap-4 w-auto h-16">
				<img src="/assets/icons/galaxy.png" class="h-5/6 w-auto" alt="" />
				<p class="text-4xl text-white font-medium">SpaceX API</p>
			</div>
			<div class="flex items-center justify-center gap-16">
				<div class="flex flex-col items-center justify-evenly gap-2">
					<FooterDetails name="Nuxt" image="nuxt" />
					<FooterDetails name="GrapQl" image="graphql" />
					<FooterDetails name="TailWind" image="tailwind" />
				</div>
				<div class="flex flex-col items-center justify-evenly gap-2">
					<FooterDetails name="Husky" image="husky" />
					<FooterDetails name="Pinia" image="pinia" />
				</div>
				<div class="flex flex-col items-end justify-center w-2/3 h-full">
					<div class="w-2/3 h-full flex flex-col gap-2 text-white items-end justify-around">
						<div class="flex items-end justify-center gap-2">
							<img src="/assets/icons/github.png" class="h-6 w-auto" alt="" />
							<p class="text-md">@OriginalCube</p>
						</div>
						<div class="flex items-end justify-center gap-2">
							<img src="/assets/icons/email.png" class="h-6 w-auto" alt="" />
							<p class="text-md">lancemiraflorcube@gmail.com</p>
						</div>
						<p class="text-sm">
							All icons used from this websites are all downloaded from
							<span class="text-blue-500">Flaticon</span>
							.
						</p>
						<p class="text-sm">Built from August 24 to 29</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// Had a different plan at first but this looks better I think.
</script>
