import { client } from "../client.js";
import { openIntroModal } from "../handlers/introModal.js";
import { submitIntro } from "../handlers/submitIntro.js";

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "intro_start") {
      await openIntroModal(interaction);
    }
  }

  if (interaction.isModalSubmit()) {
    if (interaction.customId === "intro_modal") {
      await submitIntro(interaction);
    }
  }
});
