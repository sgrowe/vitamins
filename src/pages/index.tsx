import { FormEvent, useEffect, useRef, useState } from "react"
import { makeAllWhite, parseInput, Vitamins } from "../part_one"
import { consecutiveStates, formatState } from "../part_three"
import { Vitamin } from "../Vitamin"
import styles from "./index.module.css"

const defaultLine = "3B 4B 5G 6W"

export default function Index() {
  const [vitamins, setVitamins] = useState<Vitamins>(() =>
    parseInput(defaultLine)
  )
  const [futureStates, setFutureStates] = useState<string[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!inputRef.current) return

    setVitamins(parseInput(inputRef.current.value))
    setFutureStates([])
  }

  const onMakeAllWhite = () => {
    const currentState = formatState(vitamins)

    const changes = makeAllWhite(currentState)

    const states = consecutiveStates(currentState, changes)

    // skip first state as that is the current state
    setFutureStates(states.slice(1))
  }

  useEffect(() => {
    if (!futureStates.length) return

    const timeoutId = setTimeout(() => {
      setVitamins(parseInput(futureStates[0]))
      setFutureStates((f) => f.slice(1))
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [futureStates])

  return (
    <div>
      <h1>Vitamins challenge</h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <p>
          <label htmlFor="line-input">Vitamin line:</label>
        </p>

        <div>
          <input
            ref={inputRef}
            id="line-input"
            name="line"
            type="text"
            defaultValue={defaultLine}
          />
        </div>

        <div>
          <button type="submit">Draw vitamins</button>
        </div>

        <div>
          <button type="button" onClick={onMakeAllWhite}>
            Make all white
          </button>
        </div>
      </form>

      <div className={styles.vitaminLine}>
        {vitamins.map(([numSides, colour], i) => (
          <Vitamin key={i} numSides={numSides} colour={colour} />
        ))}
      </div>
    </div>
  )
}
