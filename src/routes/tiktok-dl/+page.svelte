<script lang="ts">
    import { fetchTikTokUrlData } from "../../utils/tiktok";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { Label } from "$lib/components/ui/label";

    let url: string;
    let data: any = null;

    // VIDEO: https://www.tiktok.com/@gamingp0st/video/7363411043806154027
    // SLIDESHOW: https://vm.tiktok.com/ZGexB24kN/
    async function onsubmit() {
        data = await fetchTikTokUrlData(url);
        console.log(data);
    }
</script>

{#if !data}
    <form class="grid w-full max-w-sm items-center gap-1.5" on:submit={onsubmit}>
        <Label>Enter a TikTok url</Label>
        <Input type="url" placeholder="https://vm.tiktok.com/..." bind:value={url}/>
        <Button type="submit">Download</Button>
    </form>
{:else if data['code'] !== 0}
    <h2>Something went wrong!</h2>
    <code>{data['msg']}</code>
    <Button on:click={() => data = null}>Try again...</Button>
{/if}