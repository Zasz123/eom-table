import { requestGet } from "./base";

import { IProperty, IProperyRequestDTO } from "@interfaces/property";

export async function fetchProperty(requestData: IProperyRequestDTO) {
  const result = await requestGet<IProperty[]>("/property/joint", requestData);

  return result;
}
