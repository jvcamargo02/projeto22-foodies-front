import { AxiosResponseHeaders } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ICategories } from "../../../types/dataTypes";
import { findCepHttp } from "../../../utils/http";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategories>
){
  const { cep } = req.query
  const { data }: {data: ICategories, headers: AxiosResponseHeaders} = await findCepHttp.get(
    `${cep}/json/`
  );

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.status(200).json(data);
}
