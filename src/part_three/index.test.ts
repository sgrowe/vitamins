import { consecutiveStates } from "."

it("returns correct consecutive states", () => {
  expect(
    consecutiveStates("3G 4G", [
      [4, "G", "B"],
      [3, "G", "W"],
      [4, "B", "W"],
    ])
  ).toEqual(["3G 4G", "3G 4B", "3W 4B", "3W 4W"])
})
