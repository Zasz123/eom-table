import { Column } from "react-table";

export const PROPERTY_COLUMNS: readonly Column[] = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "auction code",
    accessor: "auction_code_string",
  },
  {
    Header: "place",
    accessor: "base_place",
  },
  {
    Header: "location",
    accessor: "auction_location",
  },
  {
    Header: "purpose",
    accessor: "auction_purpose",
  },
  {
    Header: "evaluation",
    accessor: "auction_evaluation",
  },
  {
    Header: "lowest price",
    accessor: "auction_lowest_price",
  },
  {
    Header: "price",
    accessor: "price",
  },
  {
    Header: "auction_sale",
    accessor: "auction_sale",
  },
];
