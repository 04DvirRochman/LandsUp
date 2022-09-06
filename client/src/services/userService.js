import { APIURL } from './utils';
export const login = async (name, password) => {
	try {
		const result = await fetch(`${APIURL}/api/user/login`, {
			method: 'POST',
			body: JSON.stringify({ name, password }),
			headers: { 'content-type': 'application/json' },
		});
		const user = await result.json();
		return user;
	} catch (err) {
		throw err;
	}
};

export const signup = async (name, password) => {
	try {
		const result = await fetch(`${APIURL}/api/user/signup`, {
			method: 'POST',
			body: JSON.stringify({ name, password }),
			headers: { 'content-type': 'application/json' },
		});
		const newUser = await result.json();
		return newUser;
	} catch (err) {
		throw err;
	}
};
