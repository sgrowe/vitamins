import { makeAllWhite } from "."

it("returns correct colour swaps", () => {
  expect(makeAllWhite("3G 4G")).toEqual([
    [4, "G", "B"],
    [3, "G", "W"],
    [4, "B", "W"],
  ])
})

it("returns correct colour swaps when last element is already white", () => {
  expect(makeAllWhite("3B 4B 5G 6W")).toEqual([
    // originally generated via `.toMatchInlineSnapshot` and verified visually
    [6, "W", "B"],
    [5, "G", "W"],
    [6, "B", "W"],
    [4, "B", "G"],
    [6, "W", "B"],
    [5, "W", "G"],
    [6, "B", "G"],
    [3, "B", "W"],
    [6, "G", "W"],
    [5, "G", "B"],
    [6, "W", "B"],
    [4, "G", "W"],
    [6, "B", "G"],
    [5, "B", "W"],
    [6, "G", "W"],
  ])
})
