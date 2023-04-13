import { SITE } from "~/config";
import { trim } from "./utils";

export const trimSlash = (s: string) => trim(trim(s, "/"));

export const getCanonical = (path = ""): string | URL => {
  const url = String(new URL(path, SITE.origin));
  if (path && url.endsWith("/")) {
    return url.slice(0, -1);
  } else if (path && !url.endsWith("/")) {
    return url + "/";
  }
  return url;
};
