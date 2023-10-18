import BecomeAnArtisanScreen from "./screens/become_an_artisan_screen/BecomeAnArtisanScreen";
import Communities from "./screens/communities/Communities";
import MyCommunitiesScreen from "./screens/communities/my_communites_screen/MyCommunitiesScreen";
import ExhibitionScreen from "./screens/exhibition_screen/ExhibitionScreen";
import HomeScreen from "./screens/home_screen/HomeScreen";
import ListACommunityScreen from "./screens/list_a_community_screen/ListACommunityScreen";
import ProfileScreen from "./screens/profile_screen/ProfileScreen";
import WorkshopRegistrationScreen from "./screens/workshops_registration_screen/WorkshopsRegistrationScreen";
import WorkshopsScreen from "./screens/workshops_screen/WorkshopsScreen";
import { Route, Link, Routes } from "react-router-dom";
import ErrorPage from "./screens/error_page/ErrorPage";
import DashboardScreen from "./screens/dashboard_screen/DashboardScreen";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/explore-communities" element={<Communities />} />
        <Route path="/exhibition" element={<ExhibitionScreen />} />
        <Route path="/workshops" element={<WorkshopsScreen />} />
        <Route path="/workshop-registration" element={<WorkshopRegistrationScreen />} />
        <Route path="/become-an-artisan" element={<BecomeAnArtisanScreen />} />
        <Route path="/list-a-community" element={<ListACommunityScreen />} />
        <Route path="/my-communities" element={<MyCommunitiesScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="" element={<ErrorPage />} />
        <Route element={<ErrorPage />} />
        <Route path = "/dashboard" element={<DashboardScreen/>}/>
      </Routes>

    </>
  );
}

export default App;
