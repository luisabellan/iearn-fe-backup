import React from 'react';
import {Card} from "reactstrap";

//Components
import Desktop from "./contactSettingsDesktop.js";
import Mobile from "./contactSettingsMobile.js";

const index = () => {
  return (
    <>
      <Card className="mobile-hidden tablet-hidden">
        <Desktop/>
      </Card>
      <Card className="tab-hidden desktop-hidden">
        <Mobile/>
      </Card>
    </>
  )
}

export default index;
