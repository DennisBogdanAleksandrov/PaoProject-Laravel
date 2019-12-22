import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import backgroundImg from './../../images/jfl-GfmIT_pseDQ-unsplash.jpg';
import { CallToAction } from '../components/buttons';
import PaoTable from '../components/PaoTable';
import Logo from '../components/Logo';
import styled from "@emotion/styled";


const Title = styled.h1`
  color: pink;
  @media (max-width: 750px) {
    color:blue;
  }
  
`;

const DivStyling = styled.div`
  background-image: url(./../../images/jfl-GfmIT_pseDQ-unsplash.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;

const Button = styled.div`
  padding: 32px;
  background-color: pink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const Home = () => {
  return (
    <DivStyling>
      <div className="h-screen"> 
        <Navbar />

      {/* front screen */}
        <div className="container mx-auto">

          <Title>
            <div>SUCCESS!</div>
          </Title>

          {/* <Button>success</Button> */}

          <div className="flex justify-center">
            <div className="flex flex-col h-screen">
              
          <div className="h-32 w-32 mt-24 mb-20 mx-auto">
            <Logo />
          </div>

              <CallToAction />
            </div>
          </div>
          <div className="flex justify-center -mt-12">
            <PaoTable />
          </div>
        </div>
        {/* the sets */}
      </div>
    </DivStyling>
  );
};

export default Home;

//background doesn't look good on desktop view. Blur it and add a dark filter over it

//don't forget to change your password on all accounts after this