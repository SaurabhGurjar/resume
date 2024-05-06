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
        `${word.charAt(0).toUpperCase()}${word.split("").slice(1).join("")}`
    )
    .join(" ");
}

// TODO: Improve function to capitalize single "i" and words after punctuation(".", "?").
export function sentenceCase(str) {
  return (
    str.split("").slice(0, 1).join("").toUpperCase() +
    str.split("").slice(1).join("")
  );
}
