import { NextResponse } from 'next/server'

/**
 * Returns a Response object with a JSON body
 */
export function jsonResponse(status: number, data: any, init?: ResponseInit) {
  return new NextResponse(JSON.stringify(data), {
    ...init,
    status,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function commonResponse(code: number) {
  switch(code) {
    default:
      return jsonResponse(500, { code: 500, message: 'Internal Server Error' })
    case 404:
      return jsonResponse(404, { code: 404, message: 'Not Found' })
    case 403:
      return jsonResponse(403, { code: 403, message: 'Forbidden' })
    case 401:
      return jsonResponse(401, { code: 401, message: 'Unauthorized' })
    case 400:
      return jsonResponse(400, { code: 400, message: 'Bad Request' })
    case 409:
      return jsonResponse(409, { code: 409, message: 'Conflict' })
    case 410:
      return jsonResponse(410, { code: 410, message: 'Gone' })
    case 405:
      return jsonResponse(405, { code: 405, message: 'Method Not Allowed' })
  }
}