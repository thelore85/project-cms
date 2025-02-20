import {NextRequest, NextResponse} from 'next/server'

const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN
const ADD_URL = 'https://api.hubapi.com/crm/v3/objects/contacts'

export async function POST(req: NextRequest) {
  try {
    const {email} = await req.json()

    if (!email) {
      return NextResponse.json({error: 'Email is required'}, {status: 400})
    }

    const response = await fetch(ADD_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {email},
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json({error: errorData}, {status: response.status})
    }

    const data = await response.json()
    return NextResponse.json({success: true, contact: data}, {status: 201})
  } catch (error) {
    return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
  }
}
