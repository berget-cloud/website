import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import christian from '../assets/christian_landgren.jpg'
import robert from '../assets/robert_lyngman.jpg'
import john from '../assets/john_angelmo.jpg'

interface TeamProps {
  imageUrl: string
  name: string
  email: string
  position: string
  socialNetworks: SociaNetworkslProps[]
}

interface SociaNetworkslProps {
  name: string
  url: string
}

const teamList: TeamProps[] = [
  {
    imageUrl: christian,
    name: 'Christian Landgren',
    position: 'VD',
    email: 'christian.landgren@iteam.se',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com/in/christianlandgren' },
      {
        name: 'Twitter',
        url: 'https://www.x.com/landgren',
      },
    ],
  },
  {
    imageUrl: john,
    name: 'John Angelmo',
    email: 'john@getgeek.se',
    position: 'Infrastruktur',
    socialNetworks: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/angelmo' },
      {
        name: 'Twitter',
        url: 'https://twitter.com/veidit',
      },
    ],
  },
  {
    imageUrl: robert,
    name: 'Robert Lyngman',
    email: 'robert@hybridity.ai',
    position: 'Juridik',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },

      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
      },
    ],
  },
]

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size="20" />

      case 'Facebook':
        return <Facebook size="20" />

      case 'Instagram':
        return <Instagram size="20" />
      case 'Twitter':
        return <Twitter size="20" />
    }
  }

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Vi som bygger{' '}
        </span>
        BERGET
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Vi har lång erfarenhet inom säkerhet, AI, mjukvaruutveckling och
        juridik.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ name, imageUrl, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  )
}
