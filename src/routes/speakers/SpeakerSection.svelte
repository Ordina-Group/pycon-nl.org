<script lang="ts">
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { fade } from 'svelte/transition';
	import type { Speaker } from '../SpeakerBio.svelte';
	import SpeakerBio from '../SpeakerBio.svelte';

	let speakers: Speaker[] = [
	];

	let focussedSpeaker: number | null = null;

  // Function to handle clearing the focussedSpeaker
  function clearFocussedSpeaker() {
    focussedSpeaker = null;
  }
</script>

<div class="relative w-full px-2 py-10 text-black" id="speakers">
	<!-- <div class="mb-24 w-full text-center text-4xl">Speakers</div> -->

	
	{#if speakers.length === 0}
	<div
		in:fade={{ duration: 250, delay: 250 }}
		out:fade={{ duration: 250 }}
		class="flex-center w-full flex-col text-white"
		id="schedule"
	>
		<div class="extra-padding">
			<TagBlock
				class="mt-2"
				direction="right"
				extend={true}
				backgroundColor="north3"
			>
				<div class="flex w-screen max-w-xl gap-5 items-center">
					<div class="inline-flex grow flex-col pr-2 text-left">
						<div class="text-xl font-bold">Speakers to be determined</div>
					</div>
				</div>
			</TagBlock>
		</div>
	</div>
	{:else}
		{#if focussedSpeaker === null}
			<div
				in:fade={{ duration: 250, delay: 250 }}
				out:fade={{ duration: 250 }}
				class="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3"
			>
				{#each speakers as speaker, index}
					<div class="mb-16 h-56 w-full">
						<div
							class="flex w-full flex-col items-center rounded-2xl bg-fountain p-5 text-center shadow-xl"
						>
							{#if speaker.image}
								<img
									class="-mt-16 aspect-square h-32 w-32 rounded-full"
									src={speaker.image}
									alt={speaker.name}
								/>
							{:else}
								<div
									class="relative -mt-16 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-fountain-600"
								>
									<span class="text-6xl font-medium text-fountain-800">{speaker.letters}</span>
								</div>
							{/if}
							<div class="text-xl md:text-2xl font-bold">{speaker.name}</div>
							<div class="text-lg italic">{speaker.title}</div>
							<div class="text-md">{speaker.employer}</div>
							<div class="line-clamp-2 overflow-ellipsis text-sm">
								{#if speaker.bio}
									{speaker.bio}
								{:else}
									AttributeError: 'dict' object has no attribute 'speakerInfo'<br />&nbsp;
								{/if}
							</div>
							{#if speaker.bio}
								<button
									on:click={() => (focussedSpeaker = index)}
									class="mt-2 cursor-pointer select-none"
								>
									<TagBlock small backgroundColor="ordina">Read more</TagBlock>
								</button>
							{:else}
								<TagBlock class="mt-2 opacity-75" small backgroundColor="ordina"
									>Bio coming soon..</TagBlock
								>
							{/if}
						</div>
					</div>
				{/each}
				
			</div>
		{:else}
			<SpeakerBio on:goBack={clearFocussedSpeaker} speaker={speakers[focussedSpeaker]} ></SpeakerBio>
		{/if}
	{/if}
</div>

<style>
	.extra-padding {
		padding-bottom: 10rem;
	}
</style>
