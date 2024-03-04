<script>
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let selectedTeamStore = writable(null);
	let selectedPageStore = writable('employees');
	let teams = writable([]);

	async function loadTeams() {
		try {
			const response = await fetch('/api/teams');
			if (!response.ok) {
				throw new Error('Ошибка при загрузке данных');
			}
			const data = await response.json();
			teams.set(data);
		} catch (error) {
			console.error('Ошибка при получении данных о командах:', error);
		}
	}

	onMount(async () => {
		await loadTeams();
		const storedTeamId = localStorage.getItem('selectedTeamId');
		const storedPage = localStorage.getItem('selectedPage') || 'employees';
		if (storedTeamId) {
			selectedTeamStore.set(parseInt(storedTeamId));
		}
		selectedPageStore.set(storedPage);
	});

	let menuItems = [
		{ label: 'Сотрудники', path: 'employees' },
		{ label: 'Опросы', path: 'surveys' },
		{ label: 'Оценки 360', path: 'assessments' },
		{ label: 'Thank You Cards', path: 'cards' },
		{ label: 'Настройки', path: 'settings' }
	];

	function navigateTo(path) {
		selectedPageStore.set(path);
		localStorage.setItem('selectedPage', path);
		goto(`/team/${$selectedTeamStore}/${path}`).catch((err) => console.error(err));
	}

	function handleTeamChange(event) {
		const newTeamId = event.target.value;
		selectedTeamStore.set(parseInt(newTeamId));
		localStorage.setItem('selectedTeamId', newTeamId);
		goto(`/team/${newTeamId}/${$selectedPageStore}`).catch((err) => console.error(err));
	}
</script>


<div class="sidebar">
	<div class="menu">
		<select bind:value={$selectedTeamStore} on:change={handleTeamChange}>
			{#each $teams as team}
				<option value={team.id}>{team.name}</option>
			{/each}
		</select>

		{#each menuItems as { label, path }}
			<button type="button" class="menu-item" on:click={() => navigateTo(path)}>
				{label}
			</button>
		{/each}
	</div>

	<div class="bottom">
		<a href="/new-team" class="bottom-item">
			<i class="fas fa-plus icon"></i>
			<span class="label">Новая команда</span>
		</a>
		<a href="/feedback" class="bottom-item">
			<i class="fas fa-bullhorn icon"></i>
			<span class="label">Обратная связь</span>
		</a>
		<a href="/support" class="bottom-item">
			<i class="fas fa-question-circle icon"></i>
			<span class="label">Поддержка</span>
		</a>
	</div>
</div>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		padding: 20px;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}

	select {
		height: 40px; /* Увеличение высоты */
		padding: 5px 10px; /* Добавление внутренних отступов для лучшего визуального восприятия */
		margin-bottom: 20px; /* Добавление нижнего отступа для разделения от кнопок меню */
		border-radius: 4px; /* Скругление углов для соответствия общему стилю */
		font-size: 16px; /* Увеличение размера шрифта для лучшей читаемости */
		border: 1px solid #ccc; /* Добавление тонкой границы для лучшего визуального выделения */
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Небольшая тень для добавления глубины */
		font-family: 'Montserrat', sans-serif; /* Уточнение шрифта для соответствия остальному интерфейсу */
	}

	.menu,
	.bottom {
		display: flex;
		flex-direction: column;
	}

	.menu-item,
	.bottom-item {
		margin-bottom: 5px;
		padding: 10px;
		width: 100%;
		text-align: left;
		background-color: transparent;
		border: 0;
		border-radius: 8px;
		cursor: pointer;
		font-size: 16px;
		font-family: 'Montserrat', sans-serif;

		text-decoration: none;
		color: #000;
	}

	.menu-item:hover,
	.bottom-item:hover {
		background-color: #f0f0f0;
	}

	.bottom-item {
		display: flex;
		align-items: center;
	}

	.bottom-item .label {
		margin-left: 10px;
	}

	button:focus {
		outline: none;
		background-color: #e0e0e0;
	}
</style>
