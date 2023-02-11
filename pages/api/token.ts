// GenerateJWT and VerifyJWT
import { signJWT, verifyJWT } from "@/lib/auth";
import { jsonResponse } from "@/lib/utils";
import { NextRequest } from "next/server";

export default async function handler(req: NextRequest) {
    if (req.method != "POST") {
        return jsonResponse(405, { code: "405", message: "Method Not Allowed" });
    }

    const auth = req.headers.get("Authorization")?.replace("Bearer ", "") || ""
    if (!auth) {
        return jsonResponse(401, { code: "401", message: "Unauthorized" });
    }
    console.log(auth)
    if (await verifyJWT(auth) != "valid") {
        return jsonResponse(401, { code: "401", message: "Unauthorized" });
    }

    const jwt = await signJWT({ issuer: process.env.DATA_API_URL, audience: "XynBio-Next", scope: "api" }, "1h");
    return jsonResponse(200, { jwt: jwt });
}