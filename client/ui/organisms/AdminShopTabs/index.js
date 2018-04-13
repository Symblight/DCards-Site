import React, { PureComponent } from 'react';
import { Header, Image, Table } from 'semantic-ui-react';

import Tabs from 'ui/molecules/Tabs';
import TabItem from 'ui/molecules/TabItem';
import ListCardsShop from 'ui/organisms/ListCardsShop';
import withShopInfo from 'components/proxy-props/withShopInfo';
import Button from 'ui/molecules/ButtonWith';

import { } from './index.styled';

@withShopInfo
class AdminShopTabs extends PureComponent {

  renderTableUsers() {
    return (
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
              ava
                <Header.Content>
                    Lena
                  <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
                22
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
              ava
                <Header.Content>
                    Matthew
                  <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
                15
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
              ava
                <Header.Content>
                    Lindsay
                  <Header.Subheader>Entertainment</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
                12
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
              ava
                <Header.Content>
                    Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
                11
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
  render() {
    const { data } = this.props;

    return (
      <Tabs selected={this.props.firstSelect || 0}>
        <TabItem label="Карты">
          <ListCardsShop shop={data} />
          <Button>Создать карту</Button>
        </TabItem>
        <TabItem label="Клиенты">
          {this.renderTableUsers()}
        </TabItem>
      </Tabs>
    );
  }
}

export default AdminShopTabs;