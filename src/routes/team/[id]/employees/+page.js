export async function load({ fetch, params }) {
    try {
        const response = await fetch(`/api/teams/${params.id}/employees`);

        if (!response.ok) {
            // Обработка ошибочных HTTP-статусов
            throw new Error(`Ошибка при запросе: ${response.status}`);
        }
        const employees = await response.json();
        console.log('Сотрудники:', employees);
        return { employees };
    } catch (error) {
        console.error('Ошибка при получении данных о сотрудниках:', error);
        return { props: { employees: [] } }; // Возвращаем пустой список, если запрос не удался
    }
}