import { useEffect, useState } from 'react'
import { DateLoader } from '~/routes/resources/date'

export default function DateTime() {
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    fetch('/resources/date').then(async (resp) => {
      const { date } = (await resp.json()) as DateLoader
      setDate(new Date(date))
    })
  }, [])

  return <div>{date?.toLocaleDateString()}</div>
}
