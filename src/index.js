import "dotenv/config";
import { client } from "./client.js";

import "./events/ready.js";
import "./events/guildMemberAdd.js";
import "./events/interactionCreate.js";

client.login(process.env.DISCORD_TOKEN);
