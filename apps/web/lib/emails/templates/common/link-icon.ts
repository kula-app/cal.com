import { IS_PRODUCTION, BASE_URL } from "@lib/config/constants";

export const linkIcon = (): string => {
  return IS_PRODUCTION ? BASE_URL + "/emails/linkIcon.png" : "https://meet.kula.app/emails/linkIcon.png";
};
