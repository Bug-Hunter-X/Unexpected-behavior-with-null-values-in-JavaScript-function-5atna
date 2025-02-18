function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }
  return a + b; // Original code
}