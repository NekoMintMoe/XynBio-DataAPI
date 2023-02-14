import { checkEnvInit } from '@/lib/init'
import { jsonResponse } from '@/lib/utils'

export default async function handler() {
  if (!checkEnvInit()) return jsonResponse(500, { code: "500", message: 'Internal Server Error' })
  return jsonResponse(200, { text: 'Hello World!' })
}
