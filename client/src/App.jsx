/* eslint-disable react/prop-types */
import './App.css';
import GardenPage from './pages/GardenPage';
import MenuBar from './components/MenuBar/MenuBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import PlantDetailsPage from './pages/PlantDetailPage';
import DiaryScreen from './components/DiaryScreen/DiaryScreen';
import AddPlantPage from './pages/AddPlantPage';
import RegisterLoginPage from './pages/RegisterLoginPage';
import auth from './components/utils/auth';
import { useState } from 'react';

function PrivateRoute ({ element, isAuthenticated, fallbackPath = '/login' }) {
  return isAuthenticated ? element : <Navigate to={fallbackPath} />;
}

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <Header />
      <Routes>
      <Route
          path="/login"
          element={<RegisterLoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}
        />
        <Route
          path="/"
          element={<PrivateRoute
                      element={<GardenPage />}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="/myPlant/:id"
          element={<PrivateRoute
                      element={<PlantDetailsPage />}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="/myplant/:id/diary"
          element={<PrivateRoute
                      element={<DiaryScreen />}
                      isAuthenticated={isAuthenticated}
                      fallbackPath="/login"
                    />}
        />
        <Route
          path="/addPlant"
          element={<PrivateRoute
                      element={<AddPlantPage />}
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
