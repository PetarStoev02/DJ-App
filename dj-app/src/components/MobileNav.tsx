"use client";
import * as React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import Link from "next/link";

const MobileNav = ({ components }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="lg:hidden p-2">
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </DrawerTrigger>
      <DrawerContent side="center">
        <DrawerClose asChild>
          <button className="absolute top-4 right-4">
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </DrawerClose>
        <div className="p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" passHref>
              shadcn/ui
            </Link>
            <Link href="/docs" passHref>
              Documentation
            </Link>
            <Link href="/docs/installation" passHref>
              Installation
            </Link>
            <Link href="/docs/primitives/typography" passHref>
              Typography
            </Link>
            {/* {components.map((component) => (
              <Link key={component.title} href={component.href} passHref>
                {component.title}
              </Link>
            ))} */}
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
