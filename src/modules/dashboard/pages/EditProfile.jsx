import styled from "styled-components";
import Grid from "modules/common/components/Grid";
import InputField from "modules/common/components/InputField";
import OutlinedButton from "modules/common/components/OutlinedButton";
import Card from "modules/common/components/Card";
import Topbar from "../components/Topbar";

const Form = styled.form`
  fieldset {
    border: none;

    &:not(:last-of-type) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
  }

  legend {
    font-size: 3.6rem;
    margin-bottom: 20px;

    &::first-of-type {
      margin-top: 0;
      padding-top: 0;
    }
  }
`;

const EditProfile = () => {
  return (
    <>
      <Topbar />
      <Card padding="20px">
        <Form>
          <fieldset>
            <legend>Home Contact</legend>
            <Grid columns={2} rows={2}>
              <InputField label="Street Address" />
              <InputField label="Home Phone" />
              <div>
                <Grid columns={3}>
                  <InputField label="City" />
                  <InputField label="State" />
                  <InputField label="Zip" />
                </Grid>
              </div>
              <InputField label="Email" />
            </Grid>
          </fieldset>
          <fieldset>
            <legend>Social Contact</legend>
            <Grid columns={3} rows={2}>
              <InputField label="LinkedIn" />
              <InputField label="Instagram" />
              <InputField label="Slack" />
              <InputField label="Facebook" />
              <InputField label="Twitter" />
              <InputField label="Discord" />
            </Grid>
          </fieldset>
          <fieldset>
            <legend>Social Contact</legend>
            <Grid columns={2}>
              <InputField label="Skills" />
            </Grid>
          </fieldset>
          <Grid>
            <OutlinedButton>Back</OutlinedButton>
            <OutlinedButton>Save</OutlinedButton>
          </Grid>
        </Form>
      </Card>
    </>
  );
};

export default EditProfile;
