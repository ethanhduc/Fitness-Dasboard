# Fitness Dashboard

A full-stack MERN (MongoDB, Express.js, React, Node.js) web application for tracking and managing workout routines.

## 🚀 Features

- **Create Workouts**: Add new workout sessions with exercise details
- **View Workouts**: Browse all workout sessions in an organized dashboard
- **Update Workouts**: Edit existing workout information
- **Delete Workouts**: Remove workouts from your tracking history
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Dynamic data updates without page refreshes

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Context API for state management
- Custom React hooks
- CSS3 for styling
- React Router DOM for navigation

**Backend:**
- Node.js
- Express.js
- RESTful API architecture
- MongoDB with Mongoose ODM
- Environment-based configuration

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/workouts` | Get all workouts |
| GET | `/api/workouts/:id` | Get single workout |
| POST | `/api/workouts` | Create new workout |
| PATCH | `/api/workouts/:id` | Update workout |
| DELETE | `/api/workouts/:id` | Delete workout |

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ethanhduc/Fitness-Dasboard.git
   cd Fitness-Dasboard
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Start the application**
   
   Backend server (from backend directory):
   ```bash
   npm run dev
   ```
   
   Frontend application (from frontend directory):
   ```bash
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## 📁 Project Structure

```
Fitness-Dashboard/
├── backend/
│   ├── controllers/
│   │   └── workoutController.js
│   ├── models/
│   │   └── workoutModel.js
│   ├── routes/
│   │   └── workouts.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── WorkoutDetails.js
│   │   │   └── WorkoutForm.js
│   │   ├── context/
│   │   │   └── WorkoutsContext.js
│   │   ├── hooks/
│   │   │   └── useWorkoutsContext.js
│   │   ├── pages/
│   │   │   └── Home.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🎯 Key Features Implemented

- **Full CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **RESTful API Design**: Following REST principles for API endpoints
- **Context API Integration**: Efficient state management across React components
- **Custom React Hooks**: Reusable logic for workout data management
- **Error Handling**: Comprehensive error handling on both frontend and backend
- **Data Validation**: Input validation and error messaging
- **Responsive UI**: Mobile-friendly design with modern CSS

## 🚀 Future Enhancements

- User authentication and authorization
- Workout categories and filtering
- Progress tracking and analytics
- Social features (sharing workouts)
- Mobile app development
- Integration with fitness APIs

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ethan Nguyen**
- GitHub: [@ethanhduc](https://github.com/ethanhduc)

---

⭐ Star this repository if you found it helpful!