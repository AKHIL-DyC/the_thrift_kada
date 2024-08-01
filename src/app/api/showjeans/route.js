
import { menjeans } from "../menjeans/db";
export async function GET(request) {
  const alljeans= await menjeans.find({});
  return new Response(JSON.stringify(alljeans), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
