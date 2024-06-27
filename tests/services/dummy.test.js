import { execute, helper } from "../../src/services/dummy-service.js";

test("Result is Learning Testing", () => {
  jest.mock(helper, () => true);
  const result = execute();
  expect(result).toBe("Learning Testing");
});
