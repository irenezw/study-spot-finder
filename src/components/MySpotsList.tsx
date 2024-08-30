import React, { useState } from 'react';
import { SpotDetails } from '../types/StudySpots'

const MySpotsList: React.FC<{
  mySpots: SpotDetails[];
}> = ({ mySpots }) => (
  <div>
    {mySpots.map((spot, i) =>
      <div
        className="spot-list-item"
        key={i}
      >
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

export default MySpotsList;