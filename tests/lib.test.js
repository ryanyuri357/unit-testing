const lib = require("../lib");

// number test
describe("absolute", () => {
  it("should return a (+) if the input is (+)", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a (+) if the input is (-)", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return a 0 if the input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

// string test
describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Ryan");
    //expect(result).toMatch(/Ryan/);
    expect(result).toContain("Ryan");
  });
});

// array test
describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies;
    // result.forEach((item) => expect(item).toMatch(/^[A-Z]{3}$/));
    // expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));

    // a proper method for unit testing
    // expect(result).toContain("USD");
    // expect(result).toContain("AUD");
    // expect(result).toContain("EUR");

    // too general
    expect(result).toBeDefined();
    // expect(result).toBeNull();

    // too specific
    //expect(result[0]).toBe("USD");
    // expect(result[1]).toBe("AUD");
    // expect(result[2]).toBe("EUR");
    // expect(result.length).toBe(3);
  });
});

// object test
describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    // expect(result).toEqual({ id: 1, price: 10 });

    expect(result).toMatchObject({ id: 1, price: 10 }); // <- doesn't have to match ALL properties

    expect(result).toHaveProperty("id", 1);
  });
});

// testing exceptions
describe("registerUser", () => {
  it("should throw exception if username is falsey", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("Ryan");
    expect(result).toMatchObject({ username: "Ryan" });
    expect(result.id).toBeGreaterThan(0);
  });
});
