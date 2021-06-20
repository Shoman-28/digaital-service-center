import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.Config";

export const insializUserLoging = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleLoging = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            return user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;
        });
};
export const handleSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        return signedOutUser;
      })
      .catch((err) => {
        console.log(err);
       
      });
  };