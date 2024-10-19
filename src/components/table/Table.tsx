import { useMemo, useState } from 'react';
import LeftAngle from "../../assets/images/left-angle.png";
import RightAngle from "../../assets/images/right-angle.png";
import { TableProps } from '../../interfaces/Table';
import styles from "./styles.module.css";

export default function Table<T extends object>({columns, data, rowsPerPage = 10}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [currentPage, rowsPerPage, data]);

  const totalPages = useMemo(() => Math.ceil(data.length / rowsPerPage), [data.length, rowsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const getPageNumbers = () => {
    if (totalPages <= 3) {
      return [...Array(totalPages).keys()];
    }

    if (currentPage === 0) return [0, 1, 2];
    if (currentPage === totalPages - 1) return [totalPages - 3, totalPages - 2, totalPages - 1];

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column)=> (
              <th key={String(column.key)}>{column.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.th}>
              {columns.map((column) => (
                column.render? column.render(row) :
                <td key={String(column.key)}>
                  {String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.paginationContainer}>
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          <img src={LeftAngle} width={22} height={22} />
        </button>

        {/* Render page numbers dynamically */}
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            className={currentPage === pageNumber ? styles.activePage : ''}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber + 1}
          </button>
        ))}

        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          <img src={RightAngle} width={22} height={22} />
        </button>
      </div>
    </div>
  )
}