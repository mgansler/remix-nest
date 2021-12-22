import { useFetcher } from '@remix-run/react'

export default function Square() {
  const squareFetcher = useFetcher()
  if (squareFetcher.type === 'init') {
    squareFetcher.load(`/resources/square/5`)
  }

  return squareFetcher.type === 'done' ? (
    <div>{squareFetcher.data}</div>
  ) : (
    <div>{squareFetcher.state}</div>
  )
}
