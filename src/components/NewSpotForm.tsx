import React, { useState } from 'react';
import { SpotDetails } from '../../types/StudySpots'
import { useForm, SubmitHandler } from 'react-hook-form'


export const NewSpotForm: React.FC<{
  addNewSpot: (spot: SpotDetails) => void;
}> = ( { addNewSpot }) => {
  // const [spotName,]

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SpotDetails>()

  const onSubmit: SubmitHandler<SpotDetails> = (data) => addNewSpot(data)

  return (
    <form
      className="new-spot-form"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          {...register('parkingDifficulty')}
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
          placeholder='advice on parking'
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
          placeholder='comments on seating'
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

export default NewSpotForm;