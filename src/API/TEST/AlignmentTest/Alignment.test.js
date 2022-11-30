const AlignmentNearby = require("./AlignmentNearby");
test("Testing the Nearby Alignment funcion", () => {
  expect(AlignmentNearby("Alignment")).toBe(
    "Displaying Nearby Alignment service"
  );
});

const AlignmentRecommended = require("./AlignmentRecommended");
test("Testing the Recommended Alignment funcion", () => {
  expect(AlignmentRecommended("Alignment")).toBe(
    "Displaying Recommended Alignment service"
  );
});
