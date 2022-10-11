import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router"
import { IRestaurant } from "../../../types/dataTypes";

import { externalHttp } from "../../../utils/http";

type Data = {
  dataRestaurant: IRestaurant
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {id} = req.query
  const reqRestaurant = await externalHttp.get(
    `restaurants/${id}`
  );
  const data = {
    dataRestaurant: reqRestaurant.data,
    dataMenu: reqRestaurant.data.menu?.MenuItem
  }

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.status(200).json(data);
}
