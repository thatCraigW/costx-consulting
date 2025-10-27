import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-construction-site-with-digital-technology-a.jpg"
          alt="Construction technology background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Expert RIB CostX Consulting Services
          </div>

          <h1 className="font-display text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Maximize Your Estimating Efficiency with CostX
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Professional consulting services to help you unlock the full potential of RIB CostX. From implementation to
            advanced training, we ensure your team achieves error-free results in significantly less time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <a href="mailto:info@costx-consulting.com">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="mailto:info@costx-consulting.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
