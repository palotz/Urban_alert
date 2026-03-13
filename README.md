# UrbanAlert

UrbanAlert is a REST API designed for the management and reporting of urban incidents. It allows users to report issues (such as fires, potholes, or electrical failures) and automatically classifies them by priority.

## Technologies Used

* **Node.js** - Runtime environment.
* **Express** - Web server framework.
* **MongoDB Atlas** - NonSQL Database.
* **Mongoose** - ODM for data modeling.
* **JSON Web Tokens (JWT)** - Secure authentication.
* **Bcryptjs** - Password encryption.

## Installation and Configuration

1.  **Clone the repository:**
    ```bash
    git clone <url-de-tu-repo>
    cd urban-alert-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variable Configuration::**
    * Fill in the variables with your credentials (Mongo URI, JWT Secret, etc.) in the .env file.

4.  **Run the server:**
    ```bash
    # Run in your terminal
    node index.js
    ```

## Main ENDPOINTS

### Authentication (`/api/auth`).
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| POST | `/register` | Registers a new user and encrypts their password. |
| POST | `/login` | Authenticates the user and returns a JWT Token. |
| GET | `/getAllUsers` | Retrieves the list of users (Testing). |

### Reports (`/api/reportes`).
| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| GET | `/getAllReports` | Retrieves all citizen reports. | Private (JWT) |
| POST | `/createReports` | Creates a report. If it includes "fire", priority is set to "high". | Private (JWT) |

## Project Structure.
- `src/config`: Database connection logic.
- `src/controllers`: Route logic and business rules.
- `src/middlewares`: Route protection and token validation.
- `src/models`: Mongoose schemas and data definitions.
- `src/routes`: Express route definitions.
