import { InstaClient } from "./client.js";
import "dotenv/config"
const client = new InstaClient({
    
    auth:process.env.AUTH_TOKEN
})

const a = await client.getUser({
    fields:"username, user_id"
})
const b = await client.sendMessage({
    senderId:process.env.SENDER_ID,
    message:"hi"
})
console.log(b)


