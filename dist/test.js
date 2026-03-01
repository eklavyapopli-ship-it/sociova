import { InstaClient } from "./client.js";


const client = new InstaClient({
    auth:"auth token"
    
})
// const a =  await client.createContainer({
    
//     creation_id:"17851825251633651"
// })
const a = await client.publishPost({
    caption:"this is humkind tech",
    image_url:"https://humkind.in/logo4.png"
})
console.log(a)
// 17851824231633651