<script>
	import Poster from '$lib/components/Poster.svelte';
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { Icon } from 'svelte-awesome';
	import { chevronDown } from 'svelte-awesome/icons';
	import Countdown from './Countdown.svelte';
	import { divide } from 'lodash-es';
	import TopNavSection from './TopNavSection.svelte';
</script>

<header class="flex-center relative w-full bg-shark custom-header" id="header">
	<Poster />
	<div class="relative mt-3 w-full">
		<TopNavSection></TopNavSection>

		<div class="custom-flex-container">
			<div class="order-2 md-order-2">
				<TagBlock direction="right" extend={true} backgroundColor="north3">
					<div class="inline-flex text-lg text-white">
						<div class="text-xl">
							<span class="pr-4 text-ordina font-bold">Save the date 16-10-2025</span>
							<Countdown></Countdown>
						</div>
					</div>
				</TagBlock>
			</div>
			<div class="order-3 md-order-3">
				<a href="https://pythonconferentie.nl" class="custom-image-container">
					<img src="/logo-sopra4.svg" alt="Python Conference Logo" class="custom-image" />
				</a>
			</div>
			<div class="call-for-sponsors">
				<TagBlock direction="right" extend={true} backgroundColor="north2">
					<div class="inline-flex text-lg text-white">
						<span class="pr-4 text-ordina font-bold">Call for Sponsors</span>
					</div>
				</TagBlock>
			</div>
			<div class="order-4 md-order-4">
				<TagBlock direction="left" extend={true} backgroundColor="north2">
					<div class="inline-flex text-lg text-white">
						<span class="pr-4 text-ordina font-bold">Tickets coming soon</span>
					</div>
				</TagBlock>
			</div>
			<div class="call-for-volenteers">
				<TagBlock direction="left" extend={true} backgroundColor="north2">
					<div class="inline-flex text-lg text-white">
						<span class="pr-4 text-ordina font-bold">Call for Volunteers</span>
					</div>
				</TagBlock>
			</div>
		</div>

		<div class="mt-4 flex items-center justify-center">
			<!-- <a
				href="https://www.eventbrite.nl/e/tickets-pycon-nl-916084723067?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
			> -->
				<TagBlock class="text-lg" backgroundColor="north">
					<div class="hover:scale-105 text-3xl font-bold">
						PYCON (NL)<span class="px-4">|</span><span class="pr-4 text-ordina">2025</span>
					</div>
				</TagBlock>
			<!-- </a> -->
		</div>

		<div class="mt-2 flex justify-center">
			<a class="mb-10 inline" href="#info">
				<Icon class="text-white opacity-75" data={chevronDown} scale={3} />
			</a>
		</div>
	</div>
</header>

<style>
	.custom-header {
		height: auto;
		min-height: 100vh;
		padding-top: 2rem;
	}

	.call-for-volenteers {
		order: 5;
		margin-top: 15rem;
	}

	.call-for-sponsors {
		order: 1;
		margin-top: 15rem;
	}
	
	.custom-flex-container {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}

	.custom-image-container {
		width: 100%;
		max-width: 22rem;
	}

	.custom-image {
		width: 100%;
		height: auto;
	}

	/* full screen styling */
	@media (min-width: 768px) {
		.custom-flex-container {
			flex-direction: row;
			gap: 0;
			column-gap: 1rem;
		}
		.md-order-2 {
			order: 2;
		}
		.md-order-3 {
			order: 3;
		}
		.md-order-4 {
			order: 4;
		}
		.call-for-sponsors {
			order: 1;
		}
		.call-for-volenteers {
			order: 5;
		}
	}

	/* mobile styling */
	@media (max-width: 767px) {
		.custom-header {
			padding-top: 1rem;
		}
		.custom-image {
			max-width: 80vw;
		}
		/* andere ordering om de elementen als volgt te orderen in mobile: image, date, `tickets coming soon`, `call for sponsors`, `call for volunteers`, python knop */
		.md-order-2 {
			order: 2;
		}
		.md-order-3 {
			order: 1;
		}
		.md-order-4 {
			order: 3;
		}
		.call-for-sponsors {
			order: 4;
			margin-top: 0rem;
		}
		.call-for-volenteers {
			order: 5;
			margin-top: 0rem;
		}
	}
</style>
