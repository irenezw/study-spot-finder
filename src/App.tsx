import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import logo from './logo.svg';
import './App.css';

type Inputs = {
  spotName: string;
  address: string;
  parkingDifficulty?: string;
  ambiance?: string;
  seating?: string;
  outlets?: string;
  favoriteOrder?: string;
  photos?: File;
  overallRating?: number;

}
function App() {

  const [mySpots, setMySpots] = useState([])


  return (
    <div className="App">
      <p>Study Spots</p>
      <NewSpotForm />
      {/* <MySpotsList /> */}
    </div>
  );
}

// const MySpotsList = (mySpots) => (
//   {mySpots.map(spot => (
//     <p>{spot}</p>
//   ))}
// )

const NewSpotForm: React.FC = () => {
  const [parkingComments, setParkingComments] = useState('')
  const [favoriteOrder, setFavoriteOrder] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        alignItems: 'center',
        margin: '0 auto',
        backgroundColor: 'pink',
      }}>
      {/* NAME */}
      <label>Spot Name:
        <input {...register("spotName")} />
      </label>

      {/* ADDRESS */}
      <label>Address:
        <input {...register("address")} />
      </label>

      {/* PARKING */}
      <label>
        Parking Difficulty:
        <div></div>
        {/* TODO: this div here needs to be replaced with a better solution for better formatting */}
        <input
          type="checkbox"
          value="easy"
          {...register('parkingDifficulty', { required: true })}
        />
        easy
      </label>
      <label>
        <input
          type="checkbox"
          value="hard"
          {...register('parkingDifficulty')}
        />
        hard
      </label>
      <label>
        <input
          type="checkbox"
          value="free"
          {...register('parkingDifficulty')}
        />
        free
      </label>
      <label>
        <input
          type="checkbox"
          value="paid"
          {...register('parkingDifficulty')}
        />
        paid
      </label>
      <label>
        <input
          type="text"
          placeholder='advice on parking'
          value={parkingComments}
          {...register('parkingDifficulty')}
        />
      </label>

      {/* AMBIANCE */}
      <label>
        Ambiance:
        <div></div>
        <input
          type="checkbox"
          value="chill and quiet"
          {...register('ambiance')}
        />
        chill and quiet
      </label>
      <label>
        <input
          type="checkbox"
          value="occasionally gets busy"
          {...register('ambiance')}
        />
        occasionally gets busy
      </label>
      <label>
        <input
          type="checkbox"
          value="busy"
          {...register('ambiance')}
        />
        busy
      </label>

      {/* SEATING */}
      <label>
        Seating:
        <div></div>
        <input
          type="checkbox"
          value="comfy"
          {...register('seating')}
        />
        comfy
      </label>
      <label>
        <input
          type="checkbox"
          value="okay"
          {...register('seating')}
        />
        okay
      </label>
      <label>
        <input
          type="checkbox"
          value="not comfy"
          {...register('seating')}
        />
        not comfy
      </label>
      <label>
        <input
          type="text"
          placeholder='comments on seating'
          value={favoriteOrder}
          {...register('seating')}
        />
      </label>


      <label>
        Outlets
        <div></div>
        <input
          type="checkbox"
          value="abundant"
          {...register('outlets')}
        />
        abundant
      </label>
      <label>
        <input
          type="checkbox"
          value="just enough"
          {...register('outlets')}
        />
        just enough
      </label>
      <label>
        <input
          type="checkbox"
          value="fought for my life"
          {...register('outlets')}
        />
        fought for my life
      </label>

      <label>Your favorite order:
        <input
          type="text"
          placeholder='your favorite order'
          value={favoriteOrder}
          {...register('favoriteOrder')}
        />
      </label>

      {/* OVERALL RATING */}
      <label>
        Overall Rating:
        <input
          type="radio"
          value="1"
          {...register('overallRating')}
        />
        <input
          type="radio"
          value="2"
          {...register('overallRating')}
        />
        <input
          type="radio"
          value="3"
          {...register('overallRating')}
        />
        <input
          type="radio"
          value="4"
          {...register('overallRating')}
        />
        <input
          type="radio"
          value="5"
          {...register('overallRating')}
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default App;
