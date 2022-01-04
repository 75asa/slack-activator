import { WebClient } from "@slack/web-api";

type Status = "away" | "auto";

export class Slack {
  #client;
  constructor(token: string | undefined) {
    if (!token) throw new Error("Slack token is required");
    this.#client = new WebClient(token);
  }

  async #getCurrentUserProfile() {
    const current = await this.#client.users.getPresence({
      user: "me",
    });

    if (!current.ok || !current.error || !current.profile)
      throw new Error("Failed to get current user profile");

    current.online;
  }

  async setStatus(inputStatus: Status) {
    await this.#client.users.setPresence({
      presence: inputStatus,
    });
  }
}
