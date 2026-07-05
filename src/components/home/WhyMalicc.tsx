import {
  Badge,
  Button,
  Section,
  SectionHeading,
} from "../ui";

import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  ShoppingBag,
  Users,
} from "lucide-react";

const capabilities = [
  {
    title: "Commerce",
    description:
      "Launch and scale your online business from a single platform.",
    icon: ShoppingBag,
  },
  {
    title: "Growth",
    description:
      "Capture leads, nurture prospects, and accelerate customer acquisition.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Sales",
    description:
      "Empower your sales team with AI-assisted workflows and automation.",
    icon: Users,
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI isn't an add-on. It's built into every product.",
    icon: BrainCircuit,
  },
];

export default function WhyMalicc() {
  return (
    <Section>

      <SectionHeading
        eyebrow="Why Malicc"
        title="One ecosystem instead of disconnected tools."
        description="Run commerce, marketing, sales, and AI from a unified platform designed to work together from day one."
        align="center"
      />

      <div className="mt-20 grid gap-16 lg:grid-cols-2">

        {/* Left */}

        <div>

          <Badge>
            Built for modern businesses
          </Badge>

          <h3 className="mt-6 text-4xl font-bold leading-tight">
            Stop stitching software together.
          </h3>

          <p className="mt-6 text-lg text-secondary leading-8">
            Businesses often juggle multiple platforms for commerce,
            marketing, sales, analytics, and automation.
          </p>

          <p className="mt-4 text-lg text-secondary leading-8">
            Malicc brings these capabilities together into one
            connected ecosystem where every product works
            seamlessly with the others.
          </p>

          <div className="mt-10">
            <Button href="/products">
              Explore the Platform
            </Button>
          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6 sm:grid-cols-2">

          {capabilities.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  p-6
                "
              >
                <div
                  className="
                    inline-flex
                    rounded-xl
                    bg-surface-hover
                    p-3
                  "
                >
                  <Icon size={22} />
                </div>

                <h4 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 text-secondary leading-7">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-primary font-medium">
                  Learn More

                  <ArrowRight size={16} />
                </div>

              </div>
            );

          })}

        </div>

      </div>

    </Section>
  );
}