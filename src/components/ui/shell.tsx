import { ReactNode } from 'react'
import { Card } from './card'

const Shell = ({ children }: { children: ReactNode }) => {
  return (
    <Card className=" mt-10 mb-5 text-primary font-mono text-sm p-4 rounded-lg whitespace-pre overflow-x-auto">
      {children}
    </Card>
  )
}

export default Shell
