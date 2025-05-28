export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-l disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="bg-gray-200 px-4 py-2 font-semibold">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  )
}