import ProfileScreen from "../components/ProfileScreen/ProfileScreen";

export default function ProfilePage ({ setIsAuthenticated }) {
  return (
    <div className="profile-page">
      <ProfileScreen setIsAuthenticated={setIsAuthenticated} />
    </div>
  )
}