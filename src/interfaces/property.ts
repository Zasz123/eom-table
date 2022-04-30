export interface IProperty {
  id: number;
  auction_code_string: string;
  base_place: string;
  auction_location: string;
  auction_purpose: string;
  auction_evaluation: string;
  auction_lowest_price: string;
  price: string;
  auction_sale: string;
}

export interface IProperyRequestDTO {
  page: number;
  offset?: number;
  order?: string;
  sorting?: "ASC" | "DESC";
}

export interface IPropertyResponseDTO {
  data: IProperty[];
}
