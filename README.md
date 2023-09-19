# Long-running functions do not output any logs?

We've observed that edge functions running longer than approximately 17s do not output anything via console.log (or other logging systems we've tried, like Axiom)

The function otherwise does complete! e.g. database calls at the end of the function fire successfully. Just not `console.log` output.

Additionally, this only seems to show up at the 17s mark.

This repro-repo is a freshly bootstrapped `create-next-app` using appdir + edge runtimes

## Getting started

Note that this bug only shows up on Vercel, not locally! But just showing local steps for completeness.

First, install dependencies:

```sh
npm install
```

Then run the development server:

```bash
npm run dev
```

Then make some requests to our three sleepy test endpoints, and watch your server logs.

- all 3 of these tests result in a `200 OK` with the expected data. So the good news is they still technically work
- but 2 out of 3 of the tests do not produce any `console.log` output at all. That's the bad news
- `/test2`` specfically produces a "Error: Network connection lost." error on Vercel, which doesn't happen with the other two
- all 3 tests behave consistently over dozens of test runs (as of 2023-09-19)

POST /test -- 20s -- fails

```sh
curl -s -X POST http://localhost:3000/test
```

GET /test2 -- 22s -- fails

```sh
curl -s -X GET http://localhost:3000/test2
```

GET /test3 -- 10s -- works

```sh
curl -s -X GET http://localhost:3000/test3
```

## Testing against a Vercel deployment

```sh
hostname="https://mydeployment.vercel.app"; curl -s -X POST $hostname/test; echo; curl -s -X GET $hostname/test2; curl -s -X GET $hostname/test3
```
