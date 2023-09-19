export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log("Start GET test3");

  await new Promise((resolve) => setTimeout(resolve, 10_000));

  console.log("Before return GET test3");

  return Response.json({ foo: "bar" });
}
