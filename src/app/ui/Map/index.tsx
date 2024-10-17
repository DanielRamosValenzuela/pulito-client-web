'use client'

interface MapProps {
  mapId: string;
}

export const Map: React.FC<MapProps> = ({ mapId }) => {
  return (
    <div id={mapId}></div>
  );
};