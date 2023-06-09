import { firebaseConfig } from "@/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
export class FirebaseApp {
  static firebaseapp = undefined;
  static db = undefined;
  static init() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.db = getFirestore(this.firebaseapp);
  }
}
