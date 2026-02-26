import { AUTHENTICATED_USER, INSTAGRAM_BASE_URL } from "./route.js";

export class InstaClient{
    constructor({ auth}){
        this.Config = {auth}
    }
    async  getUser(payload) {
        let url = new URL(`${INSTAGRAM_BASE_URL}${AUTHENTICATED_USER}`);
        
        const fields = Array.isArray(payload.fields)
        ? payload.fields.join(",")
        : payload.fields;

        if(fields){
              url.searchParams.set("fields", fields);
       url.searchParams.set("access_token", this.Config.auth)
        }

       const res =  await fetch(url.href)
       return await res.json()
    }
async sendMessage(payload) {
    let url = `${INSTAGRAM_BASE_URL}${AUTHENTICATED_USER}/messages`
    const res = await fetch(url, {method:"POST", 
        headers:{
            Authorization:`Bearer ${this.Config.auth}`,
            "Content-Type": "application/json"
        }, body:JSON.stringify({
           "recipient":{
               "id":payload.senderId
           },
           "message":{
              "text":payload.message
           }
        })
     
    })

    return await res.json()
}
async sendAttachment(payload) {
    let url = `${INSTAGRAM_BASE_URL}${AUTHENTICATED_USER}/messages`
    const res = await fetch(url, {method:"POST", 
        headers:{
            Authorization:`Bearer ${this.Config.auth}`,
            "Content-Type": "application/json"
        }, body:JSON.stringify({
           "recipient":{
               "id":payload.senderId
           },
           "message":{
             "attachments":[ {
               "type":payload.type,
               "payload":{
                 "url":payload.url
               }
             }]
           }
        })
     
    })

    return await res.json()
}


}