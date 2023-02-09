import type { NextApiRequest } from 'next'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextApiRequest) {
  return new Response(
    JSON.stringify({ text: 'Hello World!' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}
