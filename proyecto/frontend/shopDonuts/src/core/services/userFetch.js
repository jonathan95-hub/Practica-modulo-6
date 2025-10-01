export const doLoginFetch = async (email, password) => {
  const res = await fetch("http://localhost:3000/shopdonuts/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await res.json();
  return result;
};

export const registerUserFetch = async (newUser) => {
  const res = await fetch("http://localhost:3000/shopdonuts/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Es recomendable poner aplication en minuscula
    },
    body: JSON.stringify(newUser),
  });
  const result = await res.json();
  return result;
};
