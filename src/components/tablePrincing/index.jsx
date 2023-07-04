import ButtonAd from "../button";
import InformationsPlan from "../informationsPlan";
import {
  Container,
  Content,
  HeaderPlan,
  Description,
  PricePlan,
  Plan,
  Price,
  Line,
  TopAdvantge,
  Label,
  ContentInformationsPlan,
} from "./style";

const TablePrincing = ({
  descript = "PARA VOCÊ DECOLAR",
  plan = "Ultimate",
  price = null,
  background = "white",
  color = " var(--color-gray-900)",
  writeButton = "Assinar Agora",
  buttonBackground,
  line = "var(--color-gray-700)",
  display = "none",
  labelColor,
  displayImage,
  informations = [],
}) => {
  return (
    <Container style={{ backgroundColor: background }}>
      <TopAdvantge style={{ display: display }}>
        <Label>MAIS VANTAJOSO</Label>
      </TopAdvantge>
      <Content>
        <HeaderPlan>
          <Description>{descript}</Description>
          <PricePlan>
            <Plan style={{ color: color }}>{plan}</Plan>
            <Price style={{ color: color }}>{price}</Price>
          </PricePlan>
        </HeaderPlan>
        <ButtonAd background={buttonBackground} color={color}>
          {writeButton}
        </ButtonAd>
        <Line style={{ backgroundColor: line }} />
        <ContentInformationsPlan>
          {informations.map((text, index) => (
            <InformationsPlan
              displayImage={displayImage}
              labelColor={labelColor}
            >
              {text}
            </InformationsPlan>
          ))}
        </ContentInformationsPlan>
      </Content>
    </Container>
  );
};

export default TablePrincing;
