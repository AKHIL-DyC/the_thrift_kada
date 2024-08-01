
import { menjeans } from './db';

export async function POST(request) {
    const payload=await request.json();
   
    await menjeans.create({
        title:payload.title,
        size:payload.size,
        condition:payload.condition,
        price:payload.price
    })
    return new Response(JSON.stringify({ message: 'inserted' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
}