import type { NextApiRequest, NextApiResponse } from 'next'
import { CommentData } from '@/core/modules/BlogData'

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<CommentData>
){
    const slug = req.query.slug as string

    const metadata = {
        title: 'Hello World',
        user: 'John Doe',
        github: 'https://github.com',
        date: '2021-01-01',
    }
    const link = 'https://github.com'
    const content = 'This is the content of the comment'
    const DataArray = [{ link: link, metadata: metadata, content: content }, { link: link, metadata: metadata, content: content }]

    res.status(200).json({ code: 200, data: DataArray })
}