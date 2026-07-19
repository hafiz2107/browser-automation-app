import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local manually
const envFile = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8");
const getVar = (name) => {
  const line = envFile.split("\n").find((l) => l.startsWith(`${name}=`));
  if (!line) return undefined;
  // Strip surrounding quotes
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "");
};

// Use unpooled URL and strip channel_binding (not supported by HTTP transport)
let dbUrl = getVar("DATABASE_URL_UNPOOLED") || getVar("DATABASE_URL");
if (!dbUrl) {
  console.error("DATABASE_URL not found in .env.local");
  process.exit(1);
}

// Remove channel_binding param (serverless HTTP driver doesn't support it)
const url = new URL(dbUrl);
url.searchParams.delete("channel_binding");
dbUrl = url.toString();

const sql = neon(dbUrl);
const result = await sql`SELECT 1 AS result`;
console.log("✅ Neon connection verified:", result);
