import { config } from "dotenv";
config({ path: ".env.local" });

import { defineConfig } from "drizzle-kit";


const migrationUrl = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED

if (!migrationUrl) {
    throw new Error("DATABASE_URL or DATABASE_URL_UNPOOLED is not set in .env.local");
}

export default defineConfig({
    schema: "./lib/db/schema.ts",
    out: "./lib/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: migrationUrl,
    },
    casing: 'snake_case',
    verbose: true,
    strict: true
});
