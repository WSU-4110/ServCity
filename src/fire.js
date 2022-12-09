import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyD5pLun-IoYLihKfSZen9IKYjrAY46UkHo",
  authDomain: "login-system-b34be.firebaseapp.com",
  projectId: "login-system-b34be",
  storageBucket: "login-system-b34be.appspot.com",
  messagingSenderId: "88324755616",
  appId: "1:88324755616:web:4d764e3d3b1f2b6701b9c5",
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default fire;
export { auth};