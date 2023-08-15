import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB7AitSuegFpLxFUyCsn6P9HhzOEqFGRws',
  authDomain: 'email-simulation-396007.firebaseapp.com',
  projectId: 'email-simulation-396007',
  storageBucket: 'email-simulation-396007.appspot.com',
  messagingSenderId: '565535016155',
  appId: '1:565535016155:web:82fdf52ad8b5309c6138fe'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
