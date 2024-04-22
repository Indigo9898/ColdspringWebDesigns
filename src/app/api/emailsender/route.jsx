import { NextResponse } from 'next/server'

export async function POST(req, res) {
  

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Handle the POST request here
    // This will log the form data sent from the client
    var data = req.body
    console.log(req.body)
    // You should process the form data and send a response accordingly
    return NextResponse.json({ data }, {status: 200})
  } catch (error) {
    console.error(error);
     return new NextResponse("Database Error", { status: 500 });
  }
}
