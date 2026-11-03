function addRecommendation() {
  var recommendation = document.getElementById("new_recommendation");
  if (recommendation && recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");

    var openQuote = document.createElement("span");
    openQuote.innerHTML = "&#8220;";
    element.appendChild(openQuote);

    var messageSpan = document.createElement("span");
    messageSpan.className = "recommendation_text";
    messageSpan.textContent = " " + recommendation.value.trim() + " ";
    element.appendChild(messageSpan);

    var closeQuote = document.createElement("span");
    closeQuote.innerHTML = "&#8221;";
    element.appendChild(closeQuote);

    document.getElementById("all_recommendations").appendChild(element);

    recommendation.value = "";

    showPopup(true);
  }
}

function showPopup(bool) {
  var popup = document.getElementById("popup");
  if (!popup) return;
  if (bool) {
    popup.style.visibility = "visible";
    popup.style.display = "flex";
  } else {
    popup.style.visibility = "hidden";
    popup.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.search.includes("test_recommendation=1") ||
    window.location.hash === "#test-recommendation"
  ) {
    var recommendation = document.getElementById("new_recommendation");
    if (recommendation) {
      recommendation.value =
        "Kimheng is an exceptional software developer with outstanding problem-solving skills and technical leadership. Highly recommended!";
      addRecommendation();
      showPopup(false);
      var recSection = document.getElementById("recommendations");
      if (recSection) {
        window.scrollTo(0, recSection.offsetTop - 40);
      }
    }
  }
});