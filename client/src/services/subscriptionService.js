import APIURL from './utils';
export const getUserSubs = async (userid) => {
	try {
		const result = await fetch(`${APIURL}/api/subscriptions?userid=${userid}`);
		const arr = result.json();
		return arr;
	} catch (err) {}
};

export const createSubscription = async (userid, flightid) => {
	try {
		await fetch(`${APIURL}/api/subscription`, {
			method: 'POST',
			body: JSON.stringify({ userid, flightid }),
			headers: { 'content-type': 'application/json' },
		});
	} catch (err) {}
};
export const deleteSubscription = async (userid, flightid) => {
	try {
		await fetch(`${APIURL}/api/subscription/?userid=${userid}&flightid=${flightid}`, {
			method: 'DELETE',
		});
	} catch (err) {}
};
