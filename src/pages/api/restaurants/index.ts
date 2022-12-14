import type { NextApiRequest, NextApiResponse } from "next";
import { externalHttp } from "../../../utils/http";

type Data = {
    name: string;
    image: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _page = 1, _limit = 5 } = req.query;
  const { data, headers } = await externalHttp.get(
    `restaurants?_limit=${_limit}&_page=${_page}`
  );
    console.log(data)
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.setHeader("X-Total-Count", headers["x-total-count"]);
  res.status(200).json(data);
}
