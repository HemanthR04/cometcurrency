import { auth } from '@/auth'
import { SignOut } from '@/components/ui/sign-out'
import React from 'react'

const page = async () => {
    const session = await auth()
  if (!session) return <div>Not authenticated</div>
 
  return (
    <div>
      Home
      <SignOut />
    </div>
  )
}

export default page
