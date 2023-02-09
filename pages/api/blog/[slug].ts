import type { NextApiRequest } from 'next'

export const config = {
    runtime: 'edge',
}
  
export default async function handler (req: NextApiRequest){

    const { searchParams } = new URL(req.url??'')
    const slug = searchParams.get('slug') as string

    const metadata = {
        title: 'Hello World',
        subtitle: 'This is a subtitle',
        date: '2021-01-01',
        author: 'John Doe',
        keyword: 'hello world',
        slug: slug,
    }
    const link = 'https://github.com'
    const content = 'This is the content of the post'
    const activity = {
        comments: 0,
        likes: 0,
        shares: 0
    }
    const DataArray = { code: 200, data: { link: link, metadata: metadata, content: content, activity: activity } }
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