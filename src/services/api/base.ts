import axios from "axios";

const BASE_URL = process.env.API_BASE_URL;

axios.defaults.withCredentials = true;

export async function requestGet<T>(
  url: string,
  urlParameters?: object
): Promise<T> {
  const result = await axios.get(`${BASE_URL}${url}`, {
    params: urlParameters,
  });

  return result.data as T;
}
