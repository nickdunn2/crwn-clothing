import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyC6pZAeLiHbAa0KgGmolNkTAPhWSOhtDwc",
  authDomain: "crwn-clothing-db-7c287.firebaseapp.com",
  projectId: "crwn-clothing-db-7c287",
  storageBucket: "crwn-clothing-db-7c287.appspot.com",
  messagingSenderId: "646825184777",
  appId: "1:646825184777:web:0b4d44601c6a7d9cbbb2d8"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.error('error creating user', e.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Google Auth Config
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
