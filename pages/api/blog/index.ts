import { checkEnvInit } from '@/lib/init'
import { jsonResponse } from '@/lib/utils'

export default async function handler() {
  if (!checkEnvInit()) return jsonResponse(500, { code: 500, message: 'Internal Server Error' })

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

  return jsonResponse(200, data)
}