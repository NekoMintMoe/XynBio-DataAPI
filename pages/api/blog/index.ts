import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  link: string
  metadata: {
    title: string
    subtitle: string
    date: string
    author: string
    keyword: string
    slug: string
  }
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

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

  res.status(200).json(DataArray)
}