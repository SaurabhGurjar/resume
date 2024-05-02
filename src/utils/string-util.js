export function allCap(str) {
  return str
    .split("")
    .map((char) => char.toUpperCase())
    .join("");
}

export function capitalize(str) {
  return str
    .split(" ")
    .map(
      (word) =>
        `${word.charAt(0).toUpperCase()}${word.split("").slice(1).join("")}`,
    )
    .join(" ");
}
