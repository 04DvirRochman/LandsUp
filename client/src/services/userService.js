import APIURL from "./utils";
export const login = async (name, password) => {
  try {
    const result = await fetch(
      `${APIURL}/api/user?name=${name}&password=${password}`
    );
    const userId = await result.json();
    return userId.id;
  } catch (err) {}
};

export const signup = async (name, password) => {
  try {
    const result = await fetch(`${APIURL}/api/user`, {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "content-type": "application/json" },
    });
    const newUser = await result.json();
    return newUser;
  } catch (err) {
	console.log("error " + err );
  }
};
