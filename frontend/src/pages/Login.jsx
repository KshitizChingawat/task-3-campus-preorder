import { post } from "../services/api";

export default function Login() {
  const handleLogin = async () => {
    const res = await post("/auth/login", {
      email: "student@medicaps.ac.in",
      password: "password"
    });
    localStorage.setItem("token", res.token);
  };

  return <button onClick={handleLogin}>Login</button>;
}
