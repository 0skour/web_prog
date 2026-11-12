function describeRating(stars) {
  if (stars >= 5) return "Masterpiece - a must-watch!";
  if (stars >= 4) return "Great movie, highly recommended.";
  if (stars >= 3) return "Decent, worth a watch on a quiet night.";
  if (stars >= 2) return "Meh - only for die-hard fans.";
  return "Skip it.";
}
document.getElementById("go").addEventListener("click", () => {
  const s = Number(document.getElementById("stars").value);
  document.getElementById("result").textContent = "★".repeat(s) + " " + describeRating(s);
});
