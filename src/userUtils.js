// userUtils.js
import { Hanko } from '@teamhanko/hanko-elements';
import { Redirect } from 'react-router-dom';

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
      const { id, email } = await currentUser;
      console.log(`user-id: ${id}, email: ${email}`);
    } else {
      console.log('not exists');
      // Handle the case where the user is not authorized
      console.error("User is not authorized. Redirecting to another page.");
      // Redirect to the specified page
      window.location.href = 'https://localhost:3000/hanko-auth';
      return; // Return here to prevent setUserExists from being called
    }

    setUserExists(userExists); // Update the state

    return userExists; // Return the userExists value
  } catch (error) {
    console.error("An error occurred:", error);
   
  }
}
