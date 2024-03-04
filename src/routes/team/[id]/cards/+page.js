import { error } from '@sveltejs/kit';

export function load({ params }) {
    if (params.id === '1') {
        return {
            title: 'Здравствуй мир!',
            content: 'Добро пожаловать в наш блог. Но чтобы вы поняли, откуда возникает...'
        };
    }

    throw error(404, 'Не найдено');
}
