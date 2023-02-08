import type { NextApiRequest, NextApiResponse } from 'next'
import { HelloData } from '@/core/modules/HelloData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloData>
) {
  res.status(200).json({ text: 'Hello World!' })
}
