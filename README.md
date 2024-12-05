Todo App
Giới thiệu
Todo App is a basic task management application built with:
- Backend: Django
- Frontend: ReactJS

The application allows users to :
- Create, edit, update, and delete tasks..
- Manage the completion status of each task.

System Requirements
- Python: >= 3.8
- Node.js: >= 16
- npm hoặc yarn
- Virtual Environment (khuyến khích)

Installation Guide
1. Clone the Project
```bash
git clone https://github.com/dominhsang2308/todo-app.git
cd todo-app
```

2. Setup Backend (Django)
Bước 1: Navigate to the backend folder

```bash
cd backend
```

Bước 2: Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scripts\activate       # Windows
```

Bước 3:Install dependencies

```bash
pip install -r requirements.txt
```

Bước 4: Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

Bước 5: Start the backend server

```bash
python manage.py runserver
```

The server will run by default at: http://127.0.0.1:8000

3. Setup Frontend (ReactJS)
Bước 1: Navigate to the frontend folder

```bash
cd ../frontend
```

Bước 2: Install dependencies

```bash
npm install
```

Bước 3: Start the frontend server

```bash
npm start
```

The application will run by default at: http://localhost:3000

Cách sử dụng
1. Open the application at http://localhost:3000.
2. Interact with the application:
   - Add new tasks..
   - Mark tasks as completed.
   - Edit or delete tasks.

API Endpoints
List of API Endpoints::

| HTTP Method | Endpoint         | Mô tả                          |
|-------------|------------------|---------------------------------|
| GET         | /api/todos/      | Lấy danh sách tất cả công việc |
| POST        | /api/todos/      | Tạo công việc mới              |
| PUT         | /api/todos/:id   | Cập nhật công việc cụ thể      |
| DELETE      | /api/todos/:id   | Xóa công việc cụ thể           |
