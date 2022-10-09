import { http } from "../utils/http"

export const fetcher = (url: string) => {
    return http.get(url).then((res) => ({
      data: res.data,
      total: +res.headers["x-total-count"],
    }));
};