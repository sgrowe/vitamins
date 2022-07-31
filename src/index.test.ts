import { makeAllWhite } from "."

it("returns correct colour swaps", () => {
  expect(makeAllWhite("3G 4G")).toEqual([
    [4, "G", "B"],
    [3, "G", "W"],
    [4, "B", "W"],
  ])
})
