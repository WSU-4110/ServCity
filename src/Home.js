import React, { useEffect, useState } from "react";
// import {doc, collection } from "firebase/firestore";
// import { getDocs, deleteDoc, doc, collection } from "./firebase/firebase";
// import { db } from "./Database/firebase";
// import { collection, addDoc, doc, getDocs } from "firebase/firestore";
// import Comment from "./Comment";
// import ReplyPost from "../ReplyToPosts/ReplyPost";
// const current = new Date();
import { getInfo } from "./Database/firebase";
export default function Home() {
  const [partNum, SetPartNum] = useState("");
  const [ProductLink, SetProductLink] = useState("");
  const [ProductVideo, SetProductVideo] = useState("");

  const type1 = "Halogen";
  const type2 = "";
  // const CarcollectionRef = collection(
  //   db,
  //   "Cars/FordFocus2015/LightReplacementFront/HighBeam/LightType"
  // );
  useEffect(() => {
    getInfo(type1).then((results) => {
      console.log(results);
      for (const key of Object.keys(results)) {
        SetPartNum(results[key].PartNum);
        SetProductLink(results[key].ProductLink);
        SetProductVideo(results[key].ProductVideo);
      }
    });
    console.log(ProductLink);
  }, []);
  return (
    <>
      <div>
        <h1>Part Number</h1>
        <p> Number: {partNum}</p>

        <h1>Product Link</h1>
        <a href={`${ProductLink}`}> Link</a>

        <h1>Product Video</h1>
        <a href={`${ProductVideo}`}> Video</a>
      </div>
    </>
  );
}

// //array of posts existing in database - call to firebase
// const [postLists, setPostList] = useState([]);
// const collectionmessageRef = collection(db, "posts");

// //Front Lights DB
// const LightsDRL = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('DRL'));
// const LightsSignalF = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('Signal'));

// const LowBeamH = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('LowBeam').collection('LightType').doc('Halogen'));
// const LowBeamLED = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('LowBeam').collection('LightType').doc('LED'));
// const LowBeamHID = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('LowBeam').collection('LightType').doc('HID'));

// const HighBeamH = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('HighBeam').collection('LightType').doc('Halogen'));
// const HighBeamLED = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('HighBeam').collection('LightType').doc('LED'));
// const HighBeamX = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('HighBeam').collection('LightType').doc('Xenon'));

// //Rear Lights DB
// const LightsBrake = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementRear').doc('Brake'));
// const LightsSignalR = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementRear').doc('Signal'));

// const TailH = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementRear').doc('Tail').collection('LightType').doc('Halogen'));
// const TailLED = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementRear').doc('Tail').collection('LightType').doc('LED'));
// const TailHID = doc(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementRear').doc('Tail').collection('LightType').doc('HID'));

// //Front Brakes DB
// const CeramicF = doc(db.collection('Cars').doc('FordFocus2015').collection('BrakePadReplacement').doc('CeramicFront'));
// const OrganicF = doc(db.collection('Cars').doc('FordFocus2015').collection('BrakePadReplacement').doc('OrganicFront'));
// const SemiMetallicF = doc(db.collection('Cars').doc('FordFocus2015').collection('BrakePadReplacement').doc('SemiMetallicFront'));

// //Rear Brakes DB
// const CeramicR = doc(db.collection('Cars').doc('FordFocus2015').collection('BrakePadReplacement').doc('CeramicRear'));
// const OrganicR = doc(db.collection('Cars').doc('FordFocus2015').collection('BrakePadReplacement').doc('OrganicRear'));
// const SemiMetallicR = doc(db.collection('Cars').doc('FordFocus2015').collection('BrakePadReplacement').doc('SemiMetallicRear'));

// //Filter Change DB
// const CabinF = doc(db.collection('Cars').doc('FordFocus2015').collection('FilterChange').doc('AC-Cabin'));
// const EngineF = doc(db.collection('Cars').doc('FordFocus2015').collection('FilterChange').doc('EngineFilter'));
// const FuelF = doc(db.collection('Cars').doc('FordFocus2015').collection('FilterChange').doc('FuelFilter'));

// //Oil Change DB
// const FullyOil = doc(db.collection('Cars').doc('FordFocus2015').collection('OilChange').doc('FullySynthetic'));
// const Mineral = doc(db.collection('Cars').doc('FordFocus2015').collection('OilChange').doc('MineralOil'));
// const SemiOil = doc(db.collection('Cars').doc('FordFocus2015').collection('OilChange').doc('SemiSynthetic'));

// //Fluid Flush DB
// const PSFluid = doc(db.collection('Cars').doc('FordFocus2015').collection('FluidFlush').doc('PowerSteeringFluid'));
// const WSFluid = doc(db.collection('Cars').doc('FordFocus2015').collection('FluidFlush').doc('WindshieldWiperFluid'));

// //retrieve data from database - postCollectioonRef
// useEffect(() => {
//   const getPosts = async () => {
//     const data = await getDocs(FullyOil);
//     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getPosts();
//   const LightsDRL = collection(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('DRL'));
//   const LightsSignalF = collection(db.collection('Cars').doc('FordFocus2015').collection('LightReplacementFront').doc('Signal'));
//     Getinfo();

// });

// //   //method to delete posts
// //   const deletePost = async (id)=> {
// //     const postDoc = doc(db, "posts", id)
// //     await deleteDoc(postDoc)
// //   }

// return (
// <div className="homePage">
//     //post variable has id for list doc
//   {postLists.map((post) => {
//     return (
//       <div className="post">

//         <div className="postHeader">

//         </div>
//         <div className="postHeader">
//           <div className="title">
//             {" "}
//             <h1>{post.title}</h1>
//           </div>
//          </div>
//         <div className="postTextContainer">{post.postText}</div>
//         <div className="userName">
//             {" "}
//             <h3>@{post.userName}</h3>
//           </div>
//          <div className="postReply">
//          <Comment/>
//          </div>

//       </div>

//     );
//   })}

//  <>

//  </>
// </div>
//   );
// }
