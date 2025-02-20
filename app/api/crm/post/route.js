//////////////////////////////////////////////////
// create a new ticket in DB

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic' // force db refrech


export async function POST(request) {
  console.log('API REQUEST: api/tickets/')

  const tickets = await request.json()
  const supabase = createRouteHandlerClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()   // get the current user session
  const {data, error} = await supabase.from('pj_promo_service')  // insert the data in supabase
  .insert({
    ...tickets, // get all info from the form 
    user_email: session.user.email,
    user_id: session.user.id
  })
    .select() // ask back the obj from the DB
    .single() // make it an obj (not an array [{ tiket }])

  return NextResponse.json({data, error}) // send back data to the api call
}