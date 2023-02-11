// GenerateJWT and VerifyJWT
import { signJWT, verifyJWT } from "@/lib/auth";
import { jsonResponse } from "@/lib/utils";
import { NextApiRequest } from "next";

export default async function handler(req: NextApiRequest) {
    if (req.method === "POST") {
        const jwt = await signJWT({ issuer: process.env.DATA_API_URL, audience: "XynBio-Next", scope: "api" });
        console.log(await verifyJWT(jwt));
        return jsonResponse(200, { jwt: jwt });
    }
    return jsonResponse(405, { code: "405", message: "Method Not Allowed" });
}