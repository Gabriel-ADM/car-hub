// app/acompanhar/page.tsx
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AcompanharServico() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full">
      {/* Mapa (imagem simulada ou componente real futuramente) */}
      <Image
        src="/mapa.png" // coloque o mapa estático em /public/mapa.png
        alt="Mapa"
        fill
        className="object-cover"
      />

      {/* Botão voltar e perfil */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <button className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow">←</button>
        <Image src="/avatar.png" alt="Perfil" width={36} height={36} className="rounded-full border" />
      </div>

      {/* Botão GPS */}
      <div className="absolute top-16 right-4 bg-white rounded-full p-2 shadow">
        📍
      </div>

      {/* Card inferior */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
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
