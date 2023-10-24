import { BASE_URL } from "./const.js";

export const login = async (args) => {
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(args),
  });

  return loginRes.ok ? "success" : "fail";
};

export const getCurrentUserInfo = async () => {
  const userInfoRes = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  });

  return userInfoRes.ok ? userInfoRes.json() : null;
};

// TODO 4-2: GET, '/items' 호출
export const getItems = async () => {
  const itemsRes = await fetch(`${BASE_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  });
  return itemsRes.ok ? itemsRes.json() : null;
};

// TODO 4-2: GET, '/all-items' 호출
export const getAllItems = async () => {
  const allItemsRes = await fetch(`${BASE_URL}/all-items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  });
  return allItemsRes.ok ? allItemsRes.json() : null;
};

// TODO 4-2: POST, '/logout' 호출
export const logout = async () => {
  await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  });
};
