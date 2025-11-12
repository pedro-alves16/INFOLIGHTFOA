document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const msg = document.getElementById("msg-status");
  msg.textContent = "Mensagem enviada com sucesso!";
  msg.classList.add("text-success");

  setTimeout(() => {
    msg.textContent = "";
    this.reset();
  }, 4000);
});
