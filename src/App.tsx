import React, { useState, useEffect } from 'react';
import './App.css';
import { SpotDetails } from './types/StudySpots'
import NewSpotForm from './components/NewSpotForm';
import MySpotsList from './components/MySpotsList';
import { supabase } from './utils/supabase'


function App() {

  const [mySpots, setMySpots] = useState<SpotDetails[]>([])
  const addNewSpot = async (newSpot: SpotDetails): Promise<void> => {
    setMySpots(prevSpots => prevSpots ? [...prevSpots, newSpot] : [newSpot]);


    const { data, error } = await supabase
      .from('my_spots')
      .insert({
        spot_name: newSpot.spot_name,
        address: newSpot.address,
        parking_difficulty: newSpot.parking_difficulty,
        ambiance: newSpot.ambiance,
        seating: newSpot.seating,
        outlets: newSpot.outlets,
        favorite_order: newSpot.favorite_order,
        overall_rating: newSpot.overall_rating,
      })
      .select('*') as { data: SpotDetails[] | null, error: any }
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
