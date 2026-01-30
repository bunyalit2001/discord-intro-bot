import { client } from "../client.js";
import { sendWelcomeMessage } from "../handlers/welcomeMessage.js";

client.on("guildMemberAdd", async (member) => {
  try {
    // ให้ role ผู้มาเยือน
    const role = member.guild.roles.cache.get(
      process.env.VISITOR_ROLE_ID
    );
    if (role) {
      await member.roles.add(role);
    }

    await sendWelcomeMessage(member);
  } catch (err) {
    console.error("guildMemberAdd error:", err);
  }
});
