import { login } from "../Utils/auth";

async function test() {
  try {
    const token = await login("admin@admin.com", "password");
    console.log("✅ Token recibido:", token);
  } catch (err) {
    console.error("❌ Error en login:", err);
  }
}

test();
