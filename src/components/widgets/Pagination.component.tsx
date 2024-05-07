import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'bg-blue-500 text-white px-4 py-2 rounded-md mx-1' : 'bg-gray-200 text-gray-700 px-4 py-2 rounded-md mx-1'}>
          <button onClick={() => onPageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="flex justify-center">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
};

export default Pagination;