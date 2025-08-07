// components/BottomNav.tsx
export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 border-t flex justify-around">
      <button className="text-blue-600">🏠</button>
      <button className="text-gray-400">📝</button>
      <button className="text-gray-400">👤</button>
    </div>
  );
}
