export const API = "https://task-3-campus-preorder.onrender.com/api";

export const post = async (url, data) => {
  const res = await fetch(API + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};
