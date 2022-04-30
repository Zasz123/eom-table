import { useState } from "react";
import type { NextPageContext } from "next";

import { fetchProperty } from "@services/api/property";

import useUrlParams from "@hooks/useUrlParams";

import TableContainer from "@components/table/Table";
import { PROPERTY_COLUMNS } from "@components/table/columns";
import useSort from "@hooks/useSort";

function Home(props: any) {
  const { page } = useUrlParams();
  const [take, setTake] = useState(20);
  const { sort, selectedSortItem, onSetReverse } = useSort("id");

  // const { data, isLoading } = useQuery<IProperty[]>(
  //   "fetchProperty",
  //   () =>
  //     fetchProperty({
  //       page,
  //       offset,
  //       order,
  //       sorting: sort,
  //     }),
  //   {
  //     initialData: props.result,
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   }
  // );

  return (
    <div>
      {/* {data !== undefined && !isLoading && ( */}
      <TableContainer
        data={props.result}
        columns={PROPERTY_COLUMNS}
        sort={sort}
        selectedSortItem={selectedSortItem}
        onSetReverse={onSetReverse}
        take={take}
        onChangeTake={setTake}
      />
      {/* )} */}
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
