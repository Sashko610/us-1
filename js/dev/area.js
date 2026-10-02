const phone = document.querySelector("#phone-input");
if (phone) {
  phone.addEventListener("input", () => {
    let d = phone.value.replace(/\D/g, "");
    if (d.startsWith("1")) d = d.slice(1);
    d = d.slice(0, 10);
    let v = "+1 ";
    if (d.length > 0) v += "(" + d.slice(0, 3);
    if (d.length >= 3) v += ") ";
    if (d.length > 3) v += d.slice(3, 6);
    if (d.length >= 6) v += "-";
    if (d.length > 6) v += d.slice(6, 10);
    phone.value = v;
  });
  phone.addEventListener("blur", () => {
    const digits = phone.value.replace(/\D/g, "").slice(-10);
    phone.setCustomValidity(digits.length === 10 ? "" : "Please enter a valid US phone number");
  });
}
const maxCharacters = 150;
const textElements = document.querySelectorAll(".post .text p");
textElements.forEach(function(element) {
  const originalText = element.textContent.trim();
  if (originalText.length > maxCharacters) {
    const truncatedText = originalText.slice(0, maxCharacters - 1) + "…";
    element.textContent = truncatedText;
  }
});
