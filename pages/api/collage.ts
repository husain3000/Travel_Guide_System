// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(
      "https://datasets-server.huggingface.co/first-rows?dataset=poloclub%2Fdiffusiondb&config=2m_first_1k&split=train"
    );
    const response2 = await axios.get(
      "https://datasets-server.huggingface.co/first-rows?dataset=poloclub%2Fdiffusiondb&config=2m_random_100k&split=train"
    );
    res.status(200).json([response.data, response2.data]);
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: "error" });
  }
}
