import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import COLLAB_BADGE from '../../../assets/collab_badge.png';
import LOGO from '../../../assets/logo.png';
import { Hanko } from '@teamhanko/hanko-elements';
import { getUserData } from '../../../userUtils';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore'; // Import Firestore from Firebase Modular SDK

const Navbar = () => {
  const [userExists, setUserExists] = useState(false);
  const [isArtisan, setIsArtisan] = useState(false);


  async function checkDocumentExists(id) {
    const db = getFirestore();
    const docRef = doc(db, "users", id);
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.exists();
  }

  useEffect(() => {


    getUserData(setUserExists).then(async (doesUserExist) => {
      setUserExists(doesUserExist);


     
      if (doesUserExist) {
        console.log('here');
        const hankoApi = "https://c0cf08ab-bf6f-467b-b53b-20d2ab6f77dc.hanko.io";
        const hanko = new Hanko(hankoApi);
            
        const currentUser = hanko.user.getCurrent();    
        const { id } = await currentUser;
        console.log('here 2');
        if (currentUser) {
          console.log('here3');
          

          console.log("the id is", id)
          const artisanExists = await checkDocumentExists(id);
          console.log('here4');
          setIsArtisan(artisanExists);
          console.log(isArtisan)
          console.log('here5');
        }
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg " id='navbar' style={{background: "#b8c1ec",color: "white"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "30px", marginLeft: "20px", fontWeight: "bold" }}><img src={LOGO} height="80px" width="120px" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" id="navItem">
                <Link className="nav-link" style={{color: "#fffffe"}} to={userExists ? '/workshops' : '/hanko-auth'}>Workshops</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" style={{color: "#fffffe"}} to={userExists ? '/exhibition' : '/hanko-auth'}>Exhibition</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" style={{color: "#fffffe"}} to={userExists ? '/blogs' : '/hanko-auth'}>Blogs</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" style={{color: "#fffffe"}} to={userExists ? '/explore-communities' : '/hanko-auth'}>Explore Communities</Link>
              </li>
              <div className="spacer" style={{ marginLeft: "0rem" }}></div>
              {isArtisan ? (
                null
              ) : (
                <li className="nav-item">
                  <Link to={userExists ? '/become-an-artisan' : '/hanko-auth'}>
                    <input type="button" value="Become an artisan!" className='becomeArtisanBtn' />
                  </Link>
                </li>
              )}
            </ul>
            <div className="spacer" style={{ marginLeft: "3.8rem" }}></div>
            <div className="user-avatar">
              <Link to={userExists ? '/profile' : '/hanko-auth'}>
                <img
                  src="https://i.ytimg.com/an_webp/CY9tvwEXdW8/mqdefault_6s.webp?du=3000&sqp=CLzYpKkG&rs=AOn4CLCrzkVguWMS8WjJoggdaZP_9gYdew"
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", marginLeft: "20px", cursor: "pointer" }}
                />
              </Link>
            </div>
            <img src={COLLAB_BADGE} alt="collab" className='collabBadge' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
