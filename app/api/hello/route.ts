export async function GET(request: Request) {
  console.log("Request Received!");
  const res = new Response("Response from Next API");
  return res;
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(request: Request) {
  const res = new Response(JSON.stringify({ status: "success" }));
  return res;
}