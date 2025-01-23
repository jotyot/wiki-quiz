"use server";

import { sql } from "@vercel/postgres";

export async function createRoom() {
  const { rows } =
    await sql`INSERT INTO public.rooms (id) VALUES (gen_random_uuid()) RETURNING id`;
  return rows[0].id;
}
