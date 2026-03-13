# 🏙️ UrbanAlert API

UrbanAlert es una API REST diseñada para la gestión y reporte de incidencias urbanas. Permite a los usuarios reportar problemas (como incendios, baches o fallas eléctricas) y clasificarlos automáticamente por prioridad.

## 🚀 Tecnologías Utilizadas

* **Node.js** - Entorno de ejecución.
* **Express** - Framework para el servidor web.
* **MongoDB Atlas** - Base de Datos NoSQL.
* **Mongoose** - ODM para modelado de datos.
* **JSON Web Tokens (JWT)** - Autenticación segura.
* **Bcryptjs** - Encriptación de contraseñas.

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-de-tu-repo>
    cd urban-alert-api
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    * Completa las variables con tus credenciales (Mongo URI, JWT Secret, etc.). en el archivo `.env`.

4.  **Ejecutar el servidor:**
    ```bash
    # Escribe en la terminal
    node index.js
    ```

## 🛣️ Endpoints Principales

### Autenticación (`/api/auth`)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| POST | `/register` | Registra un nuevo usuario y encripta su contraseña. |
| POST | `/login` | Autentica al usuario y devuelve un Token JWT. |
| GET | `/getAllUsers` | Obtiene la lista de usuarios (Pruebas). |

### Reportes (`/api/reportes`)
| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| GET | `/getAllReports` | Obtiene todos los reportes ciudadanos. | Privado (JWT) |
| POST | `/createReports` | Crea un reporte. Si incluye "fuego", la prioridad es "alta". | Privado (JWT) |

## 📁 Estructura del Proyecto (N-Layer)
- `src/config`: Conexión a bases de datos.
- `src/controllers`: Lógica de las rutas.
- `src/middlewares`: Protección de rutas y validación de tokens.
- `src/models`: Esquemas de Mongoose.
- `src/routes`: Definición de rutas Express.
