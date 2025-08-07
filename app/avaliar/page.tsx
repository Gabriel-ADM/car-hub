// app/avaliar/page.tsx
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AvaliarServico() {
  const router = useRouter();
  const [rating, setRating] = useState(3);
  const [comentario, setComentario] = useState('');

  return (
    <div className="relative min-h-screen bg-black/50 flex items-center justify-center">
      {/* Fundo esmaecido com a tela anterior visível por trás (simulado) */}
      <Image
        src="/avaliacao-background.png" // use um print da tela anterior esmaecida
        alt="Fundo"
        fill
        className="object-cover blur-sm opacity-20"
      />

      {/* Modal */}
      <div className="bg-white rounded-2xl p-6 w-80 z-10 shadow-lg">
        <h2 className="text-center font-semibold text-lg mb-2">Avaliar serviço</h2>

        {/* Estrelas */}
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setRating(n)}
              className={`text-3xl ${n <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ★
            </button>
          ))}
        </div>

        {/* Comentários */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700 mb-1 block">
            Comentários adicionais
          </label>
          <textarea
            placeholder="Comentários e sugestões de serviço"
            className="w-full border rounded-lg p-2 text-sm resize-none h-20"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>

        {/* Botão enviar (fictício) */}
        <button
          onClick={() => {alert(`Avaliação enviada com ${rating} estrelas.`); router.push('/')}}
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm"
        >
          Enviar avaliação
        </button>
      </div>
    </div>
  );
}
