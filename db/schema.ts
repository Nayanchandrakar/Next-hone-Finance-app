import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
})

export const inserAccountSchema = createInsertSchema(accounts)
