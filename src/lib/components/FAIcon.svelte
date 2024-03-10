<script lang="ts">
    import { FaIconType } from "@/types";

    export let iconName: string;
    export let sharp: boolean = false;
    export let type: FaIconType = FaIconType.SOLID;
</script>

<i class="mr-2 mt-[0.2rem] h-4 w-4 fa-{iconName} fa-{type} {sharp ? 'fa-sharp' : ''}"></i>