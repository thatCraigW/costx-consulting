import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Transform Your Estimating Process?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/90">
            Let's discuss how we can help you implement CostX effectively and train your team to achieve error-free
            results in less time.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="group w-full sm:w-auto" asChild>
              <a href="mailto:info@costx-consulting.com">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
