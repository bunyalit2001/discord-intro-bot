import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} from "discord.js";

export async function sendWelcomeMessage(member) {
  const channel = member.guild.channels.cache.get(
    process.env.INTRO_CHANNEL_ID
  );
  if (!channel) return;

  const button = new ButtonBuilder()
    .setCustomId("intro_start")
    .setLabel("📝 เริ่มแนะนำตัว")
    .setStyle(ButtonStyle.Primary);

  const row = new ActionRowBuilder().addComponents(button);

  await channel.send({
    content: `ยินดีต้อนรับ ${member} 👋\nก่อนเข้าใช้งาน กรุณาแนะนำตัวเล็กน้อยครับ`,
    components: [row]
  });
}
