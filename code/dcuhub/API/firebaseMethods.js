import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export async function registration(lastName, firstName, code,location, dayofbirth,link,image) {
  try {
    
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("userProfile")
      .doc(currentUser.uid)
      .set({
        bio: lastName,
        firstName : firstName,
        code: code,
        location: location,
        dayofbirth : dayofbirth,
        link : link,
        image: image

      });
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

