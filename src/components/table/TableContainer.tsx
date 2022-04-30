import { Column, useTable } from "react-table";

import tableStyles from "./TableContainer.module.scss";

interface IProps<T extends object> {
  data: T[];
  columns: readonly Column<T>[];
}

function TableContainer<T extends object>({ data, columns }: IProps<T>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      data,
      columns,
    });

  return (
    <div className={tableStyles.tableWrapper}>
      <table {...getTableProps()}>
        <thead className={tableStyles.tableHeaderWrapper}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
