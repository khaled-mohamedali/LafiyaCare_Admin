import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration from google-services.json
const firebaseConfig = {
  apiKey: "AIzaSyBJ-QTYeFU7SvlOvmjXz1XF_Nbv-HKmoOA",
  authDomain: "lafiyacare-c9237.firebaseapp.com",
  projectId: "lafiyacare-c9237",
  storageBucket: "lafiyacare-c9237.firebasestorage.app",
  messagingSenderId: "787945298456",
  appId: "1:787945298456:android:73b04653dc49df6aacc16d",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const fetchPharmacies = async () => {
  const pharmaciesCollection = collection(db, "pharmacies_niamey");

  const snapshot = await getDocs(pharmaciesCollection);

  return snapshot.docs.map((document) => {
    const data = document.data();

    return {
      name: data.name || "", // Default to an empty string if missing
      phone: data.phone || "",
      location: data.address || "", // Map `addresse` to `location`
      placeId: data.placeId || "",
      isEmergency: data.isEmergency || false, // Default to `false` if missing
      openHours: data.openHours || "",
      rating: data.rating || 0, // Default to `0` if missing
    };
  });
};
