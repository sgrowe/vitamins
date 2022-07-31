import { FormEvent, useRef, useState } from "react"
import { Colour, parseInput, Vitamins } from "../part_one"
import { Vitamin } from "../Vitamin"
import styles from "./part_two.module.css"

export default function PartTwo() {
  const [vitamins, setVitamins] = useState<Vitamins>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!inputRef.current) return

    setVitamins(parseInput(inputRef.current.value))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="line-input">Vitamin line</label>
        </p>
        <input
          ref={inputRef}
          id="line-input"
          name="line"
          type="text"
          defaultValue="3B 4B 5G 6W"
        />
        <button type="submit">Draw line</button>
      </form>

      <div className={styles.vitaminLine}>
        {vitamins.map(([numSides, colour], i) => (
          <Vitamin key={i} numSides={numSides} colour={colour} />
        ))}
      </div>
    </div>
  )
}
