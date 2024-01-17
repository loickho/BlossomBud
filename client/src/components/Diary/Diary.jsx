import Camera from '../Camera/Camera';
import './Diary.css';
import { useState } from 'react';
import DiaryCardCollection from "../DiaryCardCollection/DiaryCardCollection";

export default function Diary({ plantData }) {
  return (
    <div className="diary">
      <Camera />
      <DiaryCardCollection plantData={plantData} />
    </div>
  )
}