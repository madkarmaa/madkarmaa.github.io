<script lang="ts">
    import { onMount } from 'svelte';

    import { XMANAGER_API_URL } from '@/constants';
    import { FAIconType, type XManagerAPKVersion } from '@/types';
    import { capitalize } from '@/utils';

    import { Button } from '$lib/components/ui/button';
    import FAIcon from '@/components/FAIcon.svelte';

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
            versions.Stock_Patched = Array.from(res['Stock_Patched']);
            versions.Amoled_Patched = Array.from(res['Amoled_Patched']);
            versions.Stock_Cloned_Patched = Array.from(res['Stock_Cloned_Patched']);
            versions.Amoled_Cloned_Patched = Array.from(res['Amoled_Cloned_Patched']);
        } catch (e) {
            err = e;
        }
    });
</script>

{#if err}
    <div>
        <h1>Something went wrong...</h1>
        <code>{err}</code>
    </div>
{:else if res && Object.values(versions).every((v) => v.length !== 0)}
    {#each Object.entries(versions) as [versionType, versionsList]}
        <h2>{capitalize(versionType.replaceAll('_', ' '))}</h2>
        <ul>
            {#each versionsList as version}
                <li>
                    <h3>Version <span class="font-bold">{version.Title}</span></h3>
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
                </li>
            {/each}
        </ul>
    {/each}
{/if}
