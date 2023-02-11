// Path: lib\auth.ts
import { SignJWT, jwtVerify } from 'jose'

// SignJWT using jose kit
export const signJWT = async (payload: any) => {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET))
  return jwt
}

// Verify JWT using jose kit
export const verifyJWT = async (token: string) => {
    try {
        const deJWT = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
        return deJWT
    } catch (error) {
        return false
    }
}