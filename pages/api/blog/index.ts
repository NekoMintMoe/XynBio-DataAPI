import type { NextApiRequest, NextApiResponse } from 'next'
import { ListData } from '@/core/modules/BlogData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListData>
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

  res.status(200).json({ code: 200, data: DataArray })
}