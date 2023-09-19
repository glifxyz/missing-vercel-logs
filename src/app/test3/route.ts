export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log("Start");

  await new Promise((resolve) => setTimeout(resolve, 10_000));

  console.log("Before return");

  return Response.json({ foo: "bar" });
}
