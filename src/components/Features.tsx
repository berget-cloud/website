import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import image from '../assets/growth.png'
import image3 from '../assets/reflecting.png'
import image4 from '../assets/looking-ahead.png'

interface FeatureProps {
  title: string
  description: string
  image: string
}

const features: FeatureProps[] = [
  {
    title: 'Säkerhet genom öppenhet',
    description:
      'Om din verksamhet omfattas av myndighetskrav är chansen stor att du inte får använda tjänster utanför EU. Med vår tjänst kan du också dra nyttan av AI. Vår säkerhet bygger på transparens, öppenhet och stark kryptering. All källkod  är öppen vilket gör att den granskas av tusentals utvecklare varje dag.',
    image: image4,
  },
  {
    title: 'Enkelt att komma igång',
    description:
      'På några minuter har du ett Kuberneteskluster. Där har vi förberett en vektordatabas och lagt nycklar till våra AI-apier. Vi hjälper dig att komma igång och stöttar med allt från strategi till utveckling.',
    image: image3,
  },
  {
    title: 'Flexibelt och utbyggbart',
    description:
      'Backup, övervakning, support, utvecklarhjälp, strategi och juridik. Vi har ett stort nätverk av entreprenörer som hjälper dig.',
    image: image,
  },
]

const featureList: string[] = [
  'Säkert',
  'Enkelt',
  'Flexibelt',
  'Grön el',
  'GDPR kompatibelt',
]

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        AI kräver{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          att du tar datafrågorna på allvar
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
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
