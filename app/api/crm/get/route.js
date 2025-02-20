//////////////////////////////////////////////////
// create a new contact in Hubspot

import {NextResponse} from 'next/server'

export async function GET() {
  return NextResponse.json({message: 'hello world my server!', success: true})
}
