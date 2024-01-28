import { error } from '@sveltejs/kit';
import type { Catgeory } from '../../lib/categories/domain';
import { services } from '../../lib/categories/services';
import type { PageLoad } from './$types';
import { HttpStatusCode } from 'axios';

interface Props {
	categories: Array<Catgeory>;
}

export const load: PageLoad<Props> = async () => {
	try {
		const categories = await services.getAll();

		console.log(categories);
		return {
			categories: categories
		};
	} catch (err: unknown) {
		throw error(HttpStatusCode.InternalServerError, 'Could not load photos');
	}
};
