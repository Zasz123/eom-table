import { ISort } from "@interfaces/table";
import { Column, useTable } from "react-table";

import tableStyles from "./Table.module.scss";
import TableColumnSortItem from "./TableColumnSortItem";
import TableTakeSelect from "./TableTakeSelect";

interface IProps<T extends object> {
  data: T[];
  columns: readonly Column<T>[];
  sort: ISort;
  selectedSortItem: string;
  onSetReverse: (itemName?: string | undefined) => void;
  take: number;
  onChangeTake: (value: number) => void;
}

function TableContainer<T extends object>({
  data,
  columns,
  sort,
  selectedSortItem,
  onSetReverse,
  take,
  onChangeTake,
}: IProps<T>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      data,
      columns,
    });

  return (
    <div className={tableStyles.tableWrapper}>
      <TableTakeSelect
        take={take}
        selectableTakes={[20, 30, 40, 50]}
        onChangeTake={onChangeTake}
      />
      <table className={tableStyles.customTable} {...getTableProps()}>
        <thead className={tableStyles.tableHeaderWrapper}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <TableColumnSortItem
                    sort={sort}
                    isSelected={selectedSortItem === column.id}
                    onSetReverse={() => onSetReverse(column.id)}
                  />
                </th>
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
