import React, { Component } from 'react';

import HeaderGuest from 'ui/organisms/HeaderGuest';
import HeaderUser from 'ui/organisms/HeaderUser';
import Label from 'ui/atoms/Label';
// import Link from 'ui/atoms/Link';
import HighLightText from 'ui/atoms/HighLight';

import Dropdown from 'ui/molecules/Dropdown';
import DropdownItem from 'ui/molecules/DropdownItem';
import TextButton from 'ui/molecules/TextButton';
import PrimaryButton from 'ui/molecules/PrimaryButton';
import Block from 'ui/molecules/BlockComponent';
import WayBlock from 'ui/molecules/WayBlock';
import BlockBorder from 'ui/molecules/BlockBorder';
import TextFieldButton from 'ui/molecules/TextFieldButton';
import PageTemplates from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import LogoSVG from 'assets/images/react.svg';
import Spinner from 'ui/atoms/Spinner';
import AddButton from 'ui/molecules/AddButton';
import Tabs from 'ui/molecules/Tabs';
import TabItem from 'ui/molecules/TabItem';

class TestPage extends Component {
  render() {
    const { auth } = this.props;

    return (
      <PageTemplates
        header={auth ? <HeaderUser /> : <HeaderGuest />}
      >
        <Container>
          <Block title="Primary button">
            <PrimaryButton>Primary button</PrimaryButton>
          </Block>
          <Block title="Label">
            <Label>Label</Label>
          </Block>
          <Block title="Way Block">
            <WayBlock title="My way">Well, My name is Alexey and I am Web developer. I finished college in 2016 </WayBlock>
          </Block>
          <Block title="Block Border">
            <BlockBorder>Block border</BlockBorder>
          </Block>
          <Block title="Link">
            Link!
          </Block>
          <Block title="Text field button">
            <TextFieldButton button="send" placeholder="" />
          </Block>
          <Block title="Dropdown">
            <Dropdown title="Alexey">
              <DropdownItem>
                Profile
              </DropdownItem>
              <DropdownItem>
                Settings
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Sign Out
              </DropdownItem>
            </Dropdown>
          </Block>
          <Block title="Icon">
            <h3><LogoSVG width={50} height={50} /></h3>
          </Block>
          <Block title="High light text">
            <h3><HighLightText> High light text </HighLightText></h3>
          </Block>
          <Block title="Spinner">
            <h3><Spinner /></h3>
          </Block>
          <Block title="Add Button">
            <AddButton>Add Button</AddButton>
          </Block>
          <Block title="text button">
            <TextButton>text button</TextButton>
          </Block>
          <Block title="TextArea">
            <h3><HighLightText> Where is it? I dont see it! </HighLightText></h3>
          </Block>
          <Block title="Panel color theme">
            <h3><HighLightText> Where is it? I dont see it! </HighLightText></h3>
          </Block>
          <Block title="Tabs">

            <Tabs selected={this.props.firstSelect || 0}>
              <TabItem label="Cards">
                <HighLightText> Cards </HighLightText>
                <WayBlock title="My way">Well, My name is Alexey and I am Web developer. I finished college in 2016 </WayBlock>
              </TabItem>
              <TabItem label="Shops">
                <HighLightText> Shops </HighLightText>
                <PrimaryButton>Primary button</PrimaryButton>
              </TabItem>
            </Tabs>

          </Block>
        </Container>
      </PageTemplates>
    );
  }
}

export default TestPage;
