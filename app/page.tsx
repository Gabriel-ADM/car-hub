// pages/index.tsx
import Link from 'next/link';
import Image from 'next/image';
import BottomNav from './components/BottomNav';

export default function Home() {
  const cars = [
    {
      id: 's500',
      name: 'S 500 Sedan',
      type: 'Sedan',
      seats: 5,
      brand: 'Mercedes',
      image: '/s500.png',
    },
    {
      id: 'gla250',
      name: 'GLA 250 SUV',
      type: 'SUV',
      seats: 7,
      brand: 'Mercedes',
      image: '/gla250.png',
    },
  ];

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-2/3 px-3 py-1 border rounded-full text-sm"
        />
        <Image
          src="/profile.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <h2 className="text-lg font-bold mb-4">Seus carros</h2>

      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-gray-50 p-3 rounded-lg mb-3 shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="font-semibold">{car.name}</h3>
              <p className="text-xs text-gray-500">
                {car.type} · {car.seats} assentos · {car.brand}
              </p>
            </div>
            <Image
              src={car.image}
              alt={car.name}
              width={80}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex justify-between">
            <Link href={`/carros/${car.id}`}>
              <button className="bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
                Solicitar Serviço
              </button>
            </Link>
            <Link href={`/carros/${car.id}`}>
              <button className="border border-blue-600 text-blue-600 rounded-md px-3 py-1 text-sm">
                Detalhes
              </button>
            </Link>
          </div>
        </div>
      ))}

      <BottomNav />
    </div>
  );
}
