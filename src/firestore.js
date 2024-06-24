import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addToRentals = async (product, userId, rentalDetails) => {
  try {
    const docRef = await addDoc(collection(db, "rentals"), {
      userId,
      productId: product.id,
      productName: product.productName,
      productImage: product.productImage,
      productHarga: product.productHarga,
      productDistance: product.productDistance,
      productRating: product.productRating,
      rentalStartDate: rentalDetails.startDate,
      rentalEndDate: rentalDetails.endDate,
      rentalDuration: rentalDetails.rentalDuration,
      deposit: Number(rentalDetails.deposit),
      quantity: rentalDetails.jumlahBarang,
      rentalStatus: "pending",
      rentedAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
