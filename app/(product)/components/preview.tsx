'use client'

import { StationType } from "@/types"
import PreviewCard from "./preview-card"
import { createRef, useEffect, useRef, useState } from "react"

interface PreviewProps {
  stations: StationType;
  childClicked: number
}

const Preview: React.FC<PreviewProps> = ({
  stations,
  childClicked
}) => {

  // Smooth Scrolling
  const [elRefs, setElRefs] = useState([])
  useEffect(() => {
    // @ts-ignore
    const refs = Array(stations?.fuel_stations.length).fill().map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  }, [stations])

  return (
    <div className="w-full overflow-y-auto h-full shadow-lg rounded-lg ">
      {stations?.fuel_stations.map((fuel_station, i) => (
        <div ref={elRefs[i]} key={i}>
          <PreviewCard
            station={fuel_station}
            selected={Number(childClicked) === i}
            refProp={elRefs[i]}
          />
        </div>
      ))}
    </div>
  )
}

export default Preview