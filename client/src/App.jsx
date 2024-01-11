import './App.css';
import GardenPage from './pages/GardenPage';
import MenuBar from './components/MenuBar/MenuBar';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PlantDetailsPage from './pages/PlantDetailPage';
import DiaryScreen from './components/DiaryScreen/DiaryScreen';

function App() {

  // return (
  //   <div id="app">
  //     <GardenPage />
  //   </div>
  // )

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<GardenPage />}/>
        <Route path='/myplant/:id' element={<PlantDetailsPage />}/>
        <Route path='/myplant/:id/diary' element={<DiaryScreen />}/>
      </Routes>
      <MenuBar className="menu-bar"/>
    </>
  )
}

export default App
