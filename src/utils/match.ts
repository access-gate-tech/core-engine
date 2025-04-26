export function matchGlob(pattern: string, value: string): boolean {
  if (pattern === "*") return true;
  if (pattern.endsWith("/*")) {
    return value.startsWith(pattern.slice(0, -1));
  }
  return pattern === value;
}

export function flatten(
  obj: Record<string, any>,
  prefix = ""
): Record<string, string> {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof val === "object" && val !== null) {
      Object.assign(acc, flatten(val, newKey));
    } else {
      acc[newKey] = String(val);
    }
    return acc;
  }, {} as Record<string, string>);
}
