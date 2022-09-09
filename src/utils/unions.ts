type Union<T> = T[keyof T];

export type TFetchMode = Union<typeof UFetchMode>;

export const UFetchMode = {
	post: 'POST',
	patch: 'PATCH',
	put: 'PUT',
	delete: 'DELETE',
} as const;

export const UApiAddress = {
	list: process.env.REACT_APP_API_LIST,
} as const;
