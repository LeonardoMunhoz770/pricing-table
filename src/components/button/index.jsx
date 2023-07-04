import { ButtonAdd } from "./style";

const ButtonAd = ({
  children,
  border = "1px solid var(--color-gray-800)",
  background = "white",
  color = "var(--color-gray-800)",
  style,
}) => {
  return (
    <ButtonAdd
      style={{
        border: border,
        backgroundColor: background,
        color: color,
        style,
      }}
    >
      {children}
    </ButtonAdd>
  );
};

export default ButtonAd;
