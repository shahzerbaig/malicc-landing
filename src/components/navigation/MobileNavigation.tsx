"use client";

import Link from "next/link";

import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";

import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import { navigation } from "./navigation-data";

export default function MobileNavigation() {
  return (
    <Dialog.Root>

      {/* Trigger */}

      <Dialog.Trigger asChild>
        <button
          className="
            lg:hidden
            inline-flex
            items-center
            justify-center
            rounded-lg
            p-2
            text-primary
            transition
            hover:bg-surface-hover
          "
        >
          <Menu size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>

        {/* Overlay */}

        <Dialog.Overlay
          className="
            fixed
            inset-0
            z-50
            bg-black/60
            backdrop-blur-sm
            data-[state=open]:animate-in
            data-[state=closed]:animate-out
          "
        />

        {/* Drawer */}

        <Dialog.Content
          className="
            fixed
            right-0
            top-0
            z-50
            flex
            h-screen
            w-full
            max-w-sm
            flex-col
            border-l
            border-border
            bg-surface
            shadow-2xl

            data-[state=open]:animate-in
            data-[state=closed]:animate-out
          "
        >

          {/* Header */}

          <div className="flex items-center justify-between border-b border-border p-6">

            <div>

              <h2 className="text-lg font-semibold">
                malicc
              </h2>

              <p className="text-sm text-secondary">
                AI Business Platform
              </p>

            </div>

            <Dialog.Close asChild>

              <button
                className="
                  rounded-lg
                  p-2
                  hover:bg-surface-hover
                "
              >
                <X size={20} />
              </button>

            </Dialog.Close>

          </div>

          {/* Navigation */}

          <div className="flex-1 overflow-y-auto p-6">

<Accordion.Root
  type="multiple"
  className="space-y-2"
>
  {navigation.map((group) => (
    <Accordion.Item
      key={group.label}
      value={group.label}
      className="border-b border-border last:border-none"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className="
            flex
            w-full
            items-center
            justify-between
            py-4
            text-left
            font-semibold
            text-primary
            transition
            hover:text-primary
            group
          "
        >
          {group.label}

          <ChevronDown
            size={18}
            className="
              transition-transform
              duration-200
              group-data-[state=open]:rotate-180
            "
          />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content
        className="
          overflow-hidden
          data-[state=open]:animate-slideDown
          data-[state=closed]:animate-slideUp
        "
      >
        <div className="pb-6 space-y-8">

          {group.sections.map((section) => (

            <div key={section.title}>

              <h3
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-wider
                  text-secondary
                "
              >
                {section.title}
              </h3>

              <div className="space-y-1">

                {section.items.map((item) => (

                  <Link
                    key={item.title}
                    href={item.href}
                    className="
                      block
                      rounded-xl
                      p-3
                      transition
                      hover:bg-surface-hover
                    "
                  >
                    <div className="font-medium text-primary">
                      {item.title}
                    </div>

                    {item.description && (
                      <div className="mt-1 text-sm text-secondary">
                        {item.description}
                      </div>
                    )}
                  </Link>

                ))}

              </div>

            </div>

          ))}

        </div>
      </Accordion.Content>

    </Accordion.Item>
  ))}
</Accordion.Root>

            {/* Static Links */}

            <div className="mt-8 border-t border-border pt-8 space-y-5">

              <Link
                href="/pricing"
                className="block text-primary"
              >
                Pricing
              </Link>

              <Link
                href="/resources"
                className="block text-primary"
              >
                Resources
              </Link>

              <Link
                href="/company"
                className="block text-primary"
              >
                Company
              </Link>

            </div>

          </div>

          {/* Footer */}

          <div className="border-t border-border p-6 space-y-3">

            <Link
              href="/bookademo"
              className="
                block
                rounded-xl
                border
                border-border
                py-3
                text-center
                font-medium
                hover:bg-surface-hover
              "
            >
              Book Demo
            </Link>

            <Link
              href="/get-started"
              className="
                block
                rounded-xl
                bg-primary
                py-3
                text-center
                font-semibold
                text-white
              "
            >
              Get Started
            </Link>

          </div>

        </Dialog.Content>

      </Dialog.Portal>

    </Dialog.Root>
  );
}