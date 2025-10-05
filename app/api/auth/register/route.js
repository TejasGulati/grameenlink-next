import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const userData = await request.json()
    
    // Mock registration - replace with real auth logic
    if (userData.email && userData.password && userData.name) {
      const user = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        plan: userData.plan || 'basic',
        accountType: userData.accountType || 'basic'
      }
      
      return NextResponse.json({ success: true, user })
    }
    
    return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 })
  }
}