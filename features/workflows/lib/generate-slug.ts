import {
  uniqueNamesGenerator,
  adjectives,
  animals,
  Config,
} from "unique-names-generator"

const config: Config = {
  dictionaries: [adjectives, animals],
  separator: "-",
  style: "lowerCase",
  length: 2,
}

export function generateSlug(): string {
  return uniqueNamesGenerator(config)
}
