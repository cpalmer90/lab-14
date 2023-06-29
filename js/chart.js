"use strict";

let canvasElem = document.getElementById("chart");

let chartState = new AppState();
chartState.loadItems();

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for cart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
  const productItems = [];
  const productViews = [];
  const productClicks = [];

  for (let i = 0; i < state.allProducts.length; i++) {
    productItems.push(allProducts[i].name);
    productViews.push(allProducts[i].timesShown);
    productClicks.push(allProducts[i].timesClicked);
  }
}

renderChart();
