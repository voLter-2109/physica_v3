import { client } from "../../../lib/client";

type ResponseData = {
  message: string;
};

// req: NextApiRequest,
// res: NextApiResponse<ResponseData>

export default async function getHomeData() {
  const query =
    "*[_type == 'page_tree' && year == '2024' && language == 'ru'][0]";

  try {
    const data = await client.fetch(query);

    return data;
  } catch (error) {
    console.log("error fetching");
  }
}
