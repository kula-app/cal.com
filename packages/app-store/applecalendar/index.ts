import { validJson } from "@calcom/lib/jsonUtils";
import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Apple Calendar",
  description: _package.description,
  installed: true,
  type: "apple_calendar",
  title: "Apple Calendar",
  imageSrc: "/apps/apple-calendar.svg",
  variant: "calendar",
  category: "calendar",
  label: "Apple Calendar",
  logo: "/apps/apple-calendar.svg",
  publisher: "meet.kula.app",
  rating: 5,
  reviews: 69,
  slug: "apple-calendar",
  trending: false,
  url: "https://meet.kula.app/",
  verified: true,
  email: "help@kula.app",
} as App;

export * as api from "./api";
export * as components from "./components";
export * as lib from "./lib";
