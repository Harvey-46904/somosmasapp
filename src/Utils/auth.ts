import api from "./api";
import { Preferences } from "@capacitor/preferences";

// Login
export async function login(email: string, password: string) {
  const res = await api.post("/login", { email, password });

  const token = res.data.access_token;
  const name=res.data.user;
  const id=res.data.user_id;
  if (!token) throw new Error("No se recibió token del backend");

  await Preferences.set({ key: "authToken", value: token  });
  await Preferences.set({ key: "userName", value: name });
  await Preferences.set({ key: "userId", value: String(id) });
  return token;
}

// Logout
export async function logout() {
  await Preferences.remove({ key: "authToken" });
}

// Obtener token guardado
export async function getToken(): Promise<string | null> {
  const { value } = await Preferences.get({ key: "authToken" });
  return value;
}
