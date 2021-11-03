import { doc, getDoc } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";


export const CheckIfLogged = () => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        };
        // } else {
        //     console.log("Frytki");
        // };
    });

};