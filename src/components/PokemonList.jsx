import { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemonApi';
import PokemonCard from './PokemonCard';
import LoadSpinner from './LoadSpinner';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const offset = (currentPage - 1) * itemsPerPage;
        const data = await getPokemons(offset, itemsPerPage);
        
        const detailedPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return await response.json();
          })
        );
        
        setPokemonList(detailedPokemon);
        setTotalPages(Math.ceil(data.count / itemsPerPage));
        setError(null);
      } catch (err) {
        setError('Error al cargar los Pokémon. Por favor, inténtalo de nuevo más tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) return <LoadSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}