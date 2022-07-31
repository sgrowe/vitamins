const form = getElById("form")
const shapes = getElById("shapes")

form.addEventListener("submit", onSubmit)

function onSubmit(event: SubmitEvent) {
  event.preventDefault()

  const data = new FormData(form as HTMLFormElement)

  const vitamins = parseInput(data.get("line") as string)

  shapes.innerHTML = ""

  vitamins.forEach(([sides, colour]) => {
    const shape = createPolygon(sides)

    shape.classList.add(
      colour === "W" ? "white" : colour === "G" ? "grey" : "black"
    )

    shapes.appendChild(shape)
  })
}

function getElById(id: string) {
  const el = document.getElementById(id)

  if (!el) throw new Error(`Element with id ${id} not found`)

  return el
}

function createPolygon(numSides: number) {
  const centerX = 100
  const centerY = 100
  const radius = 80

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

  svg.classList.add("shape")
  svg.setAttribute("viewBox", `0 0 ${centerX * 2} ${centerY * 2}`)

  const polygon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  )

  polygon.setAttribute("transform", `rotate(-90, ${centerX} ${centerY})`)

  svg.appendChild(polygon)

  const points = []

  for (let i = 0; i < numSides; i++) {
    const angle = ((2 * Math.PI) / numSides) * i

    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)

    points.push(`${x},${y}`)
  }

  polygon.setAttribute("points", points.join(" "))

  return svg
}

const parseInput = (input: string) =>
  input.split(/\s+/g).map((v) => {
    const match = v.match(/(\d+)(\w)/)

    if (!match) throw new Error("Invalid input")

    const numSides = Number(match[1])
    const colour = match[2]

    if (colour !== "W" && colour !== "G" && colour !== "B")
      throw new Error(`Invalid colour: ${colour}`)

    return [numSides, colour] as const
  })
