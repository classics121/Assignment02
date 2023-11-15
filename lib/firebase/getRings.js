import { db } from "./firebase-config"

export async function getRings (){
    const dbRef =  db.ref('/Rings')
    const dataSnapshot = await dbRef.once('value')
    return dataSnapshot.val()

}

