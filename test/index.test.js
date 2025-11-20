const {
  convertToUpperCase,
  calculateTax,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
} = require('../index');

describe("calculateTax", () => {
  test("should correctly calculate 10% tax of a given amount", () => {
    expect(calculateTax(100)).toBe(10);
  });

  test("should return 0 for amount 0", () => {
    expect(calculateTax(0)).toBe(0);
  });

  test("should correctly calculate tax for a large amount", () => {
    expect(calculateTax(10000)).toBe(1000);
  });

  test("should handle negative amounts", () => {
    expect(calculateTax(-50)).toBe(-5);
  });
});

describe("convertToUpperCase", () => {
  test("should convert lowercase letters to uppercase", () => {
    expect(convertToUpperCase("hello world")).toBe("HELLO WORLD");
  });

  test("should handle an already uppercase string", () => {
    expect(convertToUpperCase("HELLO WORLD")).toBe("HELLO WORLD");
  });

  test("should handle an empty string", () => {
    expect(convertToUpperCase("")).toBe("");
  });

  test("should handle a string with mixed case letters", () => {
    expect(convertToUpperCase("Hello World")).toBe("HELLO WORLD");
  });

  test("should handle a string with special characters and numbers", () => {
    expect(convertToUpperCase("Hello World 123! @#")).toBe("HELLO WORLD 123! @#");
  });
});

describe("findMaximum", () => {
  test("should return the greater of two positive numbers", () => {
    expect(findMaximum(10, 5)).toBe(10);
  });

  test("should return the greater of two negative numbers", () => {
    expect(findMaximum(-5, -10)).toBe(-5);
  });

  test("should return the greater of a positive and a negative number", () => {
    expect(findMaximum(3, -7)).toBe(3);
  });

  test("should return the same number if both numbers are equal", () => {
    expect(findMaximum(7, 7)).toBe(7);
  });
});

describe("isPalindrome", () => {
  test("should return true for a simple palindrome", () => {
    expect(isPalindrome("radar")).toBe(true);
  });

  test("should return false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should return true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});

describe("calculateDiscountedPrice", () => {
  test("should correctly calculate the discounted price", () => {
    expect(calculateDiscountedPrice(100, 20)).toBe(80);
  });

  test("should return the original price when discount is 0%", () => {
    expect(calculateDiscountedPrice(100, 0)).toBe(100);
  });

  test("should handle a discount percentage of 100%", () => {
    expect(calculateDiscountedPrice(100, 100)).toBe(0);
  });

  test("should handle a discount percentage greater than 100%", () => {
    expect(calculateDiscountedPrice(100, 150)).toBe(-50);
  });
});
