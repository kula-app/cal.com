import { DefaultSeoProps } from "next-seo";

import { HeadSeoProps } from "@components/seo/head-seo";

const seoImages = {
  default: "https://meet.kula.app/og-image.png",
  ogImage: "https://og-image-one-pi.vercel.app/",
};

export const getSeoImage = (key: keyof typeof seoImages): string => {
  return seoImages[key];
};

export const seoConfig: {
  headSeo: Required<Pick<HeadSeoProps, "siteName">>;
  defaultNextSeo: DefaultSeoProps;
} = {
  headSeo: {
    siteName: "meet.kula.app",
  },
  defaultNextSeo: {
    twitter: {
      handle: "@calcom",
      site: "@calcom",
      cardType: "summary_large_image",
    },
  },
} as const;
