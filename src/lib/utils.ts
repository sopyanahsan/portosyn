type ClassValue = string | number | boolean | null | undefined | ClassValue[];

function clsx(...inputs: ClassValue[]): string {
  let result = "";
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      result += " " + clsx(...input);
    } else if (typeof input === "string" || typeof input === "number") {
      result += " " + input;
    }
  }
  return result.trim();
}

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
