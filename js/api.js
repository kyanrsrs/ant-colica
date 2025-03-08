function updateProfileImage(userId) {
  fetch("https://api.lanyard.rest/v1/users/" + userId)
    .then((response) => response.json())
    .then((data) => {
      const user = data.data.discord_user;
      const profileImage = document.querySelector(
        '.profile-img[data-user-id="' + userId + '"]'
      );
      const usernameElement = document.querySelector(
        '.nickr[data-user-id="' + userId + '"]'
      );
      const subnickElement = document.querySelector(
        '.subnick[data-user-id="' + userId + '"]'
      ); // Elemento para o subnick
      const badgesContainer = document.querySelector(
        '.badges[badges-user-id="' + userId + '"]'
      ); // Container para as badges

      profileImage.src = user.avatar
        ? "https://cdn.discordapp.com/avatars/" +
          user.id +
          "/" +
          user.avatar +
          "." +
          (user.avatar.startsWith("a_") ? "gif" : "png") +
          "?size=512"
        : "https://cdn.discordapp.com/embed/avatars/1.png";

      // Define o display_name como o nome de usuário (nick)
      usernameElement.textContent = user.display_name
        ? user.display_name
        : user.username;

      // Define o username como o subnick
      subnickElement.textContent = user.username;

      // Limpa o conteúdo atual das badges
      badgesContainer.innerHTML = "";

      for (let badge of user.public_flags.badges) {
        let badgeElement = document.createElement("div");
        badgeElement.className = "badge";
        badgeElement.style.backgroundImage =
          badge.id === "premium"
            ? "url('https://raw.githubusercontent.com/Rep7/badges/main/svg/discordnitro.svg')"
            : "url('https://raw.githubusercontent.com/mezotv/discord-badges/" +
              badge.id +
              ".svg')";
        badgeElement.dataset.tooltip = badge.description;
        badgesContainer.appendChild(badgeElement);
      }
    })
    .catch((error) => {
      console.error("Error fetching profile data:", error);
    });
}

// Chamadas para atualizar as informações dos usuários
updateProfileImage("1308834018044940338");
updateProfileImage("446255997200367627");
updateProfileImage("1074866788518592522");
updateProfileImage("936500672793296947");
updateProfileImage("903417905151090698");
updateProfileImage("806786698641539092");
updateProfileImage("978322359222169642");
updateProfileImage("703722401950597170");
updateProfileImage("928474704052899861");
updateProfileImage("541313410319646732");
updateProfileImage("1297615751469072524");
