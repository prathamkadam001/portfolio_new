import { Documentation } from '@/app/components/documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation | Pratham Kadam',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
