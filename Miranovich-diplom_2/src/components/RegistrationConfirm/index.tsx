import { User } from "../../api/auth";
import Button from "../Button";
import Title from "../ThemeToggleButton/Title";
import styles from "./styles.module.scss";

interface RegistrationConfirmProps {
  user: User,
  goBack: () => void;
}

const RegistrationConfirm = ({ goBack, user }: RegistrationConfirmProps) => {
  return (
    <>
      <Title>We sent mail to your email: {user.email}</Title>
      <div className={styles.content}>
        Check your email to finish registration
        <Button fullWidth onClick={goBack}>
          OK
        </Button>
      </div>
    </>
  );
};

export default RegistrationConfirm;