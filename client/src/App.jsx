import './App.css';
import GardenPage from './pages/GardenPage';
import MenuBar from './components/MenuBar/MenuBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import PlantDetailsPage from './pages/PlantDetailPage';
import DiaryPage from './pages/DiaryPage';
import AddPlantPage from './pages/AddPlantPage';
import RegisterLoginPage from './pages/RegisterLoginPage';
import Profile from './pages/ProfilePage';
import auth from './utils/auth';
import { useState } from 'react';

function PrivateRoute ({ element, isAuthenticated, fallbackPath = '/login' }) {
  return isAuthenticated ? element : <Navigate to={fallbackPath} />;
}

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  const [userId, setUserId] = useState('65a3bc46cf27217f859a6002');

  async function getUserId() {
    try {
      const response = await fetch(`http://localhost:3000/me`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      console.log(data)
      setUserId(data._id);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header />
      <Routes>
      <Route
          path="/login"
          element={<RegisterLoginPage getUserId={getUserId} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}
        />
        <Route
          path="/"
          element={<PrivateRoute
                      element={<GardenPage userId={userId}/>}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="/myPlant/:plantId"
          element={<PrivateRoute
                      element={<PlantDetailsPage userId={userId}/>}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="/myplant/:plantId/diary"
          element={<PrivateRoute
                      element={<DiaryPage userId={userId} />}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="/addPlant"
          element={<PrivateRoute
                      element={<AddPlantPage userId={userId} />}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute
                      element={<Profile setIsAuthenticated={setIsAuthenticated}/>}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
      <MenuBar className="menu-bar"/>
    </>
  )
}

export default App
