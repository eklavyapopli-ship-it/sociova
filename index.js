import { InstaClient } from "./client.js";
import "dotenv/config";

const client = new InstaClient({
  auth: process.env.AUTH_TOKEN
});

async function trialButtonMessage() {
  const response = await client.sendButtonTemplate({       
    recipientId: process.env.RECIPIENT_ID,    
    text: "What would you like to do?",
    buttons: [
      {
        type: "web_url",
        url: "https://humkind.in",
        title: "Visit Website"
      },
      {
        type: "postback",
        payload: "GET_STARTED_CLICKED",
        title: "Get Started"
      }
    ]
  });

  console.log("Response:", response);
}

trialButtonMessage();