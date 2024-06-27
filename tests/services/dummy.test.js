import { execute } from '../../src/services/dummy-service.js'

test("Result is Learning Testing", () => {
  const result = execute();
  expect(result).toBe("Learning Testing");
});