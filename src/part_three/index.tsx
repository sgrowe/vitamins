import { ColourSwap, parseInput, Vitamins } from "../part_one"

export const consecutiveStates = (
  initialState: string,
  changes: ColourSwap[]
) => {
  const curState = parseInput(initialState)

  const states = [formatState(curState)]

  for (let i = 0; i < changes.length; i++) {
    const [sides, from, to] = changes[i]

    // TODO: validation of the `from` state

    curState[sides - 3][1] = to

    states.push(formatState(curState))
  }

  return states
}

export const formatState = (state: Vitamins) =>
  state.map(([n, colour]) => `${n}${colour}`).join(" ")
