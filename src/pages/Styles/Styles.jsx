import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './communicate.svg';
import burger from './navburger.png';
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
  NavContainer,
  Burger,
  LinkButton,
  FloatingActionButton,
} from '../../styles';

const Styles = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {/* navbar.js */}
      <NavContainer row secondary>
        <Wrapper row>
          <Burger onClick={toggleNav} src={burger} />
          <NavBrand to="/">yDS-template</NavBrand>
        </Wrapper>
        <Navbar primary showNav={showNav} width="200px">
          <Navs>
            <Nav to="/">link</Nav>
            <Nav to="/">link</Nav>
            <Nav to="/">link</Nav>
          </Navs>
        </Navbar>
      </NavContainer>

      <Container>
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

        {/* cards.js */}
        <Header primary>Cards:</Header>
        <Card fill row primary>
          <Wrapper alignCenter>
            <Display>fill</Display>
            <img src={logo} alt="logo" />
          </Wrapper>
          <Body>
            Lorem ipsum dolor amet cronut vape kickstarter, farm-to-table
            everyday carry swag synth man braid chia mumblecore post-ironic
            gastropub locavore vegan poke. Hell of gochujang subway tile
            fashion.
          </Body>
          <Wrapper justifyCenter>
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
        </Card>

        {/* buttons.js */}
        <Header primary>Buttons:</Header>
        <Wrapper row>
          <Button primary>primary</Button>
          <Button secondary round>
            secondary round
          </Button>
        </Wrapper>
        <Button small round right>
          small round right
        </Button>
        <Wrapper>
          <LinkButton primary round to="/">
            LinkButton round
          </LinkButton>
          <Button secondary small submit>
            small submit
          </Button>
        </Wrapper>
        <Wrapper row end>
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
        <form>
          <Label>
            text transition fill
            <InputField transition fill />
          </Label>
          <Wrapper row between wrap>
            <Label primary>
              small
              <InputField small transition />
            </Label>
            <Label>
              primary
              <InputField primary />
            </Label>
          </Wrapper>
        </form>
      </Container>
    </>
  );
};

export default Styles;
