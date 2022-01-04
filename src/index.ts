import { Slack } from "./Slack";

const main = async () => {
  const client = new Slack(process.env.SLACK_USER_TOKEN);
  await client.setStatus("away");
};

main();
