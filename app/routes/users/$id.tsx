import { User } from '@prisma/client'
import { useLoaderData } from '@remix-run/react'
import { db } from '~/utils/db.server'

export async function loader({ params }): Promise<User> {
  const user = db.user.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  return user
}

export default function () {
  const user = useLoaderData<User>()

  return (
    <div>User: {user?.name}</div>
  )
}
