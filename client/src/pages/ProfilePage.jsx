import LogoutScreen from "../components/LogoutScreen/LogoutScreen";

export default function ProfilePage ({ setIsAuthenticated }) {
  return (
    <div className="profile-page">
      <LogoutScreen setIsAuthenticated={setIsAuthenticated} />
    </div>
  )
}