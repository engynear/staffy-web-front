<script>
	import { goto } from '$app/navigation';
	import SurveyItem from '$lib/components/surveys/SurveyItem.svelte';

	// Export reactive data
	export let data;
	$: surveys = data.surveys ? data.surveys : [];

	function excludeSurvey(id) {
		console.log('Excluding survey with id:', id);
		surveys = surveys.filter((survey) => survey.id !== id);
	}

    function openSurveyPage(id) {
        // Open survey page
        console.log('Opening survey page with id:', id);
    }
</script>

<div class="survey-page">
	<div class="header">
		<h1>Опросы</h1>
		<button>Новый опрос</button>
	</div>
	<div class="search-bar-container">
		<input class="search-bar" placeholder="Поиск опроса" />
	</div>
	<div class="survey-list">
		{#each surveys as survey}
			<SurveyItem {survey} {excludeSurvey} {openSurveyPage} />
		{/each}
	</div>
</div>

<style>
	.survey-page {
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header button {
		padding: 0.5rem 1rem;
		background-color: #0070f3;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		cursor: pointer;
	}

	.header button:hover {
		background-color: #0053b3;
	}

	.header button:active {
		background-color: #0043a3;
	}

	.header h1 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
	}

	.search-bar-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-bar {
		display: flex;
		width: 100%;
		padding: 1rem;

		border: 1px solid #e8edf3;
		border-radius: 8px;
		background-color: #e8edf3;

		color: #5e7790;
	}

	.survey-list {
		display: flex;
		flex-direction: column;
		padding-top: 1rem;
	}
</style>
