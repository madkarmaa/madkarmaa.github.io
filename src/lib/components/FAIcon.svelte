<script lang="ts">
    import { FAIconType } from '@/types';

    export let iconName: string;
    export let sharp: boolean = false;
    export let type: FAIconType = FAIconType.SOLID;
</script>

<i class="mr-2 h-4 w-4 fa-{iconName} fa-{type} {sharp ? 'fa-sharp' : ''} flex justify-center items-center"></i>
