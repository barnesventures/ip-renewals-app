import type { VercelRequest, VercelResponse } from '@vercel/node'
import jwt from 'jsonwebtoken'
import { neon } from '@neondatabase/serverless'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const token = req.headers.authorization?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    
    const sql = neon(process.env.DATABASE_URL!)
    
    // Get user from database
    const users = await sql`
      SELECT id, email, name, is_operator 
      FROM users 
      WHERE id = ${decoded.id}
    `

    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }

    const user = users[0]

    // Return user data
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      isOperator: user.is_operator
    })
  } catch (error) {
    console.error('Auth check error:', error)
    res.status(401).json({ message: 'Invalid token' })
  }
}