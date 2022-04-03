import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "CalDav Server",
  description: _package.description,
  installed: true,
  type: "caldav_calendar",
  title: "CalDav Server",
  imageSrc: "/apps/caldav.svg",
  variant: "calendar",
  category: "calendar",
  label: "CalDav Calendar",
  logo: "/apps/caldav.svg",
  publisher: "meet.kula.app",
  rating: 5,
  reviews: 69,
  slug: "caldav-calendar",
  trending: false,
  url: "https://meet.kula.app/",
  verified: true,
  email: "help@kula.app",
} as App;

export * as api from "./api";
export * as components from "./components";
export * as lib from "./lib";
