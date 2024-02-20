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

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Pricing */}
      <Card className="absolute top-[50px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Testkonto
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
              'Vektordatabas',
              'Obegränsad bandbredd',
              'LLM via Mistral Next',
              'En månads uppsägningstid',
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
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div>
            <CardTitle>Så här kommer du igång</CardTitle>
            {/* prettier-ignore */}
            <code className="whitespace-pre-line rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mt-2">
              $ npm install @berget/cli
              $ berget init my-project
              Login: https://github.com/auth/?return_to=berget.cloud/?token=123
              Cluster created!
              kube.config created.
              Do you want to add to your .gitignore? (Recommended) Y
              $ berget deploy Deploying... Done!
              Visit your project at https://my-project.berget.cloud
            </code>
            <CardDescription className="text-md mt-2">
              Så enkelt kommer du igång med Berget.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
