import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import UserLogOut from "./UserLogOut/UserLogOut";
export default function Aside({ children, user, setUser, styles }) {
  return (
    <aside className={styles}>
      <Logo />
      <Link to="/orders/new" className="button btn-sm">
        {children}
      </Link>
      <UserLogOut user={user} setUser={setUser} />
    </aside>
  );
}
