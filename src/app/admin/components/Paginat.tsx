export default function Paginat({ page, totalPages, onChange }: any) {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        ←
      </button>

      <span>{page} / {totalPages}</span>

      <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        →
      </button>
    </div>
  );
}
