import React, { useState, useEffect} from 'react';
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
      const { data: mySpotsData } = await supabase.from('my_spots').select()
      console.log(mySpotsData)
    }
    getMySpots();
  }, )

  return (
    <div className="App">
      <p>Study Spots</p>
      <NewSpotForm addNewSpot={addNewSpot}/>
      <MySpotsList mySpots={mySpots} />
    </div>
  );
}

const MySpotsList: React.FC<{
  mySpots: SpotDetails[];
}> = ( { mySpots } ) => (
  <div>
    {mySpots.map((spot, i) =>
      <p key={i}>{spot.spotName}</p>
    )}
  </div>
)


export default App;
