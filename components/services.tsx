import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, GraduationCap, Settings, Users } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Settings,
    title: "Implementation & Setup",
    description:
      "Seamless CostX deployment tailored to your workflows, regions, and project requirements. We configure the software to match your exact business needs.",
  },
  {
    icon: GraduationCap,
    title: "Training & Onboarding",
    description:
      "Comprehensive training programs for quantity surveyors, estimators, and construction consultants. Master 2D/3D takeoff, BIM integration, and advanced features.",
  },
  {
    icon: Layers,
    title: "Workflow Optimization",
    description:
      "Streamline your estimating processes with custom templates, cost databases, and automated workflows. Reduce rework and improve accuracy across all projects.",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description:
      "Dedicated support to help your team navigate revisions tracking, embodied carbon calculations, and professional reporting. We're here when you need us.",
  },
]

export function Services() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-5xl overflow-hidden rounded-2xl">
          <Image
            src="/professional-team-collaborating-on-construction-pr.jpg"
            alt="Professional team collaborating"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover sm:h-[400px]"
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive CostX Consulting Services
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We help construction professionals leverage RIB CostX to its fullest potential, delivering measurable
            improvements in accuracy and efficiency.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-border bg-card transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
