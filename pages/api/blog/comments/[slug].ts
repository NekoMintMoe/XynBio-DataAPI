import type { NextApiRequest } from 'next'

export const config = {
    runtime: 'edge',
}

export default async function handler (req: NextApiRequest){

    const { searchParams } = new URL(req.url??'')
    const slug = searchParams.get('slug') as string

    const metadata = {
        title: 'Hello World',
        user: 'John Doe',
        github: 'https://github.com',
        date: '2021-01-01',
    }
    const link = 'https://github.com'
    const content = 'This is the content of the comment'
    const DataArray = [{ link: link, metadata: metadata, content: content }, { link: link, metadata: metadata, content: content }]
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