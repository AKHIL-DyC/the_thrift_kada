import { menjeans } from "../menjeans/db";

export async function POST(request) {
  try {
    // Parse the JSON body of the request
    const jean = await request.json();

    // Find the jeans document by its ID
    const thatjeans = await menjeans.findById(jean._id);

    if (thatjeans) {
      // Update the 'completed' field and save the document
      thatjeans.completed = true;
      await thatjeans.save();

      return new Response(JSON.stringify({ message: 'Jeans updated successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ message: 'Jeans not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error updating jeans:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
