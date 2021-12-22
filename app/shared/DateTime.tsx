import { useFetcher } from '@remix-run/react'

export default function DateTime() {
  const dateFetcher = useFetcher()
  if (dateFetcher.type === 'init') {
    dateFetcher.load('/resources/date')
  }

  return dateFetcher.type === 'done' ? (
    <div>{new Date(dateFetcher.data.date).toLocaleDateString()}</div>
  ) : (
    <div>{dateFetcher.state}</div>
  )
}
