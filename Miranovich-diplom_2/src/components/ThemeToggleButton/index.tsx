import Button from "../Button";
import { useAppContext, useSnackBarContext } from "../../shared/contexts";
import { useLazyGetMeQuery } from "../../api/endpoints/user";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useAppContext();
  const snackBar = useSnackBarContext();
  const [trigger] = useLazyGetMeQuery();

  const onClick = () => {
    toggleTheme();
    snackBar.addSnackBar('Switched Theme')
  }

  return (
    <>
    <Button onClick={() => trigger()}>
      request ME
    </Button>
    <Button onClick={onClick}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </Button>
    </>

  );
};

export default ThemeToggleButton;