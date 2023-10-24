// userUtils.js
import { Hanko } from '@teamhanko/hanko-elements';

const hankoApi = "https://c0cf08ab-bf6f-467b-b53b-20d2ab6f77dc.hanko.io";
const hanko = new Hanko(hankoApi);

export async function getUserData(setUserExists) {
  let userExists = false;

  if (hanko.user.getCurrent() !== null) {
    userExists = true;
  }

  const { id, email } = await hanko.user.getCurrent();
  console.log(`user-id: ${id}, email: ${email}`);

  setUserExists(userExists); // Update the state
  return userExists; // Return the userExists value
}
