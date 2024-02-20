import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { MagnifierIcon, WalletIcon, ChartIcon } from './Icons'
import cubeLeg from '../assets/cube-leg.png'

interface ServiceProps {
  title: string
  description: string
  launch: boolean
  swedish?: boolean
  icon: JSX.Element
}

/*

Namn	Fördel	Släpps	Förstår svenska?
Mistral 8x7B	Snabb	Vid lansering	✅
Mistral Medium	Jämförbar med GPT-4	Vid lansering	✅
Mistral 7B	Supersnabb	Vid lansering	
GPT-SW3	Tränad på nordiska språken	Kommer under våren	✅
CodeLlama 70B	Bra på att programmera	Kommer under våren	
Valfri modell	Välj och vraka hos Huggingface	Kommer i höst	
*/

const serviceList: ServiceProps[] = [
  {
    title: 'Mistral Medium',
    description: 'Jämförbar med GPT-4. Vid lansering. Förstår svenska.',
    swedish: true,
    launch: true,
    icon: <ChartIcon />,
  },
  {
    title: 'Mistral 8x7B',
    description: 'Snabb. Vid lansering. Förstår svenska.',
    swedish: true,
    launch: true,
    icon: <WalletIcon />,
  },
  {
    title: 'Mistral 7B',
    description: 'Supersnabb. Vid lansering. Förstår svenska.',
    swedish: true,
    launch: true,
    icon: <MagnifierIcon />,
  },
  {
    title: 'GPT-SW3',
    description:
      'Tränad på nordiska språken. Kommer under våren. Förstår svenska.',
    swedish: true,
    launch: false,
    icon: <ChartIcon />,
  },
  {
    title: 'CodeLlama 70B',
    description: 'Bra på att programmera. Kommer under våren.',
    launch: false,
    icon: <WalletIcon />,
  },
  {
    title: 'Valfri modell',
    description: 'Välj och vraka hos Huggingface. Kommer i höst.',
    launch: false,
    icon: <MagnifierIcon />,
  },
]

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              LLM Modeller{' '}
            </span>
            som ingår
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Dessa LLM-modeller finns tillgängliga för dig att använda. API
            nycklar ingår med obegränsad användning. OpenAI kompatibelt API.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(
              ({ icon, title, description, swedish }: ServiceProps) => (
                <Card key={title}>
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                      {icon}
                    </div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="text-md mt-2">
                        {description}
                      </CardDescription>
                    </div>
                    <div className="flex-grow"></div>
                    {swedish && (
                      <span className="text-primary">🇸🇪 Förstår svenska</span>
                    )}
                  </CardHeader>
                </Card>
              )
            )}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  )
}
