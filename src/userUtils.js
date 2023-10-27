

import { Hanko } from "@teamhanko/hanko-elements";
import { redirect } from "react-router-dom";

const hankoApi = "https://c0cf08ab-bf6f-467b-b53b-20d2ab6f77dc.hanko.io";
const hanko = new Hanko(hankoApi);

export async function getUserData(setUserExists) {
  try {
    let userExists = false;

    
    const currentUser = hanko.user.getCurrent();

    if (currentUser !== null) {
      console.log('exists');
      userExists = true;
      const { id, email } = await currentUser;
      console.log(`user-id: ${id}, email: ${email}`);
    } else {
      console.log('not exists');      
      console.error("User is not authorized. Redirecting to another page.");      
      return <redirect to="/hanko-auth" />;
    }

    setUserExists(userExists); 
    return userExists; 
  } catch (error) {
    console.error("An error occurred:", error);
  }
}


