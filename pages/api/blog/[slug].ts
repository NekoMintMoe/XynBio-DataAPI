import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'

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
    content: any
    activity: {
        comments: number
        likes: number
        shares: number
    }
    comments: {
        name: string
        github: string
        comment: string
        date: string
    }[]
  }

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const slug = req.query.slug as string

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
    const comments = [
        {
            name: 'John Doe',
            github: 'https://github.com',
            comment: 'This is a comment',
            date: '2021-01-01'
        },
        {
            name: 'Caffee Dog',
            github: 'https://github.com',
            comment: 'This is a comment',
            date: '2021-01-02'
        }
    ]

    res.status(200).json({ link: link, metadata: metadata, content: content, activity: activity, comments: comments })
}