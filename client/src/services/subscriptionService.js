import { APIURL } from "./utils";
export const getUserSubs = async (userid, filter) => {
  let params = new URLSearchParams();
  if (filter) {
    if (filter.origin) {
      params.set("origin", filter.origin);
    } else if (filter.destination) {
      params.set("destination", filter.destination);
    }
  }
  try {
    let result = await fetch(`${APIURL}/api/subscriptions/${userid}?${params}`);
    let arr = await result.json();
    return arr;
  } catch (err) {}
};

export const createSubscription = async (userid, flightid) => {
  try {
    await fetch(`${APIURL}/api/subscription`, {
      method: "POST",
      body: JSON.stringify({ userid, flightid }),
      headers: { "content-type": "application/json" },
    });
  } catch (err) {}
};
export const deleteSubscription = async (userid, flightid) => {
  try {
    await fetch(
      `${APIURL}/api/subscription/?userid=${userid}&flightid=${flightid}`,
      {
        method: "DELETE",
      }
    );
  } catch (err) {}
};
