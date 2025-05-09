import { useState } from "react";
export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export const usePharmacies = () => {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);

  return { pharmacies, setPharmacies };
};

export interface Pharmacy {
  name: string;
  phone: string;
  location: addresse; // This can map to `addresse` in Firestore
  placeId: string;
  isEmergency: boolean;
  openHours: string;
  rating: number;
}

interface addresse {
  latitude: string;
  longitude: string;
}
