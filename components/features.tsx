import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const capabilities = [
  {
    category: "Takeoff & Estimating",
    features: [
      "2D takeoff from PDFs, CAD, and scanned drawings",
      "3D/BIM support for IFC and other model formats",
      "Live-linked workbooks with cost databases",
      "Auto-revisioning and design change tracking",
    ],
  },
  {
    category: "Advanced Features",
    features: [
      "Embodied carbon calculations (6D BIM)",
      "Subcontractor comparison and bid management",
      "Professional client-ready reports",
      "REST API integration with ERP/CRM systems",
    ],
  },
  {
    category: "Collaboration",
    features: [
      "Real-time team collaboration",
      "Multi-tab functionality for efficiency",
      "Cloud deployment options",
      "Audit trails and transparency",
    ],
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            RIB CostX Expertise
          </Badge>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Master Every CostX Capability
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We provide expert guidance on all CostX features to help you deliver accurate estimates faster than
            traditional methods.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.category} className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">{capability.category}</h3>
              <ul className="space-y-3">
                {capability.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/modern-bim-3d-building-model-on-computer-screen-wi.jpg"
              alt="BIM 3D modeling"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/construction-cost-estimation-software-dashboard-wi.jpg"
              alt="Cost estimation dashboard"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
