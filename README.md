# Saral Job Apply

This project is a full-stack application with a Python backend and a Node.js frontend powered by Vite. Follow the steps below to set up and run the project.

## Features
- Backend: Python application (`app.py`)
- Frontend: Vite-powered React (or other JavaScript framework)
- Quick setup for local development

## Prerequisites
Ensure you have the following installed:
- Python 3.x
- Node.js and npm
- A code editor (e.g., VS Code)
- Command-line tools (Windows Command Prompt, PowerShell, or Terminal)

---

## Getting Started

### Step 1: Backend Setup
1. **Create a virtual environment**:
   ```bash
   python -m venv env
   ```
2. **Activate the virtual environment**:
   - On Windows:
     ```bash
     .\env\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source env/bin/activate
     ```
3. **Install backend dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the backend server**:
   ```bash
   python app.py
   ```

   The backend server will start, and you can leave this terminal running.

---

### Step 2: Frontend Setup
1. **Open a new terminal** and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. **Install frontend dependencies**:
   ```bash
   npm install
   ```
   *Note: Skip this step if dependencies are already installed.*
3. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## Editing Data
You can customize the data and values used in the project by editing the file located at:

```
frontend\src\dataButtons.ts
```

Feel free to modify or add data as per your needs to tailor the application to your requirements.

---

## Accessing the Application
1. Open a browser and navigate to:
   ```
   http://localhost:3000
   ```
2. Alternatively, use your machine's IPv4 address:
   - Find your IPv4 address:
     - Open Windows Command Prompt and run:
       ```cmd
       ipconfig
       ```
     - Look for the IPv4 Address under your active network.
   - Replace `localhost` with your IPv4 address:
     ```
     http://<your-ipv4>:3000
     ```

---

## Notes
- Ensure the backend and frontend are running simultaneously for full functionality.
- For production deployment, additional steps like environment variable configuration, build optimization, and hosting setup may be required.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

Happy Coding! 🎉
