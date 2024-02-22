import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQProps {
  question: string
  answer: string
  value: string
}

const FAQList: FAQProps[] = [
  {
    question: 'Körs allt i Sverige?',
    answer: 'Ja, din applikation körs i säkert i datacenter i Sverige. ',
    value: 'item-1',
  },
  {
    question: 'Hur bra är modellerna?',
    answer:
      'Alla modeller vi kör är open source. Det betyder att de än så länge inte är lika bra som propreitära lösningar, t ex från OpenAI eller Google men avståndet blir mindre för varje vecka som går. Vi har också en modell som är tränad på svenska som är väldigt bra på svenska texter. Vi kallar den GPT-SW3. Den är tränad på nordiska språk och kommer att släppas under våren 2024',
    value: 'item-2',
  },
  {
    question:
      'Får man tillgång till ett helt Kubernetskluster eller ett namespace i ett delat?',
    answer:
      'Ja, all din data sparas i ett separat kuberneteskluster för dig och dina utvecklare. Du får automatiskt en domänadress pekad på ditt kluster. Denna adress kan du använda dig av för att testa men också peka andra applikationer på. Ingen data delas med andra kunder och du har ett eget nätverk för dina applikationer.',
    value: 'item-3',
  },
  {
    question:
      'Hur ställer jag in så att min kod automatiskt skickas till Berget?',
    answer:
      'Bästa sättet är att installera FluxCD - den kan lyssna på ändringar i Github och hämta nya versioner av din kod och uppdatera automatiskt. Det är enligt vår erfarenhet det bästa sättet att uppnå en bra driftsäkerhet och att alltid ha den senaste versionen av din kod i drift.',
    value: 'item-4',
  },
]

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Vanliga frågor{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          och svar
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Fler frågor?{' '}
        <a
          href="#cta"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Kontakta oss
        </a>
      </h3>
    </section>
  )
}
