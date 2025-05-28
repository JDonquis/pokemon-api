import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-4 flex flex-col items-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
        <h3 className="text-lg font-semibold capitalize mt-2">
          {pokemon.name}
        </h3>
        <span className="text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</span>
        <div className="flex mt-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`type-${type.type.name} px-2 py-1 rounded-full text-xs font-semibold mr-1`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}