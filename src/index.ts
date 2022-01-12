import { SlackStatus } from "./SlackStatus";

const main = async () => {
  const status = new SlackStatus({
    token: process.env.SLACK_USER_TOKEN,
    userID: process.env.SLACK_USER_ID,
  });
  await status.setStatus("away");
};

main();
