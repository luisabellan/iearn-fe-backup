import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Brand from "./Brand";
import colors from "constants/colors";
import {
  CalendarIcon,
  CancelIcon,
  OverviewIcon,
  PeopleIcon,
  SettingsIcon,
  StoreIcon,
  SupportIcon,
  VideoIcon,
} from "assets/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 26rem;
  background: linear-gradient(0deg, #000000, #000000), #32384a;
`;

const LogoBox = styled.div`
  width: 100%;
  padding: 1rem;
`;

const MenuArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const TopMenu = styled.div`
  flex-grow: 1;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 1px 1px gray;
`;

const BottomMenu = styled.div`
  padding-bottom: 25px;
`;

const MenuItem = styled(NavLink)`
  height: 56px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;

  svg {
    color: inherit;
    margin-right: 2rem;
  }

  &:hover {
    color: ${colors.lightAsh};
    font-size: 1.8rem;

    svg {
      transform: scale(1.1);
    }

    svg path {
      color: ${colors.white};
    }
  }

  &.active {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #f2f2f2;
    font-weight: bold;
    border-left: 3px solid #dde2ff;
    background: rgba(159, 162, 180, 0.08);
  }
`;

const MenuListItem = ({ className, icon: Icon, text, ...rest }) => {
  return (
    <MenuItem className={className} {...rest}>
      <Icon />
      <span>{text}</span>
    </MenuItem>
  );
};

const Sidebar = () => {
  return (
    <Container>
      <LogoBox>
        <Brand />
      </LogoBox>
      <MenuArea>
        <TopMenu>
          <MenuListItem
            exact
            icon={OverviewIcon}
            text="Dashboard"
            to="/"
            activeClassName="active"
          />
          <MenuListItem
            icon={PeopleIcon}
            text="People"
            to="/people"
            activeClassName="active"
          />
          <MenuListItem
            icon={VideoIcon}
            text="Content"
            to="/content"
            activeClassName="active"
          />
          <MenuListItem
            icon={CalendarIcon}
            text="Events"
            to="/events"
            activeClassName="active"
          />
        </TopMenu>
        <BottomMenu>
          <MenuListItem
            icon={StoreIcon}
            text="Store"
            to="/store"
            activeClassName="active"
          />
          <MenuListItem
            icon={SettingsIcon}
            text="Settings"
            to="/settings"
            activeClassName="active"
          />
          <MenuListItem
            icon={SupportIcon}
            text="Support"
            to="/support"
            activeClassName="active"
          />
          <MenuListItem
            icon={CancelIcon}
            text="Logout"
            to="/logout"
            activeClassName="active"
          />
        </BottomMenu>
      </MenuArea>
    </Container>
  );
};

export default Sidebar;
