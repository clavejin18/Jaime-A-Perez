// Adding onclick function for "Projects" and "contact" website buttons
/*********** setting up website **********************/
$( document ).ready(function() {
// Registering click for Project button
document.querySelector("#projectButton").addEventListener("click", function(event){
// Following prevents website refresh
  event.preventDefault()
// Display function for project button when clicked
  projectDisplay()
})
// registering clicks for contact button
document.querySelector("#contactButton").addEventListener("click", function(event){
  // Following prevents website refresh
    event.preventDefault()
  // Display function for contact button when clicked
   contactDisplay()
  })
})
// Display functions for website
function projectDisplay() {

}
function contactDisplay(){

}

