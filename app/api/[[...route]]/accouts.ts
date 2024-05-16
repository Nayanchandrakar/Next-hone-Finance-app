import { Hono } from "hono"
import { db } from "@/db/drizzle"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"
import { accounts, inserAccountSchema } from "@/db/schema"
import { zValidator } from "@hono/zod-validator"
import { eq } from "drizzle-orm"
import { createId } from "@paralleldrive/cuid2"

const app = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c)

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401)
    }

    const data = await db
      ?.select({
        id: accounts.id,
        name: accounts.name,
      })
      .from(accounts)
      .where(eq(accounts.userId, auth.userId))

    return c.json({ data })
  })
  .post(
    "/",
    zValidator(
      "json",
      inserAccountSchema.pick({
        name: true,
      })
    ),
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c)
      const { name } = c.req.valid("json")

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401)
      }

      const [data] = await db
        ?.insert(accounts)
        .values({
          id: createId(),
          name,
          userId: auth.userId,
        })
        .returning()

      return c.json({ data })
    }
  )

export default app
