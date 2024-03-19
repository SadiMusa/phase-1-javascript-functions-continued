// code your solution here
// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function expression for mondayWork
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// Function to create a function that wraps an adjective in a highlight
function wrapAdjective(symbol = "*") {
  return function(adjective) {
    return `You are ${symbol}${adjective}${symbol}!`;
  }
}
