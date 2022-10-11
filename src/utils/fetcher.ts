import { http } from "../utils/http"

export const fetcher = async (url: string) => {
    return await http.get(url).then((res) => ({
      data: res.data,
      total: +res.headers["x-total-count"],
    }));
};

export const postFetcher = async (url: string, data: object) => {
  return await http.post(url, data).then((res) => ({
    status: res.status,
    data: res.data
  }))
}