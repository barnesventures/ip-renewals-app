import type { VercelRequest, VercelResponse } from '@vercel/node'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { neon } from '@neondatabase/serverless'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    
    // Get user from database
    const users = await sql`
      SELECT id, email, name, password_hash, is_operator 
      FROM users 
      WHERE email = ${email}
    `

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const user = users[0]
    
    // Verify password
    const validPassword = await bcrypt.compare(password, user.password_hash)
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email,
        isOperator: user.is_operator 
      },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )

    // Return user data and token
    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isOperator: user.is_operator
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}