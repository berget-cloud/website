import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import scaleup from '../assets/scaleup.png'
import { Button } from './ui/button'

import { Minus, Plus } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import React from 'react'
import Shell from './ui/shell'
import { Access } from './ui/access'

interface FeatureProps {
  title: string
  description: string
  footer: JSX.Element
}

const Flexibility = () => {
  const data = [
    {
      nodes: 6,
    },
    {
      nodes: 2,
    },
    {
      nodes: 3,
    },
    {
      nodes: 3,
    },
    {
      nodes: 1,
    },
    {
      nodes: 2,
    },
    {
      nodes: 4,
    },
    {
      nodes: 5,
    },
    {
      nodes: 5,
    },
    {
      nodes: 5,
    },
    {
      nodes: 5,
    },
    {
      nodes: 5,
    },
    {
      nodes: 5,
    },
  ]

  const [nodes, setNodes] = React.useState(data.pop()?.nodes || 5)
  return (
    <CardFooter>
      <Card className="ml-5 mr-5">
        <CardContent>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setNodes((nodes) => nodes - 1)}
                disabled={nodes <= 3}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {nodes}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Nodes
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setNodes((nodes) => nodes + 1)}
                disabled={nodes >= 400}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="nodes"
                    style={
                      {
                        fill: 'hsl(var(--primary))',
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </CardFooter>
  )
}

const Simplicity = () => {
  return (
    <CardFooter>
      <Shell>
        $ helm install chromadb bitnami/chromadb <br />$ helm install redis
        bitnami/redis
      </Shell>
    </CardFooter>
  )
}

const Security = () => {
  return (
    <CardFooter>
      <Access />
    </CardFooter>
  )
}

const features: FeatureProps[] = [
  {
    title: 'Säkerhet genom öppenhet',
    description:
      'Om din verksamhet omfattas av myndighetskrav är chansen stor att du inte får använda tjänster utanför EU. Med vår tjänst kan du också dra nyttan av AI. Vår säkerhet bygger på transparens, öppenhet och stark kryptering. All källkod  är öppen vilket gör att den granskas av tusentals utvecklare varje dag och gör att du inte blir inlåst utan kan flytta med dig din data och dina applikationer när du vill.',
    footer: <Security />,
  },
  {
    title: 'Enkelt att komma igång',
    description:
      'På några minuter har du ett Kuberneteskluster. Där har vi förberett en vektordatabas och lagt nycklar till våra AI-apier. Vi hjälper dig att komma igång och stöttar med allt från strategi till utveckling.',
    footer: <Simplicity />,
  },
  {
    title: 'Flexibelt och utbyggbart',
    description:
      'Backup, övervakning, support, utvecklarhjälp, strategi och juridik. Vi har ett stort nätverk av entreprenörer som hjälper dig.',
    footer: <Flexibility />,
  },
]

const featureList: string[] = [
  'GDPR',
  'NIS2',
  'Shrems',
  'ISO27001',
  'DORA direktivet',
]

export const Features = () => {
  return (
    <section id="features" className="container mb-60 py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Många regleringar kräver att du tar{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          datafrågorna på allvar
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, footer }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            {footer}
          </Card>
        ))}
      </div>
    </section>
  )
}
