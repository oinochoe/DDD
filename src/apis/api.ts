import { fetchData } from 'src/utils/fetch';
import { UApiAddress } from 'src/utils/unions';

export const NormalApi = {
	async getNormal(page?: number) {
		let url: string = UApiAddress.list!;
		const LIMIT = 10;
		if (page) {
			url += `?_limit=${LIMIT}&_page=${page}`;
		}
		const result = await fetchData.get(url);

		if (result instanceof Error) {
			console.error(`[getNormal] ${result}`);
		}

		return result;
	},
	async postNormal(data: any) {
		const url: string = UApiAddress.list!;
		const result = await fetchData.post(url, data);
		if (result instanceof Error) {
			console.error(`[postNormal] ${result}`);
			return result;
		}
	},
};
