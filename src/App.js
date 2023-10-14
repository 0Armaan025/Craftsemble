import BecomeAnArtisanScreen from "./screens/become_an_artisan_screen/BecomeAnArtisanScreen";
import Communities from "./screens/communities/Communities";
import ExhibitionScreen from "./screens/exhibition_screen/ExhibitionScreen";
import HomeScreen from "./screens/home_screen/HomeScreen";
import ListACommunityScreen from "./screens/list_a_community_screen/ListACommunityScreen";
import WorkshopRegistrationScreen from "./screens/workshops_registration_screen/WorkshopsRegistrationScreen";
import WorkshopsScreen from "./screens/workshops_screen/WorkshopsScreen";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path = "/" element = {<HomeScreen />} />
        <Route path = "/explore-communities" element = {<Communities />} />
        <Route path = "/exhibition" element = {<ExhibitionScreen />} />
        <Route path = "/workshops" element = {<WorkshopsScreen />} />
        <Route path = "/workshop-registration" element = {<WorkshopRegistrationScreen />} />
        <Route path = "/become-an-artisan" element = {<BecomeAnArtisanScreen />} />
        <Route path = "/list-a-community" element = {<ListACommunityScreen />} />
      </Routes>

    </>
  );
}

export default App;
