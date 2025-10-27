import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">CostX Consulting</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Expert consulting services for RIB CostX software implementation, training, and optimization.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Implementation & Setup</li>
              <li>Training & Onboarding</li>
              <li>Workflow Optimization</li>
              <li>Ongoing Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@costx-consulting.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact for consultation
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CostX Consulting. Independent consulting services for RIB CostX software.</p>
          <p className="mt-2 text-xs">
            CostX is a registered trademark of RIB Software. We are an independent consulting firm specializing in RIB
            CostX implementation and training.
          </p>
        </div>
      </div>
    </footer>
  )
}
