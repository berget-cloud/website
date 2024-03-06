import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import catry from '@/assets/andre_catry.jpg'
import jim from '@/assets/jim_runsten.jpg'
import amel from '@/assets/ann-marie-lowinder.jpg'

interface TestimonialProps {
  image: string
  name: string
  title: string
  comment: string
}

const testimonials: TestimonialProps[] = [
  {
    image: jim,
    name: 'Jim Runsten',
    title: 'VD Synch Advokat AB',
    comment:
      'Med en svensk molnleverantör minskar det administrativa arbetet och den regulatoriska risken då det inte sker någon tredjelandsöverföring och man behöver därmed inte hålla sig ajour med utvecklingen inom regelverket för tredjelandsöverföring, adekvansbeslut och/eller göra konsekvensbedömningar för tredjelandsöverföringar. Vidare får men en leverantör som har att uppfylla samma lagstiftning som är eller blir tillämplig på en själv och således rimligtvis kommer en hel del av dokumentation tas fram av leverantören på ett sätt som redan är anpassat för svenska förhållanden.',
  },
  {
    image: amel,
    name: 'Ann-Marie Eklund Löwinder',
    title: 'en av Sveriges ledande experter på IT-säkerhet',
    comment:
      'Bergets approach med återanvänd hårdvara är smart både ur ett hållbarhets- och ett säkerhetsperspektiv. Genom att bygga systemet med utgångspunkten att saker kan gå sönder minskar sårbarheten. Många av dagens cyberangrepp utnyttjar det faktum att många servrar står orörda för länge utan viktiga säkerhetsuppdateringar.',
  },
  {
    image: catry,
    name: 'André Catry',
    title:
      'Senior Advisor inom IT-/informationssäkerhet och cyberrisk, Advokatfirman Kahn Pedersen',
    comment:
      'Data är idag en av de mest värdefulla tillgångar som existerar. Det är ett rimligt affärsbeslut att träna AI modeller i tjänster som inte utnyttjar ditt data för att träna någon annans modeller.',
  },
  /*
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    title: '@john_Doe3',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    title: '@john_Doe4',
    comment:
      'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    title: '@john_Doe5',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },*/
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Varför behövs
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {' '}
          Berget?{' '}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Vi har frågat några av Sveriges främsta experter inom juridik och
        datasäkerhet om varför det behövs en svensk molntjänst för AI och
        hantering av känslig data.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, title, comment }: TestimonialProps) => (
            <Card
              key={title}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{title}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  )
}
