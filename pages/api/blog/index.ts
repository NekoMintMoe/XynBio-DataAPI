import type { NextApiRequest } from 'next'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextApiRequest) {

  const metadata = {
    title: 'Hello World',
    subtitle: 'This is a subtitle',
    date: '2021-01-01',
    author: 'John Doe',
    keyword: 'hello world',
    slug: 'hello-world',
  }
  const link = 'https://github.com'
  const DataArray = [{ link: link, metadata: metadata }, { link: link, metadata: metadata }]
  const data = {
    code: 200,
    data: DataArray
  }

  return new Response(
    JSON.stringify(data),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}