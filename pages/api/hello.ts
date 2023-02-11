import { jsonResponse } from '@/lib/utils'

export default async function handler() {
  return jsonResponse(200, { text: 'Hello World!' })
}
