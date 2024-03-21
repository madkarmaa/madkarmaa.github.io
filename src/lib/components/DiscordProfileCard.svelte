<script lang="ts">
    import { onMount } from 'svelte';
    import { cn } from '$lib/utils.js';

    import * as Avatar from '$lib/components/ui/avatar';

    export let userId: string;
    let PROFILE_DATA: any;

    let className: (typeof $$props)['class'] = undefined;
    export { className as class };

    onMount(async () => {
        try {
            // TODO: change later to hosted API
            PROFILE_DATA = await (await fetch('http://localhost:6969/discord/users/' + userId)).json();
            console.log(PROFILE_DATA);
        } catch (error) {
            console.error(error);
        }
    });
</script>

{#if PROFILE_DATA}
    <div class={cn('rounded-lg shadow-md overflow-hidden', className)} {...$$restProps}>
        <div class="relative h-64">
            <div class="absolute inset-0 overflow-hidden rounded-lg">
                <div style="background-color: {PROFILE_DATA.accent_color};" class="w-full h-full rounded-lg">
                    {#if PROFILE_DATA.banner}
                        <img
                            src={PROFILE_DATA.banner}
                            alt="Banner"
                            class="w-full h-full object-cover rounded-lg brightness-75"
                        />
                    {/if}
                </div>
            </div>

            <div class="absolute bottom-0 left-4 mb-4">
                <div class="relative">
                    <Avatar.Root class="w-24 h-24 rounded-full">
                        <Avatar.Image src={PROFILE_DATA.avatar} alt="@{PROFILE_DATA.username}" />
                        <Avatar.Fallback class="text-2xl font-bold">{PROFILE_DATA.username[0]}</Avatar.Fallback>
                    </Avatar.Root>

                    {#if PROFILE_DATA.avatar_decoration_data}
                        <div class="absolute inset-0 flex items-center justify-center">
                            <Avatar.Root class="z-10 w-28 h-28 rounded-full">
                                <Avatar.Image src={PROFILE_DATA.avatar_decoration_data.asset} alt="Avatar Decoration" />
                            </Avatar.Root>
                        </div>
                    {/if}
                </div>
            </div>
        </div>

        <div class="p-4">
            <h2 class="text-xl font-bold">{PROFILE_DATA.global_name}</h2>
            <p>
                <a href="https://discord.com/users/{userId}" target="_blank" class="text-gray-600">
                    @{PROFILE_DATA.username}
                </a>
            </p>
        </div>
    </div>
{/if}
