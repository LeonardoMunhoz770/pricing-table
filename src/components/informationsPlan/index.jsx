import check from "../../assets/check.webp";
import info from "../../assets/info.webp";

import { Container, ContentInformation, Check, Descript, Info } from "./style";

const InformationsPlan = ({
  displayImage = "block",
  children,
  labelColor = "var(--color-gray-600)",
}) => {
  return (
    <Container>
      <ContentInformation>
        <Check src={check} />
        <Descript style={{ color: labelColor }}>{children}</Descript>
      </ContentInformation>
      <Info style={{ display: displayImage }} src={info} />
    </Container>
  );
};

export default InformationsPlan;
