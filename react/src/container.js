import React from 'react';
import styled from 'styled-components';
import Slideshow from './slide';

const ScrollableContainer = styled.div`
  /* Set the height and width of the container */
  width: 100%px;
  height: 95%px;
  /* Add any other styles you want */

  /* Hide the scrollbar */
  overflow-y: hidden;

  /* Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 1.5em; /* Adjust the width as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Hide the thumb */
  }
`;

const YourComponent = () => {
  return (
    <ScrollableContainer>
      <Slideshow/>
    </ScrollableContainer>
  );
};

export default YourComponent;
