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
}