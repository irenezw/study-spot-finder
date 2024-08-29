import React, { useState } from 'react';
import './App.css';
import { SpotDetails } from '../types/StudySpots'
import NewSpotForm from './components/NewSpotForm';

function App() {

  const [mySpots, setMySpots] = useState<SpotDetails[]>([])
  const addNewSpot = (newSpot: SpotDetails): void => {
    setMySpots([...mySpots, newSpot]);
    console.log(newSpot) //TODO: delete once complete
  };

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
