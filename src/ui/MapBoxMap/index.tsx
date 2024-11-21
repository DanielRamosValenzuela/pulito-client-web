'use client';

import Map from 'react-map-gl';
import { mapboxConstant } from "@/config/mapbox";

interface MapProps {}

export const MapBoxMap: React.FC<MapProps> = ({}) => {
  return (
    <div>
      <Map
        mapboxAccessToken={mapboxConstant.PUBLIC_TOKEN}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      />
    </div>
  );
};
