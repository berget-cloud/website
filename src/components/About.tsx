import { Statistics } from './Statistics'
import pilot from '../assets/rack.jpg'

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Om{' '}
                </span>
                Berget
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Berget är en tjänst köra och bygga AI-applikationer i din egen
                miljö utan att utsätta din data för risker. Vi erbjuder flera
                olika AI-modeller som kan köras direkt på ditt data utan att
                behöva lämna din infrastruktur. Vi är en svensk startup som har
                som mål att göra AI tillgängligt för alla - inte bara de som
                vågar riskera att skicka sin data till stora molnleverantörer.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  )
}
