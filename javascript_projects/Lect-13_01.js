const quotes = [
  "Success is built on consistency, not motivation.",
  "Small daily improvements create massive long-term results.",
  "Discipline will take you where motivation cannot.",
  "Focus on progress, not perfection.",
  "Your future depends on what you do today.",
  "Hard work beats talent when talent avoids work.",
  "Every expert was once a beginner.",
  "Dream big, start small, act now.",
  "Patience and persistence are powerful combinations.",
  "Comfort zones destroy growth.",
  "The best investment is in yourself.",
  "Action removes fear.",
  "You become what you repeatedly do.",
  "Winners focus on solutions, not excuses.",
  "Growth begins at the end of your excuses.",
  "Consistency compounds faster than intensity.",
  "Learn continuously to stay valuable.",
  "Confidence comes from preparation.",
  "Difficult roads often lead to strong people.",
  "Your mindset shapes your reality."
];

const button=document.querySelector("button");
const quote=document.querySelector("h1");
button.addEventListener("click",()=>{
    const index=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[index];
})