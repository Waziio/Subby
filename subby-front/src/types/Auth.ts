export type SignInResponse = {
	jwt: string;
};

export type SignUpRequest = {
	email: string;
	username: string;
	password: string;
	phoneNumber?: string;
};
