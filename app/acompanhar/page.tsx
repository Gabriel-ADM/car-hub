'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Corrige ícones do Leaflet que quebram no Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'marker-icon-2x.png',
  iconUrl: 'marker-icon.png',
  shadowUrl: 'marker-shadow.png',
});

export default function AcompanharServico() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full">
      {/* Mapa real com react-leaflet */}
      <MapContainer
        center={[-15.8295, -48.0616]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.55052, -46.633308]}>
          <Popup>
            Seu motorista está aqui 🚗
          </Popup>
        </Marker>
      </MapContainer>



      {/* Botão GPS */}
      {/* <Image src="/profile.png" alt="Perfil" width={36} height={36} className="absolute top-16 rounded-full border right-4" /> */}
      {/* <div className="absolute top-16 right-4 bg-white rounded-full p-2 shadow z-10">
        📍
      </div> */}

      {/* Card inferior */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">S 500 Sedan</h2>
            <p className="text-xs text-gray-500">Sedan · 5 assentos · Mercedes</p>
          </div>
          <Image src="/s500.png" alt="Carro" width={100} height={50} />
        </div>
        <button
          onClick={() => router.push('/avaliar')}
          className="mt-4 bg-blue-600 text-white w-full rounded-lg py-2 text-sm"
        >
          Detalhes do serviço
        </button>
      </div>
    </div>
  );
}
