// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createInterest } from 'lib/data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  if (!email) return res.status(400).send('No email')

  await createInterest(email)

  res.json({
    ok: true,
  })
}
