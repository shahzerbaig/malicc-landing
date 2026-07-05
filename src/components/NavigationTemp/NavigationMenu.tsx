"use client";

import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { NavigationGroup } from "./types";

interface NavigationMenuProps {
  group: NavigationGroup;
}

export default function NavigationMenu({
  group,
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List>
        <NavigationMenuPrimitive.Item>

          <NavigationMenuPrimitive.Trigger
            className="
              flex items-center gap-1
              text-sm
              font-medium
              text-secondary
              transition-colors
              hover:text-primary
              focus:outline-none
              data-[state=open]:text-primary
            "
          >
            {group.label}

            <ChevronDown
              size={16}
              className="
                transition-transform
                duration-200
                group-data-[state=open]:rotate-180
              "
            />
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className="
              absolute
              left-0
              top-8
              w-[620px]
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950
              shadow-2xl
              p-6
              animate-in
              fade-in
              zoom-in-95
            "
          >
            <div
              className={`grid gap-10 ${
                group.sections.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-2"
              }`}
            >
              {group.sections.map((section) => (
                <div key={section.title}>

                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {section.title}
                  </h3>

                  <div className="space-y-2">

                    {section.items.map((item) => (

                      <NavigationMenuPrimitive.Link
                        key={item.title}
                        asChild
                      >
                        <Link
                          href={item.href}
                          className="
                            block
                            rounded-xl
                            p-3
                            transition-all
                            hover:bg-zinc-900
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
                      </NavigationMenuPrimitive.Link>

                    ))}

                  </div>

                </div>
              ))}
            </div>
          </NavigationMenuPrimitive.Content>

        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>

      <NavigationMenuPrimitive.Viewport />
    </NavigationMenuPrimitive.Root>
  );
}