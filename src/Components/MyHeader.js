import styled from "styled-components";

const MyHeader = ({left, center, right}) => {
  return (
    <Header>
      <HeaderContent width={"25%"} position={"start"}>
        {left}
      </HeaderContent>
      <HeaderContent width={"50%"} position={"center"}>
        <h2>{center}</h2>
      </HeaderContent>
      <HeaderContent width={"25%"} position={"right"}>
        <p>{right}</p>
      </HeaderContent>
    </Header>
  )
}

const Header = styled.header`
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  height: 76px;
  & > div {
    display: flex;
  }
`

const HeaderContent = styled.div`
  width: ${props=>props.width};
  justify-content: ${props=>props.position};
  cursor: ${props => props.position === "start" ? "pointer": null};
`
export default MyHeader