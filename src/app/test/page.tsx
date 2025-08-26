'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Teste do Tailwind</h1>
        <p className="text-xl">Se você vê este texto em branco com fundo azul, o Tailwind está funcionando!</p>
        <div className="mt-4 p-4 bg-green-500 rounded">
          <p>Esta caixa deve ser verde</p>
        </div>
      </div>
    </div>
  );
}
