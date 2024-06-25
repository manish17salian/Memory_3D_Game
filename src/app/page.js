import Image from "next/image";
import MemoryGame from "./memory/MemoryGame";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between align-center">
      <MemoryGame/>
    </main>
  );
}
