# What is this?

This is a Slack online activator tool.

# How to use it?
1. Go to [api.slack.com](https://api.slack.com) and create a new app.
1. Select `from scratch` option, and paste `manifest.yml` content on this repository.
1. Memorize User OAuth Access Token.
1. Run this command `$ cp _env .env` and fill Environment Variables.
   1. If you wanna make Slack online status auto attach mode, run this command `$ yarn start:setAuto`
   2. If you wanna make Slack online status offline mode, run this command `$ yarn start:setAway`

# FYI

https://api.slack.com/methods/users.setPresence