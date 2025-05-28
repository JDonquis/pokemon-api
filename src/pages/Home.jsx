import PokemonList from '../components/PokemonList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">Pokédex</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <PokemonList />
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Pokédex - Usando PokéAPI</p>
        </div>
      </footer>
    </div>
  );
}