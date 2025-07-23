import type { VercelRequest, VercelResponse } from '@vercel/node'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { neon } from '@neondatabase/serverless'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password, name } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Email, password, and name are required' })
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    
    // Check if user already exists
    const existingUsers = await sql`
      SELECT id FROM users WHERE email = ${email}
    `

    if (existingUsers.length > 0) {
      return res.status(409).json({ message: 'User with this email already exists' })
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Create new user
    const newUsers = await sql`
      INSERT INTO users (email, name, password_hash, is_operator, created_at)
      VALUES (${email}, ${name}, ${passwordHash}, false, NOW())
      RETURNING id, email, name, is_operator
    `

    const user = newUsers[0]

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
    res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isOperator: user.is_operator
      }
    })
  } catch (error) {
    console.error('Signup error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}