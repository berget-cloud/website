import { Radar, AirVent, Gamepad, Italic } from 'lucide-react'
import iteam from '../assets/iteam.svg'
import hybridity from '../assets/hybridity.svg'

interface SponsorProps {
  icon?: JSX.Element
  name: string
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src={iteam} height="26" />,
    name: 'Iteam',
  },
  {
    icon: <img src={hybridity} height="26" />,
    name: 'Hybridity AI',
  },
  {
    name: 'GetGeek',
  },
]

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8">
        Vi som ligger bakom Berget
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            {icon ? (
              <span>{icon}</span>
            ) : (
              <h3 className="text-white text-opacity-60 text-xl">{name}</h3>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
