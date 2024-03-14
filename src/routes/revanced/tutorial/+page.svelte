<script lang="ts">
    import { onMount } from 'svelte';

    import * as Carousel from '$lib/components/ui/carousel/index.js';
    import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
    import * as Card from '$lib/components/ui/card/index.js';
    import { Separator } from '$lib/components/ui/separator';
    import { Button } from '$lib/components/ui/button';
    import { Progress } from '$lib/components/ui/progress';
    import FAIcon from '@/components/FAIcon.svelte';

    import { STEPS } from '@/rvTutorialSteps';
    import { FAIconType } from '@/types';
    import { copyToClipboard, getPercentage } from '@/utils';

    const share = (step: number) =>
        copyToClipboard(`${window.location.origin}${window.location.pathname}?step=${step}`);

    let value: number = 0;
    let api: CarouselAPI;
    let count: number = 0;
    let current: number = 0;
    let searchParams: URLSearchParams;

    $: if (api) {
        count = api.scrollSnapList().length;

        value = getPercentage(count, current);
        api.scrollTo(current - 1, true);

        api.on('select', () => {
            current = api.selectedScrollSnap() + 1;
            value = getPercentage(count, current);
        });
    }

    onMount(() => {
        searchParams = new URLSearchParams(window.location.search);

        current = parseInt(searchParams.get('step') || '1');

        if (current < 0) current = 0;
        else if (current > STEPS.length) current = STEPS.length;
    });
</script>

<main class="min-h-screen p-4 md:p-10 flex justify-center items-center flex-col">
    <Progress {value} class="rounded-none fixed top-0 left-0 z-50" />

    <Carousel.Root class="w-full max-w-3xl rounded-lg" bind:api>
        <Carousel.Content>
            {#each STEPS as step, i (i)}
                <Carousel.Item class="flex flex-col space-y-4">
                    <Card.Root class="rounded-lg">
                        <Card.Header class="p-4">
                            <Card.Title class="font-bold text-primary text-2xl">{step.title}</Card.Title>
                            <Card.Description class="text-base">{@html step.description}</Card.Description>
                        </Card.Header>

                        {#if step.media_path}
                            <Separator class="bg-primary" />

                            <Card.Content class="overflow-hidden pt-6 flex justify-center items-center">
                                {#if step.media_path.endsWith('.mp4')}
                                    <!-- svelte-ignore a11y-media-has-caption -->
                                    <video
                                        src={step.media_path}
                                        class="object-cover w-full h-full md:h-auto md:max-w-xs rounded-md"
                                        autoplay
                                        muted
                                        loop
                                        controls={false}
                                    ></video>
                                {:else}
                                    <img
                                        src={step.media_path}
                                        alt={step.title}
                                        class="object-cover w-full h-full md:h-auto md:max-w-xs rounded-md"
                                    />
                                {/if}
                            </Card.Content>
                        {/if}

                        <Card.Footer class="px-4 py-2 flex items-center justify-end">
                            <Button on:click={() => share(i + 1)}>
                                <FAIcon iconName="link-simple" type={FAIconType.REGULAR}></FAIcon>
                                Step {i + 1}
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                </Carousel.Item>
            {/each}
        </Carousel.Content>

        <Carousel.Previous class="size-12 max-sm:fixed max-sm:bottom-0 max-sm:left-0 z-50" />
        <Carousel.Next class="size-12 max-sm:fixed max-sm:bottom-0 max-sm:right-0 z-50" />
    </Carousel.Root>
</main>
