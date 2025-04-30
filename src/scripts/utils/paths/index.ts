import { join as joinPath } from "node:path";

export function join(...paths: string[]): string {
  return addTrailingSlash(joinPath(...paths));
}

function addTrailingSlash(path: string): string {
  if (path === "") {
    throw new Error(`Expected a non-empty string, but received ''.`);
  }
  if (path[-1] === "/") {
    return path;
  }

  return `${path}/`;
}
