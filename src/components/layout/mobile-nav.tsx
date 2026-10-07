
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger 
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
            />
          }
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-(--border) bg-(--background) px-0 shadow-2xl backdrop-blur-none">
          <SheetHeader className="border-b border-(--border) px-6 py-5">
            <SheetTitle className="text-left text-xl font-semibold">Navigation</SheetTitle>
          </SheetHeader>

          <nav aria-label="Mobile navigation" className="flex flex-col gap-2 px-4 pt-6" >
            {siteConfig.mainNav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-4 py-4 text-base font-medium transition-all duration-300 ease-out ${
                    active
                      ? "bg-blue-500/12 text-blue-500 shadow-sm"
                      : "text-(--foreground) hover:bg-neutral-500/10"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
