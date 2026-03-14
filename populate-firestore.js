import admin from 'firebase-admin'
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

async function test() {
  try {
    const doc = await db.collection('test').doc('test').set({message: 'Hello Firestore!'})
    console.log('✅ Firestore connection works!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

test()