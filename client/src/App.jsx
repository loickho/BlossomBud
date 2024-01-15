import './App.css';
import GardenPage from './pages/GardenPage';
import MenuBar from './components/MenuBar/MenuBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import PlantDetailsPage from './pages/PlantDetailPage';
import DiaryPage from './pages/DiaryPage';
import AddPlantPage from './pages/AddPlantPage';
import RegisterLoginPage from './pages/RegisterLoginPage';
import auth from './utils/auth';
import { useState } from 'react';

function PrivateRoute ({ element, isAuthenticated, fallbackPath = '/login' }) {
  return isAuthenticated ? element : <Navigate to={fallbackPath} />;
}

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  // TODO: CHANGE this to authenticated user

  async function getUserId() {
    const response = await fetch(`http://localhost:3000/me`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .then((err) => console.log(err))
  }
  const [userId, setUserId] = useState('65a3bc46cf27217f859a6002')

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
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
      <MenuBar className="menu-bar"/>
    </>
  )
}

export default App
