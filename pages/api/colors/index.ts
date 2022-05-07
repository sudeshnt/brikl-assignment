// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ColorData, ColorTypes } from '../../../types/color-types'
import { generateColors } from '../../../utils/api-utils'

export default function getColors(
  req: NextApiRequest,
  res: NextApiResponse<ColorData>
) {
  const { count, colorTypes } = req.query
  const types = typeof colorTypes === 'string' ? colorTypes.split(',') : []
  try {
    res.status(200).json({
      colors: generateColors(+count, <Array<ColorTypes>> types)
    })
  } catch (err) {
    console.error(err)
  }
}
