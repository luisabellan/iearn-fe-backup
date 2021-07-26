import styled from "styled-components";
import Sidebar from "modules/common/components/Sidebar";
import EditProfile from "./pages/EditProfile";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const AppView = styled.main`
  flex-grow: 1;
  background: #e5e5e5;
  padding: 20px 60px;
`;

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <AppView>
        <EditProfile />
      </AppView>
    </Container>
  );
};

export default Dashboard;
