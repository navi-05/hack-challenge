export type StationType = {
  latitude: number | null;
  longitude: number | null;
  station_counts: number | null;
  location_country?: string | null;
  station_locator_url?: string | null;
  fuel_stations: [
    {
      station_name: string | null;
      street_address: string | null;
      intersection_directions: string | null;
      city: string | null;
      state: string | null;
      zip: string | null;
      country: string | null;
      station_phone: string | null;
      status_code: string | null;
      expected_date: Date | null;
      access_code: string | null;
      access_detail_code: string | null;
      access_days_time: string | null;
      cards_accepted: string | null;
      owner_type_code: string | null;
      ev_level1_evse_num: number | null;
      ev_level2_evse_num: number | null;
      ev_dc_fast_num: number | null;
      ev_other_evse: string | null;
      ev_connector_types: Array<string> | null;
      ev_network: string | null;
      ev_network_web: string | null;
      ev_pricing: string | null;
      ev_renewable_source: string | null;
      open_date: Date | null;
      id: number | null;
      facility_type: string | null;
      maximum_vehicle_class: string | null;
      distance: number | null;
      latitude: number | null;
      longitude: number | null;
      date_last_confirmed: Date | null;
    }
  ]
}

export type PlaceType = {
  geometry?: {
    location?: {
      lat: () => number;
      lng: () => number;
    }
  }
}

export type FuelStationType = {
  station_name: string | null;
  street_address: string | null;
  intersection_directions: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  station_phone: string | null;
  status_code: string | null;
  expected_date: Date | null;
  access_code: string | null;
  access_detail_code: string | null;
  access_days_time: string | null;
  cards_accepted: string | null;
  owner_type_code: string | null;
  ev_level1_evse_num: number | null;
  ev_level2_evse_num: number | null;
  ev_dc_fast_num: number | null;
  ev_other_evse: string | null;
  ev_connector_types: Array<string> | null;
  ev_network: string | null;
  ev_network_web: string | null;
  ev_pricing: string | null;
  ev_renewable_source: string | null;
  open_date: Date | null;
  id: number | null;
  facility_type: string | null;
  maximum_vehicle_class: string | null;
  distance: number | null;
  latitude: number | null;
  longitude: number | null;
  date_last_confirmed: Date | null;
} 