import { Badge, Section, Button } from "../ui";

export default function FinalCTA() {

return (<Section>

    <div
        className="
            rounded-3xl
            border
            border-border
            bg-surface
            p-16
            text-center
        "
    >

        <Badge>

            Get Started

        </Badge>

        <h2 className="mt-6 text-5xl font-bold">

            Ready to grow your business?

        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">

            Discover how Malicc helps businesses
            build, market, sell, and grow with AI.

        </p>

        <div className="mt-10 flex justify-center gap-4">

            <Button href="/products">

                Explore Products

            </Button>

            <Button
                href="/demo"
                variant="secondary"
            >

                Book Demo

            </Button>

        </div>

    </div>

</Section>)

}