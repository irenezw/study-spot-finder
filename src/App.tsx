import React, { useState, useEffect } from 'react';
import './App.css';
import { SpotDetails } from './types/StudySpots'
import NewSpotForm from './components/NewSpotForm';
import { supabase } from './utils/supabase'


function App() {

  const [mySpots, setMySpots] = useState<SpotDetails[]>([])
  const addNewSpot = (newSpot: SpotDetails): void => {
    setMySpots(prevSpots => prevSpots ? [...prevSpots, newSpot] : [newSpot]);
    console.log(newSpot); // TODO: delete once complete
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

const MySpotsList: React.FC<{
  mySpots: SpotDetails[];
}> = ({ mySpots }) => (
  <div>
    {mySpots.map((spot, i) =>
      <div key={i}>
        <p>{spot.spot_name}</p>
        <p>{spot.address}</p>
        <p>{spot.ambiance}</p>
        <p>{spot.seating}</p>
        <p>{spot.outlets}</p>
        <p>{spot.favorite_order}</p>
        <p>{spot.overall_rating}</p>
      </div>
    )}
  </div>
)


export default App;
