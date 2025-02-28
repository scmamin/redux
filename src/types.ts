export interface User {
	name: string;
	id: number;
	isAuthenticated: boolean;
}

export interface Todo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}
