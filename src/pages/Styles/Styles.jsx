import React from 'react';
import { Link } from 'react-router-dom';

import logo from './communicate.svg';
import {
  Wrapper,
  Header,
  Card,
  Display,
  Title,
  Body,
  Headline,
  Caption,
  GroupButton,
  LabelButton,
  Button,
  InputField,
  Label,
  LinkButton,
  FloatingActionButton,
  Form,
} from '../../styles';

export const Styles = () => {
  return (
    <>
      {/* typography.js */}
      <Header primary>Typography:</Header>
      <Display>Display Fonts for Modal Titles</Display>
      <Header secondary>Header for Page Titles</Header>
      <Title center>Title for Tabs, Titles and Forms</Title>
      <Headline>Headline for Info Paragraphs!</Headline>
      <Body>Body for descriptions</Body>
      <Caption right>
        Caption for timestamps, footers and additional info
      </Caption>

      {/* buttons.js */}
      <Header primary>Buttons:</Header>
      <Wrapper row justifyCenter>
        <Button primary>primary</Button>
        <Button secondary round>
          secondary round
        </Button>
      </Wrapper>
      <Button small round right>
        small round right
      </Button>
      <Wrapper width="30%">
        <LinkButton primary round to="/">
          LinkButton round
        </LinkButton>
        <Button secondary small submit>
          small submit
        </Button>
      </Wrapper>
      <Wrapper row justifyEnd>
        <FloatingActionButton as={Link} to="/">
          Link
        </FloatingActionButton>
        <LabelButton primary>label button</LabelButton>
      </Wrapper>
      <GroupButton primary>Group</GroupButton>
      <GroupButton secondary>Group</GroupButton>
      <Button secondary fill round>
        fill
      </Button>

      {/* formFields.js */}
      <Header primary>Forms:</Header>
      <Form>
        <Label>
          text transition width
          <InputField transition width="100%" />
        </Label>
        <Wrapper row justifyBetween wrap>
          <Label primary>
            small
            <InputField small transition />
          </Label>
          <Label>
            primary
            <InputField primary />
          </Label>
        </Wrapper>
      </Form>

      {/* cards.js */}
      <Header primary>Cards:</Header>
      <Card fill row primary alignCenter>
        <Wrapper alignCenter>
          <Display>fill</Display>
          <img src={logo} alt="logo" />
        </Wrapper>
        <Body>
          Lorem ipsum dolor amet cronut vape kickstarter, farm-to-table everyday
          carry swag synth man braid chia mumblecore post-ironic gastropub
          locavore vegan poke. Hell of gochujang subway tile fashion.
        </Body>
        <Wrapper>
          <Button secondary small round>
            small Button
          </Button>
          <Button small round>
            small Button
          </Button>
        </Wrapper>
      </Card>
      <Card>
        <img src={logo} alt="logo" />
        <Display>Media Cards</Display>
        <Body>
          Lorem ipsum dolor amet cronut vape kickstarter, farm-to-table everyday
          carry swag synth man braid chia mumblecore post-ironic gastropub
          locavore vegan poke. Hell of gochujang subway tile fashion axe
          flannel, cred williamsburg coloring book. Blog health goth succulents
          fam, fixie sartorial raclette glossier. Squid seitan chambray neutra
          live-edge iPhone taiyaki.
        </Body>
        <Caption right>7 days ago</Caption>
        <Wrapper row justifyEvenly>
          <Button primary small round>
            small Button
          </Button>
          <Button small round>
            small Button
          </Button>
        </Wrapper>
        <Button secondary round fill>
          round fill
        </Button>
      </Card>
    </>
  );
};

export default Styles;
