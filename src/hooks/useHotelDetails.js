import { useEffect, useState } from 'react'

const useHotelsDetails = () => {
  const [hotels, setHotels] = useState()

  useEffect(() => {
    fetch('hotelDetails.json')
      .then((res) => res.json())
      .then((data) => setHotels(data))
  }, [])

  return [hotels, setHotels]
}

export default useHotelsDetails
