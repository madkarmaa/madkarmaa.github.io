<script lang="ts">
  import { onMount } from 'svelte';
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import { STEPS } from "@/rvSteps";

  let index = 0;

  onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);
		index = parseInt(searchParams.get('step') || "1") - 1;

    if (index < 0) index = 0;
    else if (index > STEPS.length) index = STEPS.length - 1;
	});
</script>

<div class="container flex justify-center items-center h-screen w-full p-10">

  <Carousel.Root class="w-full h-full" opts={ { startIndex: index } }>
    <Carousel.Content>

      {#each Array(STEPS.length) as _, i (i)}
        <Carousel.Item>

          <Card.Root class="w-full h-full">

            <Card.Header>
              <Card.Title>{STEPS[i].title}</Card.Title>
              <Card.Description>{STEPS[i].description}</Card.Description>
            </Card.Header>

            {#if STEPS[i].image_path}
              <Card.Content class="grid gap-4">
                <AspectRatio ratio={16 / 9} class="bg-muted">
                  <img src={STEPS[i].image_path} alt={STEPS[i].title} class="rounded-md">
                </AspectRatio>
              </Card.Content>
            {/if}

            <Card.Footer>
              <small>Step {i + 1}</small>
            </Card.Footer>
          </Card.Root>

        </Carousel.Item>
  	  {/each}

    </Carousel.Content>

    <Carousel.Previous />
    <Carousel.Next />

  </Carousel.Root>

</div>