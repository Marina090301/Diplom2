import { useState } from "react";
import "./style.css";

interface BurgerProps {
  initialIsOpen?: boolean;
  onToggleMenu?: (isOpen: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({
  initialIsOpen = false,
  onToggleMenu,
}) => {
  const [isOpen, setIsMenuOpen] = useState(initialIsOpen);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;

    setIsMenuOpen(newIsOpen);
    onToggleMenu?.(newIsOpen);
  };

  return (
    <div className="burgerBtnWrap">
      <button className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </div>
  );
};

export default Burger;