<script>
    export let survey;
    export let excludeSurvey;
    export let openSurveyPage;

    let showContextMenu = false;

    // Показывает контекстное меню
    function showMenu() {
        showContextMenu = true;
    }

    // Скрывает контекстное меню
    function hideMenu() {
        showContextMenu = false;
    }

    // Логика исключения опроса
    function handleExcludeSurvey() {
        excludeSurvey(survey.id);
        showContextMenu = false;
    }

    function handleItemClick() {
        openSurveyPage(survey.id);
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="survey-item" on:mouseleave={hideMenu} on:click={handleItemClick}>
    <div class="info">
        <img class="image" src={survey.image} alt={survey.title} />
        <div class="details">
            <div><b class="title">{survey.title}</b></div>
            <div>
                <span class="status">Завершили {survey.completed}/{survey.total} сотрудников</span>
            </div>
        </div>
    </div>
    <button class="menu-button" on:mouseenter={showMenu}>⋮</button>
    {#if showContextMenu}
        <div class="context-menu" on:mouseenter={showMenu} on:mouseleave={hideMenu}>
            <button on:click={handleExcludeSurvey}>Удалить</button>
        </div>
    {/if}
</div>

<style>
    .survey-item {
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

        cursor: pointer;
    }

    .context-menu {
        position: absolute;
        right: 10px;
        top: 50px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        z-index: 10;
    }

    .menu-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
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

    .image {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        margin-right: 1rem;
        object-fit: cover;
        object-position: center;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .title {
        font-size: 1.1rem;
    }

    .status {
        color: #5e7790;
        font-size: 0.95rem;
    }

    .survey-item:hover {
        background-color: #f9f9f9;
    }
</style>
