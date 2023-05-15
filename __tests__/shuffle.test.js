const shuffle = require("../src/shuffle");

let testData = {
  title: [
    { id: 0, name: "The Hammer" },
    { id: 1, name: "Crowbar" },
    { id: 2, name: "Rusty" },
    { id: 3, name: "Beta" },
    { id: 4, name: "Prime Information Drone" },
    { id: 5, name: "Brobot" },
    { id: 6, name: "Nozzle" },
    { id: 7, name: "Globotron" },
    { id: 8, name: "Self-Aware Garbage Android" },
    { id: 9, name: "Mechi" },
  ],
};


describe("shuffle test", () => {
  // CODE HERE
  test("shuffle should return an array", () => {
    let result = shuffle(testData.title);
    expect(Array.isArray(result)).toBe(true);
  });

  test("shuffle returns an array of the same length as the argument sent in", () => {
    let result = shuffle(testData.title);
    expect(result).toHaveLength(testData.title.length);
  });
});
