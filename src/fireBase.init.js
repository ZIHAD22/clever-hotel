// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgCJzYU7F_5mcafyhgjAvnWsQr5b-nd8U',
  authDomain: 'clever-hotel.firebaseapp.com',
  projectId: 'clever-hotel',
  storageBucket: 'clever-hotel.appspot.com',
  messagingSenderId: '931997420690',
  appId: '1:931997420690:web:6796e6f741cf29b26fea4b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
