import { useState } from "react";

import { ISort } from "@interfaces/table";

function useSort(defaultSortName: string, initValue?: ISort) {
  const [sort, setSort] = useState<ISort>(initValue || "DESC");
  const [selectedSortItem, setselectedSortItem] =
    useState<string>(defaultSortName);

  const onSetAsc = (itemName?: string) => {
    setSort("ASC");
    if (itemName !== undefined) {
      setselectedSortItem(itemName);
    }
  };

  const onSetDesc = (itemName?: string) => {
    setSort("DESC");
    if (itemName !== undefined) {
      setselectedSortItem(itemName);
    }
  };

  const onSetReverse = (itemName?: string) => {
    if (itemName === selectedSortItem) {
      setSort(sort === "ASC" ? "DESC" : "ASC");
      return;
    }

    onSetDesc(itemName);
  };

  return {
    sort,
    onSetAsc,
    onSetDesc,
    onSetReverse,
    selectedSortItem,
  };
}

export default useSort;
