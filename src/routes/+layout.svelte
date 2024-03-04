<script>
    import SidebarMenu from '$lib/components/SidebarMenu.svelte';
</script>

<div class="container">
    <div class="sidebar">
        <SidebarMenu />
    </div>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .container {
        display: flex;
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
    }

    .content {
        flex-grow: 1;
        padding: 20px;
        margin-left: 300px;
    }
</style>