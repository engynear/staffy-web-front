<script>
	let name = '';
	let description = '';
	let imageUrl = '';

	async function createTeam() {
		if (name.trim() === '') {
			alert('Название команды обязательно.');
			return;
		}

		const teamData = { name, description, imageUrl };

		try {
			const response = await fetch('/api/teams', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(teamData)
			});

			if (!response.ok) {
				throw new Error('Ошибка при создании команды');
			}

			const result = await response.json();
			console.log('Команда создана:', result);
			alert('Команда успешно создана!');
			// Очистить форму
			name = '';
			description = '';
			imageUrl = '';
		} catch (error) {
			console.error('Ошибка при отправке данных:', error);
			alert('Ошибка при создании команды. Пожалуйста, попробуйте еще раз.');
		}
	}
</script>

<div class="team-page">
	<div class="header">
		<h1>Создать новую команду</h1>
		<button on:click={createTeam}>Создать команду</button>
	</div>
	<form on:submit|preventDefault={createTeam}>
		<input type="text" placeholder="Название команды" bind:value={name} />
		<textarea placeholder="Описание" bind:value={description} rows="3"></textarea>
		<input type="url" placeholder="Ссылка на аватарку" bind:value={imageUrl} />
	</form>
</div>

<style>
	.team-page {
		display: flex;
		flex-direction: column;
		max-width: 600px;
		margin: 2rem auto;
		padding: 1rem;
		border-radius: 8px;
		background-color: #f4f7fa;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header h1 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
	}

	input[type='text'],
	input[type='url'],
	textarea {
		padding: 8px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 8px;
		width: 100%;
	}

	button {
		padding: 10px 15px;
		background-color: #0070f3;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		cursor: pointer;
	}

	button:hover {
		background-color: #0053b3;
	}

	button:active {
		background-color: #0043a3;
	}
</style>