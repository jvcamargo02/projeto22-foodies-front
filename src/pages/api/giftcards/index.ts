import type { NextApiRequest, NextApiResponse } from "next";
import { externalHttp } from "../../../utils/http";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = await externalHttp.get(
    `gift-cards`
  );

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.status(200).json(data);
}
