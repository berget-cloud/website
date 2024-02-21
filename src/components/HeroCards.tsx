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
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute w-[350px] -left-[40px] top-[90px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div>
            <CardTitle>Enkelt att komma igång</CardTitle>
            {/* prettier-ignore */}
            <Shell>
              $ npm i -g @berget/cli<br/>
              $ berget login<br />
              ...<br />
              $ berget create cluster<br/>
              ✅ DNS ideal-palmtree.berget.cloud<br />
              $ berget apply -f deployment.yaml<br/>
            </Shell>
            <CardDescription className="text-md mt-2">
              Nu är ditt kluster redo att användas. Skapa ett namespace och
              börja köra dina applikationer. Tips: använd fluxcd för att
              automatiskt hålla klustret uppdaterat.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Pricing */}
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

      {/* Service */}
    </div>
  )
}
