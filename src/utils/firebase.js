import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYl8G1Ekc3md33M_O5Qd2fprlhTbzj4sQ",
  authDomain: "codecademy-ecom-page.firebaseapp.com",
  projectId: "codecademy-ecom-page",
  storageBucket: "codecademy-ecom-page.appspot.com",
  messagingSenderId: "320945077892",
  appId: "1:320945077892:web:4c10b26ab57ca97c6d0cd1",
  measurementId: "G-C22PVFK1N7",
};

export const app = initializeApp(firebaseConfig);
