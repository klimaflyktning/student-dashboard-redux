// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'
import {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_DATABASE_URL,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID
} from 'react-native-dotenv'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCf1VXDnzdmkjYiTYMsf0OXClSom8nDpFw',
  authDomain: 'ikt-205-project-startup.firebaseapp.com',
  databaseURL:
        'https://ikt-205-project-startup-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ikt-205-project-startup',
  storageBucket: 'ikt-205-project-startup.appspot.com',
  messagingSenderId: '272589993346',
  appId: '1:272589993346:web:c3273e6bebf36895c3cb9b',
  measurementId: 'G-BCN06KH9R5'
}

/* const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};
*/
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

export const db = getFirestore(app)
