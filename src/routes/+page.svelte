<script lang="ts">
  import { onMount } from 'svelte';

  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import { Separator } from "$lib/components/ui/separator";

  import { STEPS } from "@/rvSteps";

  let index = 0;

  onMount(() => {
    const searchParams = new URLSearchParams(window.location.search);
    index = parseInt(searchParams.get('step') || "1") - 1;

    if (index < 0) index = 0;
    else if (index > STEPS.length) index = STEPS.length - 1;
  });
</script>

<main class="flex min-h-screen">
  <div class="container mx-auto px-4 py-8 flex flex-col items-center">

    <Carousel.Root class="w-full max-w-3xl rounded-lg" opts={ { startIndex: index } } >
      <Carousel.Content>

        {#each Array(STEPS.length) as _, i (i)}
          <Carousel.Item class="flex flex-col space-y-4">

            <Card.Root class="flex-grow rounded-lg">

              <Card.Header class="p-4">
                <Card.Title class="text-xl font-bold text-primary">{STEPS[i].title}</Card.Title>
                <Card.Description>{STEPS[i].description}</Card.Description>

                {#if STEPS[i].image_path}
                  <Separator class="bg-primary" />
                {/if}
              </Card.Header>

              {#if STEPS[i].image_path}
                <Card.Content class="flex-grow overflow-hidden">
                  <AspectRatio ratio={9 / 16} class="w-full rounded-t-lg bg-transparent">
                    <img src={STEPS[i].image_path} alt={STEPS[i].title} class="object-cover w-full h-full">
                  </AspectRatio>
                </Card.Content>
              {/if}

              <Card.Footer class="px-4 py-2 flex items-center justify-end">
                <small>Step {i + 1}</small>
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
