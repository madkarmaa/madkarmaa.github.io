<script lang="ts">
    import { Button, type Props, buttonVariants } from '$lib/components/ui/button/index.js';
    import { cn } from '$lib/utils';
    import ArrowRight from 'svelte-radix/ArrowRight.svelte';
    import type { VariantProps } from 'tailwind-variants';
    import { getEmblaContext } from './context.js';

    type $$Props = Props;

    let className: $$Props['class'] = undefined;
    export { className as class };
    export let variant: VariantProps<typeof buttonVariants>['variant'] = 'outline';
    export let size: VariantProps<typeof buttonVariants>['size'] = 'icon';

    const { orientation, canScrollNext, scrollNext, handleKeyDown } = getEmblaContext('<Carousel.Next/>');
</script>

<Button
    {variant}
    {size}
    class={cn(
        'absolute h-8 w-8 touch-manipulation rounded-full',
        $orientation === 'horizontal'
            ? '-right-16 md:top-1/2 -translate-y-1/2'
            : '-bottom-16 md:left-1/2 -translate-x-1/2 rotate-90',
        className
    )}
    disabled={!$canScrollNext}
    on:click={scrollNext}
    on:keydown={handleKeyDown}
    {...$$restProps}
>
    <ArrowRight class="h-3/5 w-3/5 outline-none" />
    <span class="sr-only">Next slide</span>
</Button>
