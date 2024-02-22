import { Badge } from './ui/badge'

const compliance: string[] = [
  'GDPR',
  'NIS2',
  'Shrems',
  'ISO27001',
  'DORA direktivet',
]

export const Compliance = () => {
  return (
    <section
      id="compliance"
      className="container mb-60 py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Många regleringar kräver att du tar{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          datafrågorna på allvar
        </span>
      </h2>
      <div className="flex flex-wrap md:justify-center gap-4">
        {compliance.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>
      <p className="text-center">
        Mycket av komplexiteten kring lagstiftningen uppstår inte på grund av
        molntekniken i sig utan på grund av att molnen ofta ägs av utländska
        aktörer och att det är svårt att överblicka vem som potentiellt har
        tillgång till ditt data. Vårt moln körs i Sverige och ägs av svenska
        ägare.
      </p>
    </section>
  )
}
