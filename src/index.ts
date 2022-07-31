type Colour = "W" | "G" | "B"

type Vitamins = Colour[]

type ColourSwap = [number, Colour, Colour]

export function makeAllWhite(vitaminLine: string) {
  const vitamins = parseLine(vitaminLine)

  const changes: ColourSwap[] = []

  while (vitamins.some((v) => v !== "W")) {
    let targetColour: Colour = "W"

    for (let i = 0; i < vitamins.length; i++) {
      const curColour = vitamins[i]

      if (curColour === targetColour) continue

      if (isMaxi(vitamins, i)) {
        vitamins[i] = targetColour
        changes.push([i + 3, curColour, targetColour])
        break
      } else {
        targetColour = otherColour(curColour, targetColour)
      }
    }
  }

  return changes
}

const parseLine = (input: string): Vitamins =>
  input.split(/\s+/g).map((v) => {
    const match = v.match(/(\d+)(\w)/)

    if (!match) throw new Error("Invalid input")

    const colour = match[2]

    if (colour !== "W" && colour !== "G" && colour !== "B")
      throw new Error(`Invalid colour: ${colour}`)

    return colour
  })

const allColours: Colour[] = ["W", "G", "B"]

const otherColour = (a: Colour, b: Colour) => {
  const other = allColours.find((c) => c !== a && c !== b)

  if (!other) throw new Error("Other colour not found")

  return other
}

const isMaxi = (vitamins: Vitamins, index: number) => {
  const curColour = vitamins[index]

  return vitamins.slice(index + 1).every((c) => c !== curColour)
}
