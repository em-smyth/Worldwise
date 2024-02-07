import styles from "./User.module.css";
import { useAuth } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src="https://i.pravatar.cc/100?u=zz" alt={user.name} />
      <span>Welcome, Jack</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx` TICK
2) In the `Login.jsx` page, call `login()` from context TICK
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app` TICK
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
