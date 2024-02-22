import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'

import { Minus, Plus } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import React from 'react'
import { Access } from './ui/access'
import apps from '../assets/apps.png'
import nodes from '../assets/nodes.png'
import services from '../assets/services.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

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
    <Card className="ml-5 mr-5 w-full">
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
              <div className="text-7xl font-bold tracking-tighter">{nodes}</div>
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
  )
}

const Simplicity = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img src={apps} alt="databases" className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={nodes} alt="nodes" className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={services} alt="services" className="w-full" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const Security = () => {
  return <Access />
}

const features: FeatureProps[] = [
  {
    title: 'Säkerhet genom öppenhet',
    description:
      'Om din verksamhet omfattas av myndighetskrav är chansen stor att du inte får använda tjänster utanför EU. Med vår tjänst kan du också dra nyttan av AI. Vår säkerhet bygger på transparens, öppenhet och stark kryptering. All källkod är öppen vilket gör att den granskas av tusentals utvecklare varje dag.',
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
      'Backup, övervakning, support, utvecklarhjälp, strategi och juridik. Vi har ett stort nätverk av entreprenörer som hjälper dig. Med vårt moln blir du heller inte fastlåst utan kan flytta med dig din data och dina applikationer när du vill.',
    footer: <Flexibility />,
  },
]

const featureList: string[] = [
  'BankID inloggning',
  'Kubernetes',
  'AI-inference',
  'Lokal GPU',
  'GitOps',
  'Öppen källkod',
  'Säkerhet',
  'Kryptering',
  'Övervakning',
  'Backup',
]

export const Features = () => {
  return (
    <section id="features" className="container mb-60 py-14 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Vi tröttnade på att behöva välja mellan{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          säkerhet och enkelhet
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4 pb-14">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        {features.map(({ title, description, footer }: FeatureProps) => (
          <Card key={title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <div className="flex-grow"></div>{' '}
            {/* Add this div to push the footer to the bottom */}
            <CardFooter>{footer}</CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
