// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";

// import { auth } from "../../firebase-config";
// import { useEffect } from "react";

// function UserRegister() {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [timedPopup, setTimedPopup] = useState(false);
//   const [trigger, setTrigger] = useState(true);
//   useEffect(() => {
//     setTimeout (() => {
//       setTimedPopup(true);
  
//     }, 3000);

//   }, []);

//   const [user, setUser] = useState({});

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <div className="PopUp">
//       <div className="Overlay"></div>
//       <div className="popup-inner">
//         <button className="close-btn" onClick={() => setTrigger(false)}>
//           close
//         </button>
//         <div>
//           <h3> Register User </h3>
//           <input
//             placeholder="Email..."
//             onChange={(event) => {
//               setRegisterEmail(event.target.value);
//             }}
//           />
//           <input
//             placeholder="Password..."
//             onChange={(event) => {
//               setRegisterPassword(event.target.value);
//             }}
//           />

//           <button onClick={register}> Create User</button>
//         </div>

//         <div>
//           <h3> Login </h3>
//           <input
//             placeholder="Email..."
//             onChange={(event) => {
//               setLoginEmail(event.target.value);
//             }}
//           />
//           <input
//             placeholder="Password..."
//             onChange={(event) => {
//               setLoginPassword(event.target.value);
//             }}
//           />

//           <button onClick={login}> Login</button>
//         </div>

//         <h4> User Logged In: </h4>
//         {user?.email}

//         <button onClick={logout}> Sign Out </button>
//       </div>
//     </div>
//   ) ;
// }

// export default UserRegister;
