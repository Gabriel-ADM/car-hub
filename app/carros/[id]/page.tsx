// app/carros/[id]/page.tsx
'use client'
import Image from 'next/image';

interface Params {
  params: {
    id: string;
  };
}

export default function CarDetail({ params }: Params) {
  const { id } = params;

  const car = {
    id,
    name: 'S 500 Sedan',
    rating: 4.9,
    reviews: 230,
    model: 'S 500',
    color: 'Preto',
    trunk: '500 Litros',
    location: 'St. M-Norte QNM 40 - Taguatinga, Brasil',
    price: 80,
    image: '/s500.png',
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => history.back()}>&larr;</button>
        <button>♥</button>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">{car.name}</h2>
        <div className="text-yellow-500 text-sm">
          ★ {car.rating} <span className="text-gray-500">({car.reviews} Reviews)</span>
        </div>
        <Image src={car.image} alt="Car" width={200} height={100} className="mx-auto my-2" />
      </div>

      <div className="grid grid-cols-3 text-center gap-2 mb-4 text-sm">
        <div><p className="text-gray-500">Modelo</p><p>{car.model}</p></div>
        <div><p className="text-gray-500">Cor</p><p>{car.color}</p></div>
        <div><p className="text-gray-500">Porta Malas</p><p>{car.trunk}</p></div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Serviços</h3>
        <div className="flex space-x-2">
          <button className="flex-1 border border-blue-500 bg-blue-100 text-blue-700 rounded-lg p-2 text-xs">
            <p className="font-bold">$80</p>
            <p>Lavagem Completa</p>
            <p className="text-[10px]">Interior e exterior</p>
          </button>
          <button className="flex-1 border border-gray-300 bg-gray-100 text-gray-400 rounded-lg p-2 text-xs cursor-not-allowed">
            <p className="font-bold">$400</p>
            <p>Polimento</p>
            <p className="text-[10px]">Exterior</p>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Localização</h3>
        <p className="text-sm text-gray-600 flex items-center gap-1">📍 {car.location}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">${car.price} <span className="text-sm font-normal">/ Serviço</span></p>
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm">Solicitar</button>
      </div>
    </div>
  );
}
