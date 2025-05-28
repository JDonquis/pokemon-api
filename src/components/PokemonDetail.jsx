import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPokemonDetails } from '../services/pokemonApi'
import LoadSpinner from './LoadSpinner'
import ErrorMessage from './ErrorMessage'

export default function PokemonDetail() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        setLoading(true)
        const data = await getPokemonDetails(id)
        setPokemon(data)
        setError(null)
      } catch (err) {
        setError('Error al cargar los detalles del Pokémon. Por favor, inténtalo de nuevo más tarde.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonDetails()
  }, [id])

  if (loading) return <LoadSpinner />
  if (error) return <ErrorMessage message={error} />
  if (!pokemon) return null

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 p-6 flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-center mb-2">Frontal</h2>
            <img
              src={pokemon.sprites.front_default}
              alt="Front Sprite"
              className="w-48 h-48 object-contain mx-auto"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-center mb-2">Posterior</h2>
            <img
              src={pokemon.sprites.back_default}
              alt="Back Sprite"
              className="w-48 h-48 object-contain mx-auto"
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Información Básica</h2>
            <p className="mb-2">
              <span className="font-semibold">ID:</span> {pokemon.id.toString().padStart(3, '0')}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Altura:</span> {(pokemon.height / 10).toFixed(1)} m
            </p>
            <p className="mb-4">
              <span className="font-semibold">Peso:</span> {(pokemon.weight / 10).toFixed(1)} kg
            </p>
            
            <div className="mb-4">
              <span className="font-semibold">Tipos:</span>
              <div className="flex flex-wrap mt-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className={`type-${type.type.name} px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2`}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <span className="font-semibold">Habilidades:</span>
              <div className="flex flex-wrap mt-2">
                {pokemon.abilities.map((ability) => (
                  <span
                    key={ability.ability.name}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 capitalize"
                  >
                    {ability.ability.name.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Estadísticas</h2>
            <div className="space-y-3">
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold capitalize">
                      {stat.stat.name.replace('-', ' ')}:
                    </span>
                    <span>{stat.base_stat}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}