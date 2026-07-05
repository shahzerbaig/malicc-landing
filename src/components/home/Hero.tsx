import {
    Badge,
    Button,
    Section,
} from "../ui";

import {
    ArrowRight,
} from "lucide-react";

import PlatformCard from "./PlatformCard";

export default function Hero() {

    return (

        <Section className="pt-24 lg:pt-36">

            <div className="grid items-center gap-20 lg:grid-cols-2">

                {/* Left */}

                <div>

                    <Badge>

                        AI Business Platform

                    </Badge>

                    <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">

                        Build.

                        <br />

                        Market.

                        <br />

                        Sell.

                        <br />

                        Grow.

                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-9 text-secondary">

                        Malicc is an AI-native platform that helps businesses
                        launch online stores, generate leads,
                        manage sales, and scale with intelligent software.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

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

                    <div className="mt-10 flex flex-wrap gap-3">

                        <Badge>Commerce</Badge>

                        <Badge>Sales</Badge>

                        <Badge>Marketing</Badge>

                        <Badge>Artificial Intelligence</Badge>

                    </div>

                </div>

                {/* Right */}

                <div className="space-y-5">

                    <PlatformCard
                        category="Commerce"
                        product="Tiny Commerce"
                        description="Launch your online store."
                    />

                    <PlatformCard
                        category="Growth"
                        product="Lead Command"
                        description="Generate more qualified leads."
                    />

                    <PlatformCard
                        category="Sales"
                        product="Sale Command"
                        description="Native AI sales operating system."
                    />

                </div>

            </div>

        </Section>

    );

}