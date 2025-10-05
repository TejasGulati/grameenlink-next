import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    // Mock authentication - replace with real auth logic
    if (email && password) {
      const user = {
        id: '1',
        name: 'Test User',
        email: email,
        plan: 'enterprise', // or 'basic'
        accountType: 'enterprise'
      }
      
      return NextResponse.json({ success: true, user })
    }
    
    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 })
  }
}