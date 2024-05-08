<script lang="ts">
    import { onMount } from 'svelte';

    let tree: any;
    let currentPath: string = '';
    const paths: string[] = [];

    const renderPaths = (tree: any) => {
        Object.values(tree.children).forEach((path: any) => {
            currentPath += '/' + path.name;
            paths.push(currentPath);
            renderPaths(path);
        })

        currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    }

    onMount(async () => {
         tree = await (await fetch('tree.json')).json();
        renderPaths(tree);
    })
</script>

<ul>
    {#if tree && paths.length > 0}
        {#each paths as path, i (i)}
            <li><a href={path}>{path}</a></li>
        {/each}
    {/if}
</ul>