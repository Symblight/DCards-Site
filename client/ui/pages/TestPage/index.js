import React, { Component } from 'react';

import Header from 'components/Header';
import Label from 'ui/atoms/Label';

import { Link } from 'react-router-dom';
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
import LogoSVG from 'assets/images/react.svg';
import Spinner from 'ui/atoms/Spinner';
import AddButton from 'ui/molecules/AddButton';
import Tabs from 'ui/molecules/Tabs';
import TabItem from 'ui/molecules/TabItem';
import CardModal from 'ui/organisms/ModalLauncher';
import ButtonWith from 'ui/molecules/ButtonWith';
import Form from 'ui/molecules/Form';
import FormInput from 'ui/molecules/FormControlInput';
import Checkbox from 'ui/atoms/Checkbox';
import FieldForm from 'ui/atoms/FieldForm';
import FlatButton from 'ui/atoms/FlatButton';
import Post from 'ui/molecules/Post';
import ContextMenu from 'ui/molecules/ContextMenu';
import Menu from 'ui/molecules/Menu';
import MenuItem from 'ui/molecules/MenuItem';

import CardSVG from 'assets/images/card.svg';

class TestPage extends Component {
  state = {
    validInputFirst: '',
    validInputSecond: '',
    selected: ''
  }

  handleToggleWarn = (checked) => {
    if (checked) {
      this.setState({ validInputFirst: 'warning' });
    } else {
      this.setState({ validInputFirst: '' });
    }
  };

  handleToggleError = (checked) => {
    if (checked) {
      this.setState({ validInputSecond: 'error' });
    } else {
      this.setState({ validInputSecond: '' });
    }
  };

  handleSelectedItem = (event, name) => {
    this.setState({ selected: name });
  };

  render() {
    const { auth } = this.props;
    const { selected } = this.state;

    return (
      <PageTemplates
        header={<Header />}
      >
        <Block title="Menu & Menu Items">
          <Menu title="Menu">
            <MenuItem
              name="item1"
              onClick={this.handleSelectedItem}
              content="Item"
              active={selected === 'item1'}
            />
            <MenuItem
              name="item2"
              onClick={this.handleSelectedItem}
              content="Item 2"
              active={selected === 'item2'}
            />
            <MenuItem
              name="item3"
              onClick={this.handleSelectedItem}
              content="Item 3"
              active={selected === 'item3'}
            />
          </Menu>
        </Block>
        <Block title="Form">
          <form>
            <FieldForm>
              <Label>Standart</Label>
              <FormInput />
            </FieldForm>
            <FieldForm>
              <Label>Warning</Label>
              <FormInput validation={this.state.validInputFirst} errorMessage="Не заполненно!" />
            </FieldForm>
            <FieldForm>
              <Label>Error</Label>
              <FormInput type="password" validation={this.state.validInputSecond} errorMessage="не заполненно!" />
            </FieldForm>
            <PrimaryButton type="submit">submit</PrimaryButton>
            <Checkbox onChecked={this.handleToggleError} value="Error" />
            <Checkbox onChecked={this.handleToggleWarn} value="Warning" />
          </form>
        </Block>
        <Block title="Checkbox">
          <Checkbox value="Checkbox" />
        </Block>

        <Block title="POST">
          <Post button={<ButtonWith>Open</ButtonWith>}>
            <CardSVG height={140} />
            <div>
              <div>Title</div>
              <div>content</div>
            </div>
          </Post>
        </Block>

        <Block title="Menu">
          <ContextMenu position="top-left">
            <DropdownItem primary>
                Profile
            </DropdownItem>
            <DropdownItem primary>
                Settings
            </DropdownItem>
          </ContextMenu>
        </Block>

        <Block title="Flat button">
          <FlatButton>Flat button</FlatButton>
          <FlatButton primary>Flat button primary</FlatButton>
          <FlatButton standard>Flat button standard</FlatButton>
        </Block>
        <Block title="Button with Icon and without">
          <ButtonWith color="pink">button</ButtonWith>
        </Block>
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
        <Block title="Modal Block">
          <Link
            to={{
                  pathname: `/test/testcards/${1}`,
                  state: { modal: true }
                }}
          >
              Карточка
          </Link>
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
      </PageTemplates>
    );
  }
}

export default TestPage;
