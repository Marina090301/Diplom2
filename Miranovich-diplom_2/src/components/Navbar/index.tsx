import { Link } from "react-router-dom";
import Burger from "../Burger";
import ThemeToggleButton from "../ThemeToggleButton";
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import { useLogOut } from "../../shared/hooks/useLogout";
import UserInfo from "../../components/UserInfo";
import { useAppContext } from "../../shared/contexts";

const Navbar = () => {
  const { userToken } = useAppContext();
  const logOut = useLogOut();

  return (
    <div className={styles.navbar}>
      <Burger />
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
      <ThemeToggleButton />
      <Button onClick={logOut}> LOG OUT </Button>
      {userToken && <UserInfo />}
    </div>
  );
};

export default Navbar;