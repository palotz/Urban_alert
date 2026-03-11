# 🏙️ UrbanAlert API

UrbanAlert es una plataforma diseñada para que los ciudadanos reporten incidentes urbanos (baches, incendios, fugas) de manera rápida, permitiendo una gestión eficiente de los reportes mediante priorización inteligente.

## 🛠️ Tecnologías Utilizadas
* **Node.js** & **Express** (Backend)
* **MongoDB** & **Mongoose** (Base de Datos)
* **JSON Web Token (JWT)** (Seguridad)
* **Bcryptjs** (Encriptación de contraseñas)

## 🚀 Guía de Instalación
1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install

    Configura tus variables de entorno:

        Crea un archivo .env basado en .env.template.

        Agrega tu MONGO_URI y tu JWT_SECRET.

    Inicia el servidor:
    Bash

    node index.js

🛣️ Endpoints Principales
Autenticación (/api/auth)

    POST /register: Registro de nuevos usuarios.

    POST /login: Inicio de sesión y obtención de Token JWT.

Reportes (/api/reportes)

    GET /getAllReports: Obtener todos los reportes (Requiere Token).

    POST /createReports: Crear un nuevo reporte (Requiere Token).


---

## 2. Documento PDF (Guía de contenido)

Aquí tienes la información redactada para que la pases a tu documento:

### 📑 Introducción
UrbanAlert resuelve la falta de comunicación directa entre ciudadanos y autoridades locales. Actualmente, muchos incidentes urbanos no se reportan o se pierden en la burocracia. Esta API centraliza los reportes y asigna prioridades automáticamente basándose en la gravedad del asunto (ej. incendios).

### ✅ Requerimientos
**Funcionales (RF):**
1. El sistema debe permitir el registro y login de usuarios con contraseñas encriptadas.
2. El sistema debe asignar prioridad "Alta" automáticamente si el reporte menciona palabras clave como "fuego" o "incendio".
3. Solo los usuarios autenticados pueden visualizar y crear reportes.

**No Funcionales (RNF):**
1. **Seguridad:** Uso de JWT para la protección de rutas privadas.
2. **Escalabilidad:** Arquitectura Monolítica de N-Capas para facilitar el mantenimiento.
3. **Disponibilidad:** Conexión persistente a base de datos en la nube (MongoDB Atlas).

### 🏗️ Diseño Arquitectónico
Elegimos un **Monolito de N-Capas** porque permite una separación clara de responsabilidades:
* **Routes:** Manejan las rutas de entrada.
* **Controllers:** Contienen la lógica de negocio.
* **Models:** Definen la estructura de los datos.
* **Middlewares:** Gestionan la seguridad (JWT).



### 🔐 Seguridad (Flujo JWT)
1. El usuario envía sus credenciales al endpoint `/login`.
2. El servidor verifica la identidad y genera un Token firmado con una clave secreta (`JWT_SECRET`).
3. El cliente guarda el Token y lo envía en el **Header** (`Authorization`) en cada petición a rutas protegidas.
4. El middleware `auth.js` intercepta la petición, verifica el token y, si es válido, permi
