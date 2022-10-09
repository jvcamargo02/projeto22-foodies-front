import { AxiosResponseHeaders } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ICategories } from "../../../types/dataTypes";
import { externalHttp } from "../../../utils/http";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategories>
){

  const { data }: {data: ICategories, headers: AxiosResponseHeaders} = await externalHttp.get(
    `categories`
  );

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.status(200).json(data);
}
