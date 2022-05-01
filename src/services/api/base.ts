import axios from "axios";

const BASE_URL = process.env.BASE_URL;

axios.defaults.baseURL = BASE_URL;

export async function requestGet<T>(
  url: string,
  urlParameters?: object
): Promise<T> {
  const result = await axios.get(url, {
    params: urlParameters,
  });

  return result.data as T;
}
