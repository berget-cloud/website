import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Check, Linkedin } from 'lucide-react'
import { LightBulbIcon } from './Icons'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Shell, { Code } from './ui/shell'
export const HeroCards = () => {
  return (
    <div className="hidden lg:flex justify-center flex-row flex-wrap gap-8 relative w-[700px]">
      <Card className=" w-[450px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-red">
        <CardHeader className="space-y-1 flex md:flex-row  items-start gap-4">
          <div>
            <CardTitle>Av utvecklare för utvecklare</CardTitle>
            <CardDescription>
              <Shell>
                $ npm i -g @berget/cli
                <br />
                $ berget login
                <br />
                ... loggar in med BankID ...
                <br />
                $ berget create cluster
                <br />
                Done!
                <br />
                Assigned DNS: ideal-palmtree.berget.cloud
              </Shell>
              <p className="text-lg mt-2">
                Nu är ditt kluster redo att användas. Nu kan du börja köra dina
                applikationer. Du kan peka ett CNAME till klustret.
              </p>
              <Shell>$ berget apply -f deployment.yaml</Shell>
              <p>
                Tips: använd fluxcd för att automatiskt hålla klustret
                uppdaterat.
              </p>
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Pricing 
      <Card className="absolute top-[250px] right-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Kluster 5 noder
            <Badge variant="secondary" className="text-sm text-primary">
              Kom igång
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">10 000kr</span>
            <span className="text-muted-foreground"> /mån</span>
          </div>

          <CardDescription>Allt du behöver för att komma igång</CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Skapa testkonto</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              'Kuberneteskluster',
              'Lokal AI via Mistral',
              'Vektordatabas',
              'Obegränsad bandbredd',
              'PUB avtal',
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{' '}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
      */}

      {/* Service */}
    </div>
  )
}
