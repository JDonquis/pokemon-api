import PokemonDetail from '../components/PokemonDetail'
import { Link } from 'react-router-dom'

export default function PokemonPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex items-center">
          <Link to="/" className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold">Detalles del Pokémon</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <PokemonDetail />
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>2025 Juan Donquis - Usando PokéAPI</p>
        </div>
      </footer>
    </div>
  )
}