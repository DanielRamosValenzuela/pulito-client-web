'use client'

import { useEffect } from 'react';
import { Container } from './layout/Container';
import { Map } from './ui/Map';
import { mapboxConstant } from "@/config/mapbox";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = mapboxConstant.PUBLIC_TOKEN

export default function Home() {
  useEffect(() => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    })
  }, []);

  return (
    <Container>
      <div id='map'></div>
      <div>Start</div>
    </Container>
  );
}
