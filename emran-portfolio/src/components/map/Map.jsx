import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Map = () => {
  return (
    <MapContainer center={[48.889905719716594, 2.4543046553046923]} zoom={15} style ={{width : "100%", height:"340px", }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[48.889905719716594, 2.4543046553046923]}>
        <Popup>salut ! C'est ici que j'habite. Vous êtes libre de visiter</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map