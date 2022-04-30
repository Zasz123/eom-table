import { ISort } from "@interfaces/table";

import styles from "./TableColumnSortItem.module.scss";

interface IProps {
  sort: ISort;
  isSelected: boolean;
  onSetReverse: () => void;
}

function TableColumnSortItem({ sort, isSelected, onSetReverse }: IProps) {
  return (
    <span>
      <button
        className={isSelected ? styles.selectedSortButton : styles.sortButton}
        onClick={onSetReverse}
      >
        {isSelected && sort === "ASC" ? "▲" : "▼"}
      </button>
    </span>
  );
}

export default TableColumnSortItem;
