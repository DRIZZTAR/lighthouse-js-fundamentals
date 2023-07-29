// Define 3 functions to calculate the areas of 3 different shapes

// calculateRectangleArea(length, width)
function calculateRectangleArea(length, width) {
  // Check if the parameters are positive numbers
  if (length > 0 && width > 0) {
    // Return the area of the rectangle
    return length * width;
  } else {
    // Return undefined if the parameters are negative
    return undefined;
  }
}

// calculateTriangleArea(base, height)
function calculateTriangleArea(base, height) {
  // Check if the parameters are positive numbers
  if (base > 0 && height > 0) {
    // Return the area of the triangle
    return base * height / 2;
  } else {
    // Return undefined if the parameters are negative
    return undefined;
  }
}

// calculateCircleArea(radius)
function calculateCircleArea(radius) {
  // Check if the parameter is a positive number
  if (radius > 0) {
    // Return the area of the circle
    return Math.PI * radius * radius;
  } else {
    // Return undefined if the parameter is negative
    return undefined;
  }
}