import { useState } from "react";
import type { NextPageContext } from "next";

import { useQuery } from "react-query";
import { fetchProperty } from "@services/api/property";

import TableContainer from "@components/table/TableContainer";
import { IProperty } from "@interfaces/property";

import { PROPERTY_COLUMNS } from "@components/table/columns";

function Home(props: any) {
  // TODO: or parameters
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(20);
  const [order, setOrder] = useState("id");
  const [sort, setSort] = useState<"ASC" | "DESC">("DESC");

  const { data, isLoading } = useQuery<IProperty[]>(
    "fetchProperty",
    () =>
      fetchProperty({
        page,
        offset,
        order,
        sorting: sort,
      }),
    {
      initialData: props.result,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return (
    <div>
      {data !== undefined && !isLoading && (
        <TableContainer data={data} columns={PROPERTY_COLUMNS} />
      )}
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
