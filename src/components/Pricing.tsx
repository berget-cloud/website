import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string
  popular: PopularPlanType
  price?: number
  description: string
  buttonText: string
  benefitList: string[]
}

const pricingList: PricingProps[] = [
  {
    title: 'Open Source projekt',
    popular: 0,
    price: 0,
    description: 'Vi vill stötta alla projekt som har sin kod öppen för andra.',
    buttonText: 'Get Started',
    benefitList: [
      '3 teammedlemmar',
      '10 GB lagring',
      '4 GB minne',
      '2 noder i klustret',
      'BankID inloggning',
      'Ingen support',
    ],
  },
  {
    title: 'Företag',
    popular: 1,
    price: 10_000,
    description: 'Säker miljö för din AI-applikation.',
    buttonText: 'Start Free Trial',
    benefitList: [
      'Obegränsat antal teammedlemmar',
      'Upp till 2 TB lagring',
      'Support på svenska',
      '5 noder i klustret',
      'BankID inloggning',
      '2 500 kr i tokens för våra AI',
    ],
  },
  {
    title: 'Myndigheter och enterprise',
    popular: 0,
    price: undefined,
    description: 'Vi skräddarsyr en lösning för er.',
    buttonText: 'Kontakta oss',
    benefitList: [
      'Obegränsat antal teammedlemmar',
      'Upp till X TB lagring',
      'Support på svenska',
      'X noder i klustret',
      'BankID inloggning',
      'X kr i tokens för våra AI',
    ],
  },
]

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Enkla
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {' '}
          priser{' '}
        </span>
        för alla storlekar
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Billigare än on-prem men dyrare än de stora molnen.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                : ''
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                {!pricing.price ? (
                  <span className="text-3xl font-bold">Kontakta oss</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold">
                      {pricing.price.toLocaleString('sv-se')} kr
                    </span>
                    <span className="text-muted-foreground"> /månad</span>
                  </>
                )}
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{' '}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
