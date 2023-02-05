import styled from "styled-components"
import TopBar from "./TopBar"

const MainLayout = ({children}) => {
  return <>
    <TopBar />
    <ContentWrapper>
    {children}
    </ContentWrapper>
  </>
}

export default MainLayout

const ContentWrapper = styled.div`
  margin: 50px 5vw;
`