<script>
    export let employee;
	export let excludeMember;

    let showContextMenu = false;

    // Функция для показа контекстного меню
    function showMenu() {
        showContextMenu = true;
    }

    // Функция для скрытия контекстного меню
    function hideMenu() {
        showContextMenu = false;
    }

    // Логика исключения члена команды
    function handleExcludeMember() {
        excludeMember(employee.id);
        showContextMenu = false;
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="team-member" on:mouseleave={hideMenu}>
    <div class="info">
        <img class="avatar" src={employee.avatarUrl} alt={employee.name} />
        <div class="details">
            <div><b class="name">{employee.name}</b></div>
            <!-- <div><span class="position">{employee.position}</span></div> -->
        </div>
    </div>
    <button class="menu-button" on:mouseenter={showMenu}>⋮</button>
    {#if showContextMenu}
        <div class="context-menu" on:mouseenter={showMenu} on:mouseleave={hideMenu}>
            <button on:click={handleExcludeMember}>Исключить</button>
        </div>
    {/if}
</div>

<style>
    .team-member {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        background-color: #fff;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        font-family: 'Montserrat', sans-serif;
        transition: background-color 0.3s;
    }

    .context-menu {
        position: absolute;
        right: 10px;
        top: 50px; /* Смещение вниз от кнопки */
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        z-index: 10;
    }

    .context-menu button {
        display: block;
        background-color: transparent;
        color: #000;
        padding: 10px;
        width: 100%;
        text-align: left;
        border: none;
        cursor: pointer;
        border-radius: 0;
    }

    .menu-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
    }

    .context-menu button:hover {
        background-color: #f0f0f0;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
    }

    button:hover {
        background-color: #f0f0f0;
    }

    .info {
        display: flex;
        align-items: center;
    }

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
        object-fit: cover;
        object-position: center;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .name {
        font-size: 1.1rem;
    }

    .position {
        font-size: 0.95rem;
        color: #666;
    }

    .team-member:hover {
        background-color: #f9f9f9;
    }
</style>
