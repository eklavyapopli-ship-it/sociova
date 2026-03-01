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
               "id":payload.recepientId
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
               "id":payload.recepientId
           },
           "message":{
             "attachments":payload.attachments
           }
        })
     
    })

    return await res.json()
}
async sendSticker(payload) {
    let url = `${INSTAGRAM_BASE_URL}${AUTHENTICATED_USER}/messages`
    const res = await fetch(url, {method:"POST", 
        headers:{
            Authorization:`Bearer ${this.Config.auth}`,
            "Content-Type": "application/json"
        }, body:JSON.stringify({
           "recipient":{
               "id":payload.recepientId
           },
               message: {
        attachment: {
          type: payload.sticker
        }
      }
        })
     
    })

    return await res.json()
}
async sendReaction(payload) {

  const url = `${INSTAGRAM_BASE_URL}${AUTHENTICATED_USER}/messages`;

  const body = {
    recipient: { id: String(payload.recepientId) },
    sender_action: payload.action ?? "react", // "react" or "unreact"
    payload: {
      message_id: String(payload.messageId),
    },
  };

  if ((payload.action ?? "react") !== "unreact") {
    body.payload.reaction = payload.reaction; 
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.Config.auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
}
async sendButtonTemplate(payload) {


  const url = `${INSTAGRAM_BASE_URL}/${AUTHENTICATED_USER}/messages`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.Config.auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: {
        id: payload.recipientId
      },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "button",
            text: payload.text,
            buttons: payload.buttons
          }
        }
      }
    })
  });

  return await res.json();
}

async sendPublishedPosts(payload) {
  const url = `${INSTAGRAM_BASE_URL}/${AUTHENTICATED_USER}/messages`;
    const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.Config.auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: {
        id: payload.recipientId
      },
      message: {
        attachment: {
          type: "MEDIA_SHARE",
          payload: {
            id:payload.postId
          }
        }
      }
    })
  });
  return await res.json()
}


async  sendGenericTemplate( payload) {
  const url = `${INSTAGRAM_BASE_URL}${AUTHENTICATED_USER}/messages`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.Config.auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: { id: payload.recipientId },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "generic",
            elements: payload.elements,
          },
        },
      },
    }),
  });

  return await res.json();
}
// PUBLISHING POSTS 
async directPublishPost(payload){
    const url = `${INSTAGRAM_BASE_URL}/26338849465738403/media`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.Config.auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "caption":payload.caption,
      "image_url":payload.image_url
    }),
  });
  const data =  await res.json()
  const check = await this.publishPostResume({
    
    creation_id: await data.id
  })
  return await check
}

// Not direct
async createMedia(payload){
    const url = `${INSTAGRAM_BASE_URL}/26338849465738403/media`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.Config.auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "caption":payload.caption,
      "image_url":payload.image_url
    }),
  });
  const data =  await res.json()
  return data
}
async publishPostResume(payload){
    const url = `${INSTAGRAM_BASE_URL}/26338849465738403/media_publish`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.Config.auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({  
          "creation_id":payload.creation_id
         }),
  });
  return await res.json()
}



}



