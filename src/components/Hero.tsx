import { Button } from './ui/button'
import { buttonVariants } from './ui/button'
import { HeroCards } from './HeroCards'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Molnet i<br />
            Berget
          </h1>{' '}
        </main>

        <p className="text-muted-foreground md:text-2xl  md:w-10/12 mx-auto lg:mx-0">
          Berget är en molntjänst där AI-lösningar kan köras utan risk för
          dataläckage.
        </p>
        <p className="text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Tjänsten är utformad för organisationer som vill experimentera med
          AI-lösningar men samtidigt följa höga krav på datasäkerhet, exempelvis
          offentlig förvaltning, skola/universitet och finansbranschen. All data
          bevaras i Sverige och Berget är fristående från utländska ägare och
          aktörer.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
            <a href="#cta">Boka demo</a>
          </Button>

          <a
            href="https://github.com/Iteam1337/berget.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: 'outline',
            })}`}
          >
            Bygger på öppen källkod
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  )
}
