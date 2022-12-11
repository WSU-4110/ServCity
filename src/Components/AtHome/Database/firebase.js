//
//firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import { collection, addDoc, doc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: "AIzaSyDQyk54JS7kuUtXKxfbhPpRmys6mTqstMk",
  authDomain: "swe-servicity.firebaseapp.com",
  projectId: "swe-servicity",
  storageBucket: "swe-servicity.appspot.com",
  messagingSenderId: "568848272474",
  appId: "1:568848272474:web:d6d0370c2c842b09c49c63",
  measurementId: "G-0K0ZZ569LE",
};

// Initialize Firebase
const app = initializeApp(firebaseApp);
const db = getFirestore(app);

//............................................
//............................................
// DATABASE CALLS FOR LIGHTS REPLACEMENT PARTS.
//............................................
//............................................

// LIGHTS REPLACEMENT FRONT
//............................................
// CALLING FOR DRL, SIGNAL LIGHT MODEL
export const Front_Light_DRL_Signal = async (
  make,
  model,
  year,
  lightlocation,
  lightModelFront
) => {
  const GetLightType = collection(
    db,
    `Cars/${make}${model}${year}/LightReplacement${lightlocation}`
  );
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(lightModelFront);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === lightModelFront) {
      Info.push({
        PartNum:
          lightsdata.docs[i]._document.data.value.mapValue.fields.PartNum
            .stringValue,
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};

// CALLING FOR LOWBEAM AND HIGHBEAM LIGHT MODEL
//.............................................
export const Front_Light_Low_High = async (
  make,
  model,
  year,
  lightlocation,
  lightModelFront,
  lightTypeFront
) => {
  const GetLightType = collection(
    db,
    `Cars/${make}${model}${year}/LightReplacement${lightlocation}/${lightModelFront}/LightType`
  );
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(lightTypeFront);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === lightTypeFront) {
      Info.push({
        PartNum:
          lightsdata.docs[i]._document.data.value.mapValue.fields.PartNum
            .stringValue,
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};

//............................................
// LIGHTS REPLACEMENT REAR
//............................................
// Signal, Break
export const Rear_Light_Signal_Break = async (
  make,
  model,
  year,
  lightlocation,
  lightModelRear
) => {
  const GetLightType = collection(
    db,
    `Cars/${make}${model}${year}/LightReplacement${lightlocation}`
  );
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(lightModelRear);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === lightModelRear) {
      Info.push({
        PartNum:
          lightsdata.docs[i]._document.data.value.mapValue.fields.PartNum
            .stringValue,
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};

// Tail
export const Rear_Light_Tail = async (
  make,
  model,
  year,
  lightlocation,
  lightModelRear,
  lightTypeRear
) => {
  const GetLightType = collection(
    db,
    `Cars/${make}${model}${year}/LightReplacement${lightlocation}/${lightModelRear}/LightType`
  );
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(lightsdata.docs);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === lightTypeRear) {
      Info.push({
        PartNum:
          lightsdata.docs[i]._document.data.value.mapValue.fields.PartNum
            .stringValue,
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};

//............................................
//............................................
// DATABASE CALLS FOR Oil  CHANGE PARTS.
//............................................
//............................................
export const Oil_Change = async (make, model, year, Oiltype) => {
  const GetLightType = collection(db, `Cars/${make}${model}${year}/OilChange`);
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(Oiltype);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === Oiltype) {
      Info.push({
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};
//............................................
//............................................
// DATABASE CALLS FOR Brakes PARTS.
//............................................
//............................................
export const Brake_Parts = async (make, model, year, BreakTypes) => {
  const GetLightType = collection(
    db,
    `Cars/${make}${model}${year}/BrakePadReplacement`
  );
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(lightsdata.docs);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === BreakTypes) {
      Info.push({
        PartNum:
          lightsdata.docs[i]._document.data.value.mapValue.fields.PartNum
            .stringValue,
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};

//............................................
//............................................
// DATABASE CALLS FOR Filter PARTS.
//............................................
//............................................
export const FIlter_Parts = async (make, model, year, FilterTypes) => {
  const GetLightType = collection(
    db,
    `Cars/${make}${model}${year}/FilterChange`
  );
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(lightsdata.docs);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === FilterTypes) {
      Info.push({
        PartNum:
          lightsdata.docs[i]._document.data.value.mapValue.fields.PartNum
            .stringValue,
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};
//............................................
//............................................
// DATABASE CALLS FOR Fluid Change.
//............................................
//............................................
export const Fluid_Change = async (make, model, year, FluidTypes) => {
  const GetLightType = collection(db, `Cars/${make}${model}${year}/FluidFlush`);
  const lightsdata = await getDocs(GetLightType);
  let Info = [];
  // console.log(lightsdata.docs);
  console.log(lightsdata.docs);
  for (var i = 0; i < lightsdata.docs.length; i++) {
    if (lightsdata.docs[i].id === FluidTypes) {
      Info.push({
        PartNum:
          lightsdata.docs[i]._document.data.value.mapValue.fields.PartNum
            .stringValue,
        ProductLink:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductLink
            .stringValue,
        ProductVideo:
          lightsdata.docs[i]._document.data.value.mapValue.fields.ProductVideo
            .stringValue,
      });
    }
  }
  return Info;
};
