<script lang="ts">
    import { onMount } from 'svelte';

    import { XMANAGER_API_URL } from '@/constants';
    import { FAIconType, type XManagerAPKVersion } from '@/types';
    import { capitalize } from '@/utils';

    import { Button } from '$lib/components/ui/button';
    import FAIcon from '@/components/FAIcon.svelte';
    import * as Collapsible from '$lib/components/ui/collapsible';
    import { Badge } from '$lib/components/ui/badge';

    let res: Response | any;
    let err: Error | unknown;

    const versions: { [key: string]: XManagerAPKVersion[] } = {
        Stock_Patched: [],
        Amoled_Patched: [],
        Stock_Cloned_Patched: [],
        Amoled_Cloned_Patched: [],
    };

    onMount(async () => {
        try {
            res = await (await fetch(XMANAGER_API_URL)).json();

            let sp: XManagerAPKVersion[] = Array.from(res['Stock_Patched']);
            let ap: XManagerAPKVersion[] = Array.from(res['Amoled_Patched']);
            let scp: XManagerAPKVersion[] = Array.from(res['Stock_Cloned_Patched']);
            let acp: XManagerAPKVersion[] = Array.from(res['Amoled_Cloned_Patched']);

            sp.forEach((v) => (v.isLatest = v.Title === res['Stock_Patched_Latest']));
            ap.forEach((v) => (v.isLatest = v.Title === res['Amoled_Patched_Latest']));
            scp.forEach((v) => (v.isLatest = v.Title === res['SCP_Latest']));
            acp.forEach((v) => (v.isLatest = v.Title === res['ACP_Latest']));

            versions.Stock_Patched = sp.reverse();
            versions.Amoled_Patched = ap.reverse();
            versions.Stock_Cloned_Patched = scp.reverse();
            versions.Amoled_Cloned_Patched = acp.reverse();
        } catch (e) {
            err = e;
        }
    });
</script>

<main class="min-h-screen p-4 md:p-10 flex flex-col gap-4">
    {#if err}
        <div>
            <h1>Something went wrong...</h1>
            <code>{err}</code>
        </div>
    {:else if res && Object.values(versions).every((v) => v.length !== 0)}
        {#each Object.entries(versions) as [versionType, versionsList]}
            <Collapsible.Root class="space-y-2">
                <Collapsible.Trigger>
                    <Button variant="ghost" class="text-2xl font-bold">
                        <FAIcon iconName="sort" type={FAIconType.LIGHT}></FAIcon>
                        {capitalize(versionType.replaceAll('_', ' '))}
                    </Button>
                </Collapsible.Trigger>

                {#each versionsList as version}
                    <Collapsible.Content>
                        <h3 class={version.isLatest ? 'text-red-600' : ''}>
                            {#if version.isLatest}
                                <Badge class="bg-red-600 hover:bg-red-600 mr-1">LATEST</Badge>
                            {/if}
                            Version <span class="font-bold">{version.Title}</span>
                        </h3>
                        {#if version.Link_1 !== 'null'}
                            <Button variant="link" href={version.Link_1} target="_blank">
                                <FAIcon iconName="file-arrow-down" type={FAIconType.REGULAR}></FAIcon>
                                Link 1
                            </Button>
                        {/if}
                        {#if version.Link_2 !== 'null'}
                            <Button variant="link" href={version.Link_2} target="_blank">
                                <FAIcon iconName="file-arrow-down" type={FAIconType.REGULAR}></FAIcon>
                                Link 2
                            </Button>
                        {/if}
                        {#if version.Mirror !== 'null'}
                            <Button variant="link" href={version.Mirror} target="_blank">
                                <FAIcon iconName="file-arrow-down" type={FAIconType.REGULAR}></FAIcon>
                                Mirror
                            </Button>
                        {/if}
                    </Collapsible.Content>
                {/each}
            </Collapsible.Root>
        {/each}
    {:else}
        <div>Loading...</div>
    {/if}
</main>
