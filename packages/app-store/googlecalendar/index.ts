import { validJson } from "@calcom/lib/jsonUtils";
import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Google Calendar",
  description: _package.description,
  installed: !!(process.env.GOOGLE_API_CREDENTIALS && validJson(process.env.GOOGLE_API_CREDENTIALS)),
  type: "google_calendar",
  title: "Google Calendar",
  imageSrc: "/apps/google-calendar.svg",
  variant: "calendar",
  category: "calendar",
  label: "Google Calendar",
  logo: "/apps/google-calendar.svg",
  publisher: "meet.kula.app",
  rating: 5,
  reviews: 69,
  slug: "google-calendar",
  trending: false,
  url: "https://meet.kula.app/",
  verified: true,
  email: "help@kula.app",
} as App;

export * as api from "./api";
export * as lib from "./lib";
