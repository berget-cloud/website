import { Radar, AirVent, Gamepad, Italic } from 'lucide-react'
import iteam from '../assets/iteam.png'

interface SponsorProps {
  icon: JSX.Element
  name: string
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src={iteam} width={34} height={34} />,
    name: 'Iteam',
  },
  {
    icon: <AirVent size={34} />,
    name: 'Hybridity AI',
  },
  {
    icon: <Gamepad size={34} />,
    name: 'GetGeek',
  },
]

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Vi som ligger bakom Berget
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
