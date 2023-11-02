import { useSearchParams } from "react-router-dom";
import MenuProfile from "../../Components/MenuProfile/MenuProfile";
import Profile from "../../Components/Profile";

const ProfileHome = () => {
  const [searchParams] = useSearchParams();
  const marketProfileId = decodeURIComponent(searchParams.get("profileid"));
  return (
    <>
      <Profile marketProfileId={marketProfileId} />
      <MenuProfile />
    </>
  );
};

export default ProfileHome;
