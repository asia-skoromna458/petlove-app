import css from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = [page, page + 1, page + 2].filter(
    (pageNumber) => pageNumber <= totalPages,
  );
  return (
    <div className={css.container}>
      <button onClick={() => onPageChange(1)} disabled={page === 1}>
        &lt;&lt;
      </button>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        &lt;
      </button>
      <div>
        {pages.map((pageNumber) => (
          <button key={pageNumber} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}
        {pages[pages.length - 1] < totalPages && <span>...</span>}
      </div>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        &gt;
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={page === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
}
