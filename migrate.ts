import { migrate } from "drizzle-orm/neon-http/migrator"
import { db } from "@/db/drizzle"

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "./db/migrations" })
    console.log("Migration Successful")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
