<script lang="ts">
    import { onMount } from 'svelte';

    import * as Carousel from '$lib/components/ui/carousel/index.js';
    import * as Card from '$lib/components/ui/card/index.js';
    import { AspectRatio } from '$lib/components/ui/aspect-ratio';
    import { Separator } from '$lib/components/ui/separator';
    import { Button } from '$lib/components/ui/button';
    import FAIcon from '@/components/FAIcon.svelte';

    import { STEPS } from '@/rvTutorialSteps';
    import { FAIconType } from '@/types';
    import { copyToClipboard } from '@/utils';

    const share = (step: number) =>
        copyToClipboard(`${window.location.origin}${window.location.pathname}?step=${step}`);

    let index = 0;

    onMount(() => {
        const searchParams = new URLSearchParams(window.location.search);
        index = parseInt(searchParams.get('step') || '1') - 1;

        if (index < 0) index = 0;
        else if (index > STEPS.length) index = STEPS.length - 1;
    });
</script>

<main class="flex min-h-screen justify-center items-center">
    <div class="container mx-auto px-4 py-8 flex flex-col items-center">
        <Carousel.Root
            class="w-full max-w-3xl rounded-lg overflow-hidden md:overflow-visible"
            opts={{ startIndex: index }}
        >
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
                                    <AspectRatio ratio={9 / 16} class="w-full rounded-t-lg bg-transparent">
                                        <img
                                            src={step.image_path}
                                            alt={step.title}
                                            class="object-cover w-full h-full"
                                        />
                                    </AspectRatio>
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

            <Carousel.Previous class="size-10" />
            <Carousel.Next class="size-10" />
        </Carousel.Root>
    </div>
</main>
