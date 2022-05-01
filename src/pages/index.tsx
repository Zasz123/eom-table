import { useState, useEffect, useCallback, useRef } from "react";
import type { NextPageContext } from "next";

import { fetchProperty } from "@services/api/property";

import TableContainer from "@components/table/Table";
import { PROPERTY_COLUMNS } from "@components/table/columns";
import useSort from "@hooks/useSort";
import { useQuery } from "react-query";
import { IProperty } from "@interfaces/property";
import TableTakeSelect from "@components/table/TableTakeSelect";

function Home(props: any) {
  const [page, setPage] = useState(2);
  const [take, setTake] = useState(20);
  const [properties, setProperties] = useState<IProperty[]>(props.result);
  const { sort, selectedSortItem, onSetReverse } = useSort("id");
  const loader = useRef(null);

  const { isLoading } = useQuery<IProperty[]>(
    ["fetchProperty", page, take, selectedSortItem, sort],
    () =>
      fetchProperty({
        page,
        offset: take,
        order: selectedSortItem,
        sorting: sort,
      }),
    {
      initialData: props.result,
      retry: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setProperties([...properties, ...data]);
      },
    }
  );

  useEffect(() => {
    if (loader.current === null) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        const target = entries[0];

        if (target.isIntersecting && !isLoading && properties.length > 0) {
          setPage((page) => page + 1);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      }
    );

    observer.observe(loader.current);

    return () => {
      if (observer && loader.current !== null) {
        observer.unobserve(loader.current);
      }
    };
  }, [page, isLoading, properties]);

  const onChangeTake = useCallback((value: number) => {
    setPage(1);
    setTake(value);
    setProperties([]);
  }, []);

  const onReverseSort = useCallback(
    (itemName: string | undefined) => {
      setPage(1);
      onSetReverse(itemName);
      setProperties([]);
    },
    [onSetReverse]
  );

  return (
    <div>
      <TableTakeSelect
        take={take}
        selectableTakes={[20, 30, 40, 50]}
        onChangeTake={onChangeTake}
      />
      <TableContainer
        data={properties}
        columns={PROPERTY_COLUMNS}
        sort={sort}
        selectedSortItem={selectedSortItem}
        onSetReverse={onReverseSort}
      />
      <div ref={loader} />
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const result = await fetchProperty({
    page: 1,
    offset: 0,
    order: "id",
    sorting: "DESC",
  });

  return { props: { result } };
}

export default Home;
