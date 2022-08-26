import fs from 'fs/promises'
import path from 'path'

export const getJsonData = async () => {
  const filePath = path.join(process.cwd(), 'utils', 'db.json')
  const db = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(db)
  return data
}
