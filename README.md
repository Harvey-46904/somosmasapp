# Guía de Instalación - Proyecto Ionic

Este documento describe los pasos para descargar e instalar un proyecto en **Ionic** desde un repositorio.

---

## 📥 1. Clonar el repositorio

Ejecuta el siguiente comando en tu terminal:

```bash
git clone https://github.com/Harvey-46904/somosmasapp.git proyecto-ionic
```

Luego entra en la carpeta del proyecto:

```bash
cd proyecto-ionic
```

---

## 📦 2. Instalar dependencias

Asegúrate de tener instalado **Node.js** y **npm**.  
Luego instala las dependencias del proyecto con:

```bash
npm install
```

---

## ▶️ 3. Ejecutar en el navegador

Para correr el proyecto en un navegador, usa:

```bash
ionic serve
```

Esto abrirá la aplicación en tu navegador por defecto.

---

## 📱 4. Ejecutar en Android / iOS

### Android
```bash
ionic capacitor build android
```

### iOS
```bash
ionic capacitor build ios
```

*(Necesitas tener Android Studio o Xcode instalado respectivamente).*

---

## ⚙️ 5. Variables de entorno (opcional)

Si el proyecto usa variables de entorno, crea un archivo `.env` en la raíz del proyecto y define las necesarias.

Ejemplo:

```env
API_URL=https://api.midominio.com
```

---

## ✅ Listo!

Ya puedes empezar a trabajar con el proyecto 🚀
