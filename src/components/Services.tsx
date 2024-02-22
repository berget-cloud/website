import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

import mistral from '../assets/mistral.png'
import llama from '../assets/llama.png'
import aiSweden from '../assets/ai-sweden.png'
import huggingface from '../assets/huggingface.png'

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
    title: 'Mistral Next',
    description:
      'Senaste modellen som släppts. Finns tillgänlig vid lansering. Förstår svenska.',
    swedish: true,
    launch: true,
    icon: <img src={mistral} className="w-24" />,
  },
  {
    title: 'Mistral Medium',
    description:
      'Jämförbar med GPT-4. Finns tillgänlig vid lansering. Förstår svenska.',
    swedish: true,
    launch: true,
    icon: <img src={mistral} className="w-24" />,
  },
  {
    title: 'Mistral 8x7B',
    description: 'Snabb. Finns tillgänlig vid lansering. Förstår svenska.',
    swedish: true,
    launch: true,
    icon: <img src={mistral} className="w-24" />,
  },
  {
    title: 'Mistral 7B',
    description: 'Supersnabb. Finns tillgänlig vid lansering. Förstår svenska.',
    swedish: true,
    launch: true,
    icon: <img src={mistral} className="w-24" />,
  },
  {
    title: 'GPT-SW3',
    description: 'Tränad på nordiska språken. Kommer under våren. Svenska.',
    swedish: true,
    launch: false,
    icon: <img src={aiSweden} className="w-24" />,
  },
  {
    title: 'CodeLlama 70B',
    description: 'Bra på att programmera. Kommer under våren.',
    launch: false,
    icon: <img src={llama} className="w-24" />,
  },
  {
    title: 'Valfri modell',
    description: 'Välj och vraka hos Huggingface. Kommer i höst.',
    launch: false,
    icon: <img src={huggingface} className="w-24" />,
  },
]

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              AI-modeller{' '}
            </span>
            du kan använda
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Dessa LLM-modeller finns tillgängliga för dig att använda. API
            nycklar skapas automatiskt och du betalar per token. OpenAI
            kompatibelt API.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
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
                    {swedish && <span className="text-primary">Svenska</span>}
                  </CardHeader>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
