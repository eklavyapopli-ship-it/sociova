# Sociova

> Powerful Instagram Automation SDK for Node.js

Sociova is a developer-first Node.js SDK that simplifies working with
the Instagram Graph API. No more handling headers, access tokens, or raw
HTTP requests just install, initialize, and start sending messages.

------------------------------------------------------------------------

## Features

-   ✅ Simple client initialization
-   ✅ Send text messages
-   ✅ Send generic templates (cards, buttons, links)
-   ✅ Built-in queue support
-   ✅ Optional AI automation (Gemini-powered)
-   ✅ Webhook ready
-   ✅ Secure token-based authentication
-   ✅ Works with Node.js, Express, Next.js

------------------------------------------------------------------------

##  Installation

``` bash
npm install sociova
```


------------------------------------------------------------------------

## ⚡ Quick Start

### 1 Initialize Client

``` ts
import { InstaClient } from "sociova";

const client = new InstaClient({
  auth: process.env.AUTH_TOKEN!,
});
```

------------------------------------------------------------------------

### 2️ Send a Text Message

``` ts
await client.sendTextMessage({
  recipientId: "INSTAGRAM_USER_ID",
  message: "Hello from Sociova 🚀",
});
```

------------------------------------------------------------------------

### 3️ Send Generic Template

``` ts
await client.sendGenericTemplate({
  recipientId: "INSTAGRAM_USER_ID",
  elements: [
    {
      title: "Sociova Demo",
      image_url: "https://example.com/image.jpg",
      subtitle: "Instagram Automation Made Easy",
      default_action: {
        type: "web_url",
        url: "https://yourwebsite.com",
      },
      buttons: [
        {
          type: "web_url",
          url: "https://yourwebsite.com",
          title: "Visit Website",
        },
        {
          type: "postback",
          title: "Get Started",
          payload: "GET_STARTED",
        },
      ],
    },
  ],
});
```

------------------------------------------------------------------------



##  Webhook Example (Express)

``` ts
import express from "express";

const app = express();
app.use(express.json());

app.post("/webhooks/instagram", (req, res) => {
  res.sendStatus(200);
  console.log("Incoming Event:", req.body);
});
```



##  Roadmap

-   Advanced campaign builder
-   Analytics dashboard
-   Multi-account support
-   SaaS billing integration
-   Developer dashboard

------------------------------------------------------------------------

##  License

MIT

------------------------------------------------------------------------

##  Author

Built with ❤️ by Eklavya
