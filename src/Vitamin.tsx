import { Colour } from "./part_one"
import styles from "./Vitamin.module.css"

type Props = {
  numSides: number
  colour: Colour
}

export const Vitamin = ({ numSides, colour }: Props) => {
  const centerX = 100
  const centerY = 100
  const radius = 80

  const points = []

  for (let i = 0; i < numSides; i++) {
    const angle = ((2 * Math.PI) / numSides) * i

    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)

    points.push(`${x},${y}`)
  }

  return (
    <svg
      className={`${styles["shape"]} ${
        styles[colour === "W" ? "white" : colour === "G" ? "grey" : "black"]
      }`}
      viewBox={`0 0 ${centerX * 2} ${centerY * 2}`}
    >
      <polygon
        points={points.join(" ")}
        transform={`rotate(-90, ${centerX} ${centerY})`}
      />
    </svg>
  )
}
