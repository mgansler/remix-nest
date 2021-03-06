import { User } from '@prisma/client'
import { Link, useLoaderData } from '@remix-run/react'
import DateTime from '~/shared/DateTime'
import Square from '~/shared/Square'
import { db } from '~/utils/db.server'

type LoaderData = {
  users: User[]
}

export async function loader(): Promise<LoaderData> {
  const users = await db.user.findMany()
  return { users }
}

export default function Users() {
  const { users } = useLoaderData<LoaderData>()

  return (
    <div>
      <h2>Users</h2>
      <DateTime />
      <Square />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
