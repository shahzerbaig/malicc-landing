import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import {
  Badge,
  Button,
  Section,
} from "../ui";

export default function Spotlight() {
  return (
    <Section>

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-border
          bg-surface
        "
      >

        {/* Background */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-primary/10
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

        <div className="relative grid gap-12 p-10 lg:grid-cols-2 lg:p-16">

          {/* Left */}

          <div>

            <Badge>

              <Sparkles
                size={14}
                className="mr-2"
              />

              Featured

            </Badge>

            <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-5xl">

              AI Commerce

            </h2>

            <p className="mt-6 text-lg leading-8 text-secondary">

              Build an intelligent online store that doesn&apos;t just
              sell products—it understands customer behaviour,
              personalises experiences, and helps increase
              conversions using AI.

            </p>

            <div className="mt-10 flex gap-4">

              <Button href="/products/ai-commerce">

                Learn More

              </Button>

              <Button
                href="/demo"
                variant="secondary"
              >

                Book Demo

              </Button>

            </div>

          </div>

          {/* Right */}

          <div
            className="
              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                w-full
                rounded-2xl
                border
                border-border
                bg-surface-hover
                p-8
              "
            >

              <div className="space-y-6">

                <Feature
                  title="Neuromarketing"
                />

                <Feature
                  title="AI Product Content"
                />

                <Feature
                  title="Smart Recommendations"
                />

                <Feature
                  title="Behaviour Analytics"
                />

                <Feature
                  title="Conversion Optimisation"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </Section>
  );
}

function Feature({
  title,
}: {
  title: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-border
        bg-surface
        p-4
      "
    >
      <span className="font-medium">
        {title}
      </span>

      <ArrowRight
        size={18}
        className="text-primary"
      />
    </div>
  );
}