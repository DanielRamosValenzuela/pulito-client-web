import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { mapboxConstant } from "@/config/mapbox";
mapboxgl.accessToken = mapboxConstant.PUBLIC_TOKEN

const useHome = () => {
  
  useEffect(() => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    })
  }, []);


  return {
    mapId: 'map'
  }
}

export default useHome