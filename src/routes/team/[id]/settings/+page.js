import { error } from '@sveltejs/kit';

export function load({ params }) {
    if (params.id === '1') {
        return {
            title: 'Функционал в разработке',
            content: 'Ожидайте новых обновлений'
        };
    }

    throw error(404, 'Не найдено');
}
    