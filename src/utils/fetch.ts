import { UFetchMode } from './unions';

const httpRules = {
	headers: {
		'Content-Type': 'application/json; charset=UTF-8;',
	},
	referrerPolicy: 'no-referrer',
	mode: 'cors',
	credentials: 'same-origin',
	cache: 'no-cache',
	redirect: 'follow',
	dataType: 'json',
};

export const fetchData = {
	async get(url: string) {
		const response: Response = await fetch(url);
		if (!response.ok) {
			return Promise.reject(`[get] http call error. status: ${response}, url: ${url}`);
		}

		return response.json();
	},
	async post(url: string, data: any) {
		const body: string = data ? JSON.stringify(data) : '';
		const send: RequestInit = {
			method: UFetchMode.post,
			body: body,
			...{ httpRules },
		};

		const response: Response = await fetch(url, send);

		if (!response.ok) {
			return Promise.reject(`[post] http call error. status: ${response}, url: ${url}`);
		}

		return response.json();
	},
	async patch(url: string, data: Partial<any>) {
		const body: string = data ? JSON.stringify(data) : '';
		const send: RequestInit = {
			method: UFetchMode.patch,
			body: body,
		};

		const response: Response = await fetch(url, send);

		if (!response.ok) {
			console.log(response);
			return Promise.reject(`[patch] http call error. status: ${response}, url: ${url}`);
		}

		return response.json();
	},
	async put(url: string, data: any) {
		const body: string = data ? JSON.stringify(data) : '';
		const send: RequestInit = {
			method: UFetchMode.put,
			body: body,
			...{ httpRules },
		};

		const response: Response = await fetch(url, send);

		if (!response.ok) {
			return Promise.reject(`[put] http call error. status: ${response}, url: ${url}`);
		}

		return response.json();
	},
	async delete(url: string) {
		const send: RequestInit = {
			method: UFetchMode.delete,
			...{ httpRules },
		};

		const response: Response = await fetch(url, send);

		if (!response.ok) {
			return Promise.reject(`[delete] http call error. status: ${response}, url: ${url}`);
		}

		return response.json();
	},
};
