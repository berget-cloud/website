import { LogoIcon } from './Icons'

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex">
            <LogoIcon />
            <span className="ml-2">Berget.cloud</span>
          </a>
          <p className="mt-4 text-muted-foreground">
            Götgatan 18, 118 46 Stockholm
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Web
            </a>
          </div>

          <div>
            <a
              href="https://cloud.iteam.services"
              className="opacity-60 hover:opacity-100"
            >
              Berget Console
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Om oss</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Features
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Pricing
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024{' '}
          <a
            target="_blank"
            href="https://github.com/berget-cloud"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Molnet i Berget AB
          </a>
        </h3>
      </section>
    </footer>
  )
}
