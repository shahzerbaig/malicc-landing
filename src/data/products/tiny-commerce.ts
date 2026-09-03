import type { ProductPageData } from "@/components/product/ProductPage";

export const tinyCommerce: ProductPageData = {
  hero: {
    eyebrow: "TINY COMMERCE",
    title: "Sell anything. Start tiny.",
    description:
      "Create a simple storefront for anything you want to sell — digital products, physical products, services, subscriptions, and more.",
    primaryCta: {
      label: "Start Selling",
      href: "https://tiny.malicc.com/merchant/register",
    },
    secondaryCta: {
      label: "Explore Tiny Commerce",
      href: "https://tiny.malicc.com",
    },
  },

  problem: {
    eyebrow: "THE PROBLEM",
    title: "Selling shouldn't require building an entire commerce stack.",
    description:
      "You shouldn't need to build a website, configure complicated ecommerce software, connect multiple services, and manage a pile of infrastructure just to sell something you created. Tiny Commerce gives you the storefront and commerce infrastructure to get started.",
  },

  features: {
    eyebrow: "ONE STORE. MANY POSSIBILITIES.",
    title: "Anything can be a product.",
    description:
      "Tiny Commerce is designed for different kinds of sellers and different kinds of products. Start with what you have and grow from there.",
    features: [
      {
        eyebrow: "DIGITAL",
        title: "Digital Products",
        description:
          "Sell ebooks, templates, software, courses, graphics, videos, files, and other digital products.",
      },
      {
        eyebrow: "PHYSICAL",
        title: "Physical Products",
        description:
          "Create a storefront for merchandise, artwork, products, crafts, and other physical goods.",
      },
      {
        eyebrow: "SERVICES",
        title: "Services",
        description:
          "Turn your expertise into something customers can discover and purchase.",
      },
      {
        eyebrow: "RECURRING",
        title: "Subscriptions",
        description:
          "Build recurring revenue around memberships, content, access, or ongoing services.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "HOW IT WORKS",
    title: "From idea to storefront in a few steps.",
    description:
      "Tiny Commerce keeps the path from creating something to selling it deliberately simple.",
    steps: [
      {
        title: "Create",
        description:
          "Add your product, define what you're selling, and set up the essentials.",
      },
      {
        title: "Publish",
        description:
          "Your product becomes available through your Tiny Commerce storefront.",
      },
      {
        title: "Share",
        description:
          "Share your storefront or product link wherever your customers are.",
      },
      {
        title: "Sell",
        description:
          "Customers purchase through your store and your commerce flow takes care of the transaction.",
      },
    ],
  },

  audience: {
    eyebrow: "BUILT FOR",
    title: "Anyone with something worth selling.",
    description:
      "Tiny Commerce is deliberately broad. You don't need to fit into a particular business model to use it.",
    audiences: [
      {
        title: "Creators",
        description:
          "Turn ideas, knowledge, content, and creative work into products.",
      },
      {
        title: "Developers",
        description:
          "Sell software, code, templates, tools, assets, and digital products.",
      },
      {
        title: "Small Businesses",
        description:
          "Put your products online without turning ecommerce into a large technology project.",
      },
      {
        title: "Professionals",
        description:
          "Package expertise, consulting, services, or recurring work into something customers can buy.",
      },
    ],
  },

  cta: {
    eyebrow: "START SMALL",
    title: "Start with one thing.",
    description:
      "You don't need a massive catalog or a complicated storefront. Put one thing online, share it, and start selling.",
    button: {
      label: "Start Selling",
      href: "https://tiny.malicc.com",
    },
  },
};
