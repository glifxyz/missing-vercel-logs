export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log("Start GET test2");

  await new Promise((resolve) => setTimeout(resolve, 22_000));

  console.log("Before return GET test2");

  return Response.json({ foo: "bar" });
}
