import { faker } from '@faker-js/faker';
import type { Catgeory } from '../domain';

export class CategoriesServices {
	public async getAll(): Promise<Array<Catgeory>> {
		return Array.from({ length: 10 }).map(() => {
			return { name: faker.word.adjective(), image: faker.image.url(), id: faker.string.uuid() };
		});
	}
}
