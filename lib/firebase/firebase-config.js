import admin from "firebase-admin"
import  {initializeApp, getApps} from "firebase-admin/app"
import {serviceKey} from "@/config/serviceKey" 
 
 
 
 if(!getApps().length){
  initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: "https://store-project-rings-default-rtdb.firebaseio.com",
    databaseAuthVariableOverride: {
      uid: "7Yu43LNXPIfr1EmhQpc1HHjTxTg1"
    }
  });
 }

// app/api/test/route.js
const db = admin.database()
 
export {db}
 