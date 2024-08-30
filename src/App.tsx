import React, { useState, useEffect } from 'react';
import './App.css';
import { SpotDetails } from './types/StudySpots'
import NewSpotForm from './components/NewSpotForm';
import MySpotsList from './components/MySpotsList';
import { supabase } from './utils/supabase'


function App() {

  const [mySpots, setMySpots] = useState<SpotDetails[]>([])
  const addNewSpot = (newSpot: SpotDetails): void => {
    setMySpots(prevSpots => prevSpots ? [...prevSpots, newSpot] : [newSpot]);
  };

  useEffect(() => {
    async function getMySpots() {
      const { data: mySpotsData, error } = await supabase
        .from('my_spots')
        .select('*') as { data: SpotDetails[] | null, error: any }

      if (error) {
        console.error('Error fetching spots:', error);
      } else if (mySpotsData) {
        setMySpots(mySpotsData);
      }

    }
    getMySpots();
  }, [])

  return (
    <div className="App">
      <p>Study Spots</p>
      <NewSpotForm addNewSpot={addNewSpot} />
      <MySpotsList mySpots={mySpots} />
    </div>
  );
}



export default App;
