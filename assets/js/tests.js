// // Ask Google Analytics which variation to show the user.
// var chosenVariation = cxApi.chooseVariation();
//
// // Define JavaScript for each page variation of this experiment.
// var pageVariations = [
//   function() {},  // Original: Do nothing. This will render the default HTML.
//   function() {    // Variation A
//     document.getElementById('test10001').style.display = 'block';
//   }
// ];
//
// // Wait for the DOM to load, then execute the view for the chosen variation.
// $(document).ready(
//   // Execute the chosen view
//   pageVariations[chosenVariation]
// );
