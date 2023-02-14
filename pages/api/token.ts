// GenerateJWT and VerifyJWT
import { genJWT, signJWT, verifyJWT } from "@/lib/auth";
import { checkEnvInit } from "@/lib/init";
import { jsonResponse } from "@/lib/utils";
import { NextRequest } from "next/server";

export default async function handler(req: NextRequest) {
    if (!checkEnvInit()) return jsonResponse(500, { code: 500, message: 'Internal Server Error' })
    if (req.method != "POST") return jsonResponse(405, { code: "405", message: "Method Not Allowed" })

    const auth = req.headers.get("Authorization")?.replace("Bearer ", "") || ""

    if (!auth) return jsonResponse(401, { code: "401", message: "Unauthorized" })
    if (await verifyJWT(auth) != "valid") return jsonResponse(401, { code: "401", message: "Unauthorized" })

    const data = genJWT("XynBio-Next", "Generate JWT", "api")
    const jwt = await signJWT(data, "1h");
    return jsonResponse(200, { data: data, jwt: jwt });
}