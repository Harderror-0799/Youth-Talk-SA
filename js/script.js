document.getElementById("newsletterForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("message").textContent = "Thank you for subscribing!";
});