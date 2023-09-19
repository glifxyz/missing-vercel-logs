export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  console.log("Start POST test");

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      console.log("Before first enqueue");
      controller.enqueue(encoder.encode("Foo\n"));

      console.log("Before sleep");
      await new Promise((resolve) => setTimeout(resolve, 20000));
      console.log("After sleep");

      controller.close();
    },
  });

  console.log("Before return POST test");

  return new Response(readable, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
