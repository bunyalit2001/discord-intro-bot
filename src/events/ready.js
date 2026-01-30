import { client } from "../client.js";

client.once("ready", () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});
