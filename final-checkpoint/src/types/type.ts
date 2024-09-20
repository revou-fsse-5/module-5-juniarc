export interface CategoryType {
	id: number;
	name: string;
	image: string;
	creationAt: string;
	updatedAt: string;
}

export interface ProductItemType {
	id: number;
	title: string;
	price: number;
	description: string;
	images: string[];
	creationAt: string;
	updatedAt: string;
	category: CategoryType;
}

export interface ProductDetailType {
	id: number;
	title: string;
	price: number;
	description: string;
	images: string[];
	creationAt: string;
	updatedAt: string;
	category: CategoryType;
}

export interface ChartItemType {
	id: number;
	product: {
		id: number;
		title: string;
		price: number;
		images: string[];
	};
}

export interface RegisterType {
	name: string;
	email: string;
	password: string;
	avatar: string;
}

export interface SigninType {
	email: string;
	password: string;
}

export interface UserType {
	id?: number;
	email?: string;
	password?: string;
	name?: string;
	role?: string;
	avatar?: string;
}
