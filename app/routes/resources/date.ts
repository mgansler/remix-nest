export type DateLoader = {
  date: Date
}

export async function loader(): Promise<DateLoader> {
  const date = new Date()
  return { date }
}
