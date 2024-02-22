import { Button } from './ui/button'
import { Input } from './ui/input'

export const Cta = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href =
      'mailto:christian@iteam.se?subject=Boka%20demo%20om%20Berget'
  }

  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Vill du vara en av våra första kunder?
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {' '}
              Boka ett möte{' '}
            </span>
            så visar vi hur Berget fungerar och sätter upp ett testkonto.
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Lanseringen till allmänheten sker under Q2 2024 men har redan nu
            kunder i vårt moln, eller förlåt berg.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <form onSubmit={handleFormSubmit}>
            <Button type="submit" className="w-full md:mr-4 md:w-auto">
              Boka demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
