import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router"
import { IRestaurant } from "../../../types/dataTypes";

import { externalHttp } from "../../../utils/http";

type Data = {
  dataRestaurant: IRestaurant
  dataMenu: any
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {id} = req.query
  const reqRestaurant = await externalHttp.get(
    `restaurants/${id}`
  );
  const reqMenu = await externalHttp.get(
    `menu/${id}`
  );
  const data = {
    dataRestaurant: reqRestaurant.data,
    dataMenu: reqMenu.data
  }

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.status(200).json(data);
}
