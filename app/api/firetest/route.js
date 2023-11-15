import {db} from "@/lib/firebase/firebase-config"
async function GET (req, {params}) {
    const dbRef =  db.ref('/Rings')
    const dataSnapshot = await dbRef.once('value')
    const rtdData = dataSnapshot.val()
    return Response.json(rtdData)
}
 
export {GET}