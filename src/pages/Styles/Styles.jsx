import React from 'react';
import { Link } from 'react-router-dom';

import logo from './communicate.svg';
import {
  Container,
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
  Navbar,
  NavBrand,
  Navs,
  Nav,
  FloatingActionButton,
} from '../../styles';

const Styles = () => {
  return (
    <>
      {/* navbar.js */}
      <Header primary>Navbar:</Header>
      <Navbar secondary>
        <NavBrand>yDS-template</NavBrand>
        <Navs>
          <Nav to="/">link</Nav>
          <Nav to="/">link</Nav>
          <Nav to="/">link</Nav>
        </Navs>
      </Navbar>

      <Container>
        {/* typography.js */}
        {/* <Header primary>Typography:</Header>
        <Display>Display Fonts for Modal Titles</Display>
        <Header secondary>Header for Page Titles</Header>
        <Title center>Title for Tabs, Titles and Forms</Title>
        <Headline>Headline for Info Paragraphs!</Headline>
        <Body>Body for descriptions</Body>
        <Caption right>
          Caption for timestamps, footers and additional info
        </Caption> */}

        {/* cards.js */}
        {/* <Header primary>Cards:</Header>
        <Card fill row>
          <Wrapper>
            <img src={logo} alt="logo" />
            <Display>fill</Display>
          </Wrapper>
          <Body>
            Lorem ipsum dolor amet cronut vape kickstarter, farm-to-table
            everyday carry swag synth man braid chia mumblecore post-ironic
            gastropub locavore vegan poke. Hell of gochujang subway tile fashion
            axe flannel, cred williamsburg coloring book. Blog health goth
            succulents fam, fixie sartorial raclette glossier. Squid seitan
            chambray neutra live-edge iPhone taiyaki.
          </Body>
          <Wrapper>
            <Button primary small round>
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
            Lorem ipsum dolor amet cronut vape kickstarter, farm-to-table
            everyday carry swag synth man braid chia mumblecore post-ironic
            gastropub locavore vegan poke. Hell of gochujang subway tile fashion
            axe flannel, cred williamsburg coloring book. Blog health goth
            succulents fam, fixie sartorial raclette glossier. Squid seitan
            chambray neutra live-edge iPhone taiyaki.
          </Body>
          <Caption right>7 days ago</Caption>
          <Wrapper row>
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
        </Card> */}

        {/* buttons.js */}
        {/* <Header primary>Buttons:</Header>
        <Wrapper row>
          <Button primary as={Link} to="/">
            primary
          </Button>
          <Button secondary round>
            secondary round
          </Button>
        </Wrapper>
        <Button primary small round right>
          small round right
        </Button>
        <Wrapper>
          <Button primary round>
            round
          </Button>
          <Button secondary small>
            small
          </Button>
        </Wrapper>
        <Wrapper row end>
          <FloatingActionButton as={Link} to="/">
            Hi
          </FloatingActionButton>
          <LabelButton>label button</LabelButton>
        </Wrapper>
        <GroupButton primary>Group</GroupButton>
        <GroupButton secondary>Group</GroupButton>
        <Button secondary fill round>
          fill
        </Button> */}

        {/* formFields.js */}
        {/* <Header primary>Forms:</Header>
        <form>
          <Label>
            text transition fill
            <InputField transition fill />
          </Label>
          <Wrapper row between>
            <Label primary>
              small
              <InputField small transition />
            </Label>
            <Label>
              primary
              <InputField primary />
            </Label>
          </Wrapper>
        </form> */}
      </Container>
    </>
  );
};

export default Styles;
