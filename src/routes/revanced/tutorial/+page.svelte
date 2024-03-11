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
    import { copyToClipboard } from '@/utils';

    const share = (step: number) =>
        copyToClipboard(`${window.location.origin}${window.location.pathname}?step=${step}`);

    const getPercentage = (max: number, step: number) => (100 * step) / max;

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

<main class="flex min-h-screen justify-center items-center">
    <div class="container mx-auto px-4 py-8 flex flex-col items-center">
        <Carousel.Root class="w-full max-w-3xl rounded-lg overflow-hidden md:overflow-visible" bind:api>
            <Carousel.Content>
                {#each STEPS as step, i (i)}
                    <Carousel.Item class="flex flex-col space-y-4">
                        <Card.Root class="flex-grow rounded-lg">
                            <Card.Header class="p-4">
                                <Card.Title class="text-xl font-bold text-primary">{step.title}</Card.Title>
                                <Card.Description>{@html step.description}</Card.Description>

                                {#if step.image_path}
                                    <Separator class="bg-primary" />
                                {/if}
                            </Card.Header>

                            {#if step.image_path}
                                <Card.Content class="flex-grow overflow-hidden">
                                    <img src={step.image_path} alt={step.title} class="object-cover w-full h-full" />
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

            <Carousel.Previous class="size-10 hover:bg-primary" />
            <Carousel.Next class="size-10 hover:bg-primary" />
        </Carousel.Root>

        <Progress {value} />
    </div>
</main>
