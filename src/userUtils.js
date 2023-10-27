// Import statements and hanko initialization

import { Hanko } from "@teamhanko/hanko-elements";
import { redirect } from "react-router-dom";

const hankoApi = "https://c0cf08ab-bf6f-467b-b53b-20d2ab6f77dc.hanko.io";
const hanko = new Hanko(hankoApi);

export async function getUserData(setUserExists) {
  try {
    let userExists = false;

    // Check if the user is authenticated
    const currentUser = hanko.user.getCurrent();

    if (currentUser !== null) {
      console.log('exists');
      userExists = true;
      const { id, email } = await currentUser.getInfo(); // Assuming `getInfo()` method exists
      console.log(`user-id: ${id}, email: ${email}`);
    } else {
      console.log('not exists');      
      console.error("User is not authorized. Redirecting to another page.");      
      return <redirect to="/hanko-auth" />;
    }

    setUserExists(userExists); // Update the state

    return userExists; // Return the userExists value
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export async function getUserEmail() {
  try {
    const currentUser = hanko.user.getCurrent();
    if (currentUser !== null) {
      const { email } = await currentUser.getInfo(); // Assuming `getInfo()` method exists
      console.log(`email: ${email}`);
      return email;
    }
    return null; // Return null if the user is not authenticated
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}

export async function getUserID() {
  try {
    const currentUser = hanko.user.getCurrent();
    if (currentUser !== null) {
      const { id } = await currentUser.getInfo(); // Assuming `getInfo()` method exists
      console.log(`user-id: ${id}`);
      return id;
    }
    return null; // Return null if the user is not authenticated
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}