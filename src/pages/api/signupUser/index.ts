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
    const data = req.body
  const response = await externalHttp.post(
    `signup`, {...data, isMain: true}
  );

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.send(response.data)
}
