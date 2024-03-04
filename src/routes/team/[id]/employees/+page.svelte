<script>
  import TeamMember from '$lib/components/employees/TeamMember.svelte';

  //explort reactive data
  export let data;
  $: employees = data.employees ? data.employees : [];

  function excludeMember(id) {
    console.log('Excluding member with id:', id);
    employees = employees.filter(employee => employee.id !== id);
  }
</script>

<div class="team-page">
	<div class="header">
		<h1>Члены команд</h1>
		<button>Пригласить</button>
	</div>
  <div class="search-bar-container">
    <input class="search-bar" placeholder="Поиск члена команды" />
  </div>
	<div class="team-list">
		{#each employees as employee}
			<TeamMember {employee} {excludeMember} />
		{/each}
	</div>
</div>

<style>
	.team-page {
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 1rem; */
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

	.team-list {
		display: flex;
		flex-direction: column;
    padding-top: 1rem;
	}
</style>
