export const defaultProps = {
  center: {
    lat:  40.719074,
    lng: -74.050552
  },
}

export const connectorTypes = {
  all : "All",
  NEMA1450: "NEMA 14-50",
  NEMA515: "NEMA 5-15",
  NEMA520: "NEMA 5-20",
  J1772: "J1772",
  J1772COMBO: "CCS",
  CHADEMO: "CHAdeMO",
  TESLA: "Tesla"
}

export const levelTypes = {
  all:	'All',
  1:	'Level 1',
  2:	'Level 2',
  dc_fast:	'DC Fast',
  legacy:	'Legacy chargers',
}

export const statusTypes = {
  all: 'All',
  E: 'Available',
  P: 'Planned',
  T: 'Temporarily Unavailable'
}

export const accessTypes = {
  all: "All",
  public: "Public",
  private: "Private"
}