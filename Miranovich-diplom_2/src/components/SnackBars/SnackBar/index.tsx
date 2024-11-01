import { useSnackBarContext } from "../../../shared/contexts";
import Button from "../../Button";
import styles from "./styles.module.scss";

interface SnackBarProps {
  id: number,
  type: 'Error' | 'Ok',
  message: string,
}

export const SnackBar = ({ id, type, message }: SnackBarProps) => {
  const { onClose } = useSnackBarContext();

  const classNames = [styles['snack-bar'], styles[`snack-bar--${type}`]].join(' ');

  return (
    <div className={classNames}>
      <p>
        {message}
      </p>

      <Button onClick={() => onClose(id)}>X</Button>
    </div>
  )
}