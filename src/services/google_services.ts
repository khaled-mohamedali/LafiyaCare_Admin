import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import type { Pharmacy } from "./services";

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
const pharmacy_collection = "pharmacies_niamey";

export const fetchPharmacies = async () => {
  const pharmaciesCollection = collection(db, pharmacy_collection);

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

export const updatePharmacy = async (pharmacy: Pharmacy) => {
  const docRef = doc(db, pharmacy_collection, pharmacy.placeId);

  try {
    await updateDoc(docRef, {
      name: pharmacy.name,
      phone: pharmacy.phone,
      location: pharmacy.location,
      isEmergency: pharmacy.isEmergency,
      openHours: pharmacy.openHours,
      rating: pharmacy.rating,
    });

    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

export const fecthEmergencyPharmacies = async () => {
  const docRef = doc(db, "pharmacies_de_garde", "current");

  try {
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();

      return [data.Emergencies || [], docRef];
    } else {
      console.error("Document does not exist");
      return [[], docRef]; // Return an empty array if the document doesn't exist
    }
  } catch (error) {
    console.error("Error fetching emergencies:", error);
    return [[], docRef]; // Return an empty array in case of an error
  }
};

export const displayPharmacies = async () => {
  const [currentEmergencies] = await fecthEmergencyPharmacies();

  return currentEmergencies.map((e: EmergencyPharmacy) => {
    return {
      name: e.name,
      id: e.id,
    };
  });
};

export const addEmergencyPharmacy = async (
  emergencyPharmacy: EmergencyPharmacy
) => {
  const [currentEmergencies, docRef] = await fecthEmergencyPharmacies();

  //checking if the pharmacy already exist
  const alreadyExists = currentEmergencies.some(
    (pharmacy: EmergencyPharmacy) => pharmacy.id === emergencyPharmacy.id
  );

  if (!alreadyExists) {
    const updatedEmergencies = [...currentEmergencies, emergencyPharmacy];
    //populating firebase

    await await updateDoc(docRef, { Emergencies: updatedEmergencies });
    console.log("Pharmacy added successfully");
  }
};

export const deleteEmergencyPharmacy = async (id: string) => {
  try {
    const [currentEmergencies, docRef] = await fecthEmergencyPharmacies();

    const updateEmergencyList = currentEmergencies.filter(
      (pharmacy: EmergencyPharmacy) => pharmacy.id !== id
    );

    updateDoc(docRef, { Emergencies: updateEmergencyList });

    return updateEmergencyList;
  } catch (error) {
    console.log(error);
  }
};

export interface EmergencyPharmacy {
  id: string;
  name: string;
}

/**0
"ChIJGcEpDK2d2hERptda72kT9yw"
(chaîne)


1
"ChIJ6wFPtR6e2hERA2VJT3Nvwrs"
(chaîne)


2
"ChIJGbTgPime2hERQkcKRjTOPuo"
(chaîne)


3
"ChIJvS4Ds5t10BERPCRWono6Qv0"
(chaîne)


4
"ChIJYRpRcACf2hERISU8mAyxeyU"
(chaîne)


5
"ChIJ_1NbXPad2hERCJCrGKVv8t4"
(chaîne)


6
"ChIJ0Vwr9UWe2hER46ucWS37TTU"
(chaîne)


7
"ChIJiV2ia7yf2hERpN97Mbq1kxM"
(chaîne)


8
"ChIJXy52536f2hERxFwcELzsWrM"
(chaîne)


9
"ChIJqQwLlAae2hERvXx_zNYiLOM"
(chaîne)


10
"ChIJv3yTLLaf2hERZmX7MQvwtcs"
(chaîne)


11
"ChIJxdOqfsh10BERAHce4mB4viI"
(chaîne)


12
"ChIJ6XaW6D110BER9y0l9zbqE5w"
(chaîne)


13
"ChIJLbJKXw510BER6I2gS17Wr2U"
(chaîne)


14
"ChIJdSB_KgCf2hER8aeA0EFcyjQ"
(chaîne)


15
"ChIJtW8mubMK0BERlrpMzum0IcU"
(chaîne)


16
"ChIJkfA-kA0L0BER51Ypc9MVKvI"
(chaîne)


17
"ChIJ_Vgxqb0L0BERhaDn_NSKFFI"
(chaîne)


18
"ChIJ014scmQL0BER-sDUzbKSSE0"
(chaîne)


19
"ChIJe7BTk9Z10BERu9fwJaflWT0" */
