import { Colour } from "./part_one"
import styles from "./Vitamin.module.css"

const radius = 80
const centerX = 100
const centerY = 100

type Props = {
  numSides: number
  colour: Colour
}

export const Vitamin = ({ numSides, colour }: Props) => {
  return (
    <svg
      className={[
        styles["shape"],
        styles[colour === "W" ? "white" : colour === "G" ? "grey" : "black"],
      ].join(" ")}
      viewBox={`0 0 ${centerX * 2} ${centerY * 2}`}
    >
      <polygon
        points={calculatePoints(numSides)}
        transform={`rotate(-90, ${centerX} ${centerY})`}
      />
    </svg>
  )
}

const calculatePoints = (numSides: number) => {
  const points = []

  for (let i = 0; i < numSides; i++) {
    const angle = ((2 * Math.PI) / numSides) * i

    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)

    points.push(`${x},${y}`)
  }

  return points.join(" ")
}
