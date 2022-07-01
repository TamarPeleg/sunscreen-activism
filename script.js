/* .js files add interaction to your website */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var stateList = [
  "People of color or of a darker complexion do not need to apply sunscreen everyday, only when in high-exposure setting (beach, pool, etc.)",/*0*/
  "If you apply sunscreen in the morning, it will provide protection all day",/*1*/
  "SPF of 30 or 50 is enough for protection, higher SPF doesn't do much in terms of UV protection",/*2*/
  "Mineral sunscreen is better than chemical sunscreen because it doesn't include oxybenzone, octinoxate, avobenzone, and other UV filtering ingredients",/*3*/
  "Sunscreen prevents Vitamin D absorption, so you should try to tan in moderation to prevent Vitamin D deficency."];/*4*/


var statement = document.getElementById("statement");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  statement.innerHTML = stateList[count];
  count++;
  if (count == stateList.length){
    count = 0;
  }
}

var expl = ["This is a myth: Tanning is not recommended at all- in case of a Vitamin D deficency doctors recommend Vitamin D supplements, not direct sun exposure. Sunscreen has not been found to change Vitamin D absorption by the skin, so this is a common misconception and therefore a myth with no scientific backing.",
                "This is a myth: Although people with higher melanin (skin pigment) concentrations have some higher resistance to the UV rays emitted by the sun, they're not protected from UVa rays and their effects including skin cancer, aging, etc.",
                 "This is a myth: It is recommended that you reapply sunscreen every 2 hours, especially when in the water or when sweating. Therefore, sunscreen from the morning will likely have limited to no protection by the end of the day.",
                "This is a fact: SPF measure is non-linear, so SPF 15 protects from 93% of UV rays, SPF 30 protects from 97% of UV rays, and SPF 50 protects from 98.5% of UV rays. Anything above SPF 50 is usually pure marketing as the protection curve flattens out. Find out more in the Articles Page.",
                "This is a fact: Oxybenzone, octinoxate, avobenzone, and other UV filtering ingredients have been found to impaire algea and coral reefs and have an effect on the endocrine system of fish populations. Studies are investigating the effect of chemical sunscreen on the human body, but general suggestions state that mineral sunscreen appears to be less damaging to the endocrine system that is essential to homeostasis in the human body."];

var revealButton = document.getElementById("reveal");

revealButton.addEventListener("click", displayMyth);

function displayMyth(){
  explanation.innerHTML = expl[count];
  if (count==stateList.length){
    count=0;
  }
}
