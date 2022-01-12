import { WebClient } from "@slack/web-api";

// type Status = "away" | "auto" | "online";
type Status = "away" | "auto";

type SlackStatusConstructor = {
  token?: string;
  userID?: string;
};

export class SlackStatus {
  #client;
  #USER_ID;
  constructor({ token, userID }: SlackStatusConstructor) {
    if (!token) throw new Error("Slack token is required");
    this.#client = new WebClient(token);
    if (!userID) throw new Error("Slack user id is required");
    this.#USER_ID = userID;
  }

  async #getPresence() {
    const current = await this.#client.users.getPresence({
      user: this.#USER_ID,
    });

    if (!current.ok || !current.error || !current.profile)
      throw new Error("Failed to get current user profile");
    return current;
  }

  async setStatus(status: Status) {
    try {
      const result = await this.#client.users.setPresence({
        presence: status,
      });
      if (!result.ok) throw new Error(result.error);
    } catch (e) {
      if (e instanceof Error) throw e;
    }
  }
}
