import { parse } from "@babel/parser";

export default function(code: string) {
  try {
    return parse(code);
  } catch {
    return null;
  }
}
