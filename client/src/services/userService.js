const APIURL = 'http://localhost:3000';
const login = async (name, password) => {
	try {
		const result = await fetch(`${APIURL}/api/user?name=${name}&password=${password}`);
		const userId = await result.json();
		return userId.id;
	} catch (err) {}
};

const signup = async (name, password) => {
	try {
		await fetch(`${APIURL}/api/user`, {
			method: 'POST',
			body: JSON.stringify({ name, password }),
			headers: { 'content-type': 'application/json' },
		});
	} catch (err) {}
};

signup('ejrsgtj', 'ejhuiaerhg');
