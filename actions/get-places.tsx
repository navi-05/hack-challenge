import axios from 'axios'

const getPlaces = async (
  lat: number, 
  lng: number, 
  limit?: number,
  radius?: number ,
  status?: string,
  access?: string,
  ev_connector_type?: string,
  ev_charging_level?: string,
) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_NREL_API_URL}/api/alt-fuel-stations/v1/nearest.json`,
    {
      params: {
        fuel_type: 'ELEC',
        latitude: lat,
        longitude: lng,
        limit: limit ,
        radius: radius ,
        status: status ,
        access: access,
        ev_connector_type: ev_connector_type ,
        ev_charging_level: ev_charging_level ,
        api_key: process.env.NEXT_PUBLIC_NREL_API_KEY
      }
    }
  )
  return response.data
}

export default getPlaces

