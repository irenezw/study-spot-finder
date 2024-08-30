import React, { useState } from 'react';
import { SpotDetails } from '../types/StudySpots'
import { useForm, SubmitHandler } from 'react-hook-form'
import { supabase } from '../utils/supabase';


export const NewSpotForm: React.FC<{
  addNewSpot: (spot: SpotDetails) => void;
}> = ({ addNewSpot }) => {

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
        <input {...register("spot_name", { required: true })} />
        {errors.spot_name && <span className="missing-field">This field is required</span>}
      </label>

      {/* ADDRESS */}
      <label>Address:
        <input {...register("address", { required: true })} />
        {errors.address && <span className="missing-field">This field is required</span>}
      </label>

      {/* PARKING */}
      <label>
        Parking Difficulty:
        <div></div>
        {/* TODO: this div here needs to be replaced with a better solution for better formatting */}
        <input
          type="checkbox"
          value="easy"
          {...register('parking_difficulty')}
        />
        easy
      </label>
      <label>
        <input
          type="checkbox"
          value="hard"
          {...register('parking_difficulty')}
        />
        hard
      </label>
      <label>
        <input
          type="checkbox"
          value="free"
          {...register('parking_difficulty')}
        />
        free
      </label>
      <label>
        <input
          type="checkbox"
          value="paid"
          {...register('parking_difficulty')}
        />
        paid
      </label>
      <label>
        <input
          placeholder='advice on parking'
          {...register('parking_difficulty')}
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
          {...register('favorite_order')}
        />
      </label>

      {/* OVERALL RATING */}
      <label>
        Overall Rating:
        <input
          type="radio"
          value="1"
          {...register('overall_rating')}
        />
        <input
          type="radio"
          value="2"
          {...register('overall_rating')}
        />
        <input
          type="radio"
          value="3"
          {...register('overall_rating')}
        />
        <input
          type="radio"
          value="4"
          {...register('overall_rating')}
        />
        <input
          type="radio"
          value="5"
          {...register('overall_rating')}
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default NewSpotForm;