import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAadQvCGm-NqCw5JgqE4zN_830zzHmSA9A",
  authDomain: "todo-app-b65ad.firebaseapp.com",
  projectId: "todo-app-b65ad",
  storageBucket: "todo-app-b65ad.appspot.com",
  messagingSenderId: "691812069911",
  appId: "1:691812069911:web:9af989e243e61a32126252"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth