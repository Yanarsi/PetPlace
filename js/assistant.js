document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const sendButton = document.getElementById("sendMessage");
  const chatMessages = document.getElementById("chatMessages");

  if (!chatInput || !sendButton || !chatMessages) return;

  // Send message when clicking the send button
  sendButton.addEventListener("click", sendMessage);

  // Send message when pressing Enter
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessage("user", message);

    // Clear input
    chatInput.value = "";

    // Simulate assistant response (with typing indicator)
    showTypingIndicator();

    // Generate response based on user input
    setTimeout(() => {
      removeTypingIndicator();
      const response = generateResponse(message);
      addMessage("assistant", response);
    }, 1500);
  }

  function addMessage(role, content) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat__message chat__message--${role}`;

    if (role === "assistant") {
      messageDiv.innerHTML = `
                  <div class="chat__avatar">
                      <img src="img/assistant-avatar.jpg" alt="Ассистент" class="chat__avatar-img">
                  </div>
                  <div class="chat__bubble">
                      <div class="chat__sender">PetPalace Ассистент</div>
                      <div class="chat__text">${content}</div>
                  </div>
              `;
    } else {
      messageDiv.innerHTML = `
                  <div class="chat__bubble">
                      <div class="chat__text">${content}</div>
                  </div>
              `;
    }

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className =
      "chat__message chat__message--assistant typing-indicator";
    typingDiv.innerHTML = `
              <div class="chat__avatar">
                  <img src="img/assistant-avatar.jpg" alt="Ассистент" class="chat__avatar-img">
              </div>
              <div class="chat__bubble">
                  <div class="chat__sender">PetPalace Ассистент</div>
                  <div class="chat__text">
                      <span class="typing-dots">
                          <span>.</span><span>.</span><span>.</span>
                      </span>
                  </div>
              </div>
          `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  function generateResponse(message) {
    // Simple response generation based on keywords
    message = message.toLowerCase();

    if (
      message.includes("корм") ||
      message.includes("питание") ||
      message.includes("еда")
    ) {
      return "Для кошек с чувствительным пищеварением рекомендую корм с легкоусвояемыми белками, например, из курицы или индейки. Важно выбирать корм без зерновых добавок и с пребиотиками для поддержки здоровой микрофлоры кишечника. Я подобрал несколько вариантов в разделе рекомендаций.";
    } else if (message.includes("игрушк")) {
      return "Для активных кошек рекомендую интерактивные игрушки, которые стимулируют охотничий инстинкт. Например, игрушки с перьями, мячики с колокольчиками или лазерные указки. Регулярные игры помогут вашему питомцу оставаться активным и здоровым.";
    } else if (message.includes("вакцин") || message.includes("прививк")) {
      return "Для взрослых кошек рекомендуется ежегодная вакцинация против бешенства, панлейкопении, калицивироза и ринотрахеита. Я могу добавить напоминание о вакцинации в ваш календарь. Когда была последняя прививка у вашего питомца?";
    } else if (message.includes("вес") || message.includes("диет")) {
      return "Для британской короткошерстной кошки весом 5.2 кг рекомендуется около 240-260 ккал в день. Если вы заметили, что ваш питомец набирает вес, стоит уменьшить порции и увеличить физическую активность. Я могу составить для вас план питания с учетом контроля веса.";
    } else if (message.includes("шерст") || message.includes("вычес")) {
      return "Британских короткошерстных кошек рекомендуется вычесывать 1-2 раза в неделю специальной щеткой. В период линьки (весна и осень) частоту можно увеличить до 3-4 раз в неделю. Это поможет уменьшить количество шерсти, которую кошка проглатывает при вылизывании, и предотвратить образование комков шерсти в желудке.";
    } else {
      return "Спасибо за ваш вопрос! Я проанализирую профиль вашего питомца и предоставлю персонализированные рекомендации. Вы можете уточнить, что именно вас интересует: питание, уход, здоровье или поведение?";
    }
  }

  // Add CSS for typing indicator
  const style = document.createElement("style");
  style.textContent = `
          .typing-dots span {
              animation: typingDot 1.4s infinite;
              animation-fill-mode: both;
              font-size: 1.5rem;
              line-height: 0;
          }
          
          .typing-dots span:nth-child(2) {
              animation-delay: 0.2s;
          }
          
          .typing-dots span:nth-child(3) {
              animation-delay: 0.4s;
          }
          
          @keyframes typingDot {
              0% { opacity: 0.2; }
              20% { opacity: 1; }
              100% { opacity: 0.2; }
          }
      `;
  document.head.appendChild(style);
});
