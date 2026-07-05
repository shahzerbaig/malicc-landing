// src/components/navbar/navigation-data.ts

import { NavigationGroup } from "./types";

export const navigation: NavigationGroup[] = [
  {
    label: "Products",
    sections: [
      {
        title: "Commerce",
        items: [
          {
            title: "Tiny Commerce",
            description: "Launch an online store in minutes.",
            href: "/products/tiny-commerce",
          },
          {
            title: "Edge Commerce",
            description: "Enterprise commerce platform.",
            href: "/products/edge-commerce",
          },
          {
            title: "AI Commerce",
            description: "AI-powered commerce automation.",
            href: "/products/ai-commerce",
          },
        ],
      },
      {
        title: "Growth",
        items: [
          {
            title: "Lead Command",
            description: "Generate and nurture more leads.",
            href: "/products/lead-command",
          },
          {
            title: "Sale Command",
            description: "Native AI sales operating system.",
            href: "/products/sale-command",
          },
        ],
      },
    ],
  },

  {
    label: "Built For",
    sections: [
      {
        title: "Businesses",
        items: [
          {
            title: "Startups",
            description: "Launch quickly with AI-powered tools.",
            href: "/solutions/startups",
          },
          {
            title: "Small Businesses",
            description: "Everything needed to grow online.",
            href: "/solutions/small-business",
          },
          {
            title: "Growing Businesses",
            description: "Scale without changing platforms.",
            href: "/solutions/growing-business",
          },
          {
            title: "Enterprise",
            description: "Security, governance, and custom workflows.",
            href: "/solutions/enterprise",
          },
        ],
      },
      {
        title: "Teams",
        items: [
          {
            title: "Sales",
            description: "Close deals faster using AI.",
            href: "/solutions/sales",
          },
          {
            title: "Marketing",
            description: "Capture and convert more leads.",
            href: "/solutions/marketing",
          },
          {
            title: "Commerce",
            description: "Build and grow your online business.",
            href: "/solutions/commerce",
          },
        ],
      },
    ],
  },
];
