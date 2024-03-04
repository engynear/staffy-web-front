import { error } from '@sveltejs/kit';

export function load({ params }) {
    return {
        surveys: [
            {
                id: 1,
                image: 'https://sun9-50.userapi.com/impg/cLlfUhzdq9NkVHGdAj3g3WUb7vWPBf41R0vdBw/clvyq6xBguc.jpg?size=1620x2160&quality=95&sign=ab64e48826d75491f451e86c97df9032&type=album',
                title: 'Сколько вам лет?',
                description: 'Ваш возраст',
                completed: 10,
                total: 100
            },
            {
                id: 2,
                image: 'https://sun9-47.userapi.com/impg/ZfxRZZ2E7htwIYjSUj1zcvzfjNZsdb_aXV3Tkg/NVfzPIZHktU.jpg?size=960x1280&quality=95&sign=8edb85eca3258349d4e0f0255511788c&type=album',
                title: 'Опрос №2',
                description: 'Ваш возраст',
                completed: 10,
                total: 100
            },
            {
                id: 3,
                image: 'https://sun9-55.userapi.com/impg/V-T9DzpGKrTKfFgY-vTexY2skT61maJXUUCFFQ/4FoiUGUH_kw.jpg?size=652x979&quality=96&sign=2cba4442e7c78490a5ca3c9460f0f136&type=album',
                title: 'Сколько вам лет?',
                description: 'Ваш возраст',
                completed: 10,
                total: 100
            }
        ]
    }
}
