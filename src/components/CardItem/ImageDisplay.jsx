import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faClosedCaptioning,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const popInAnimation = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const AnimeImage = styled.div`
  position: relative;
  text-align: left;
  overflow: hidden;
  border-radius: 0.2rem;
  padding-top: calc(100% * 184 / 133);
  background: var(--global-card-bg);
  box-shadow: 2px 2px 10px var(--global-card-shadow);
  transition: background-color 0.2s ease-in-out;
  animation: ${popInAnimation} 0.2s ease forwards;

  &:hover {
    background: ${({ $ishovered, color }) =>
      $ishovered ? color : "var(--global-card-bg)"};
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    font-weight: bold;
    font-size: 12px;
    transition: transform 0.2s ease-in;
  }

  &:hover img {
    transform: scale(1.095);
    transition-delay: 0.15s;
  }
`;

const InfoButtons = styled.div`
  position: absolute;
  bottom: 7px;
  left: 7px;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const Button = styled.span`
  background-color: var(--global-button-shadow);
  backdrop-filter: blur(10px);
  padding: 4px;
  margin: 0;
  border-radius: 0.2rem;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.1s;

  &:hover {
    color: ${({ $ishovered, color }) =>
      $ishovered ? color : "var(--global-button-text)"};
  }
`;

const Icon = styled.span`
  color: ${({ $ishovered, color }) =>
    $ishovered ? color : "var(--global-button-text)"};
  transition: color 0.2s;
`;

const ImageDisplay = ({
  imageSrc,
  altText,
  type,
  totalEpisodes,
  rating,
  color,
  $ishovered,
}) => (
  <AnimeImage $ishovered={$ishovered} color={color}>
    <ImageWrapper>
      <LazyLoadImage src={imageSrc} alt={altText} effect="blur" />
    </ImageWrapper>
    <InfoButtons $ishovered={$ishovered}>
      <Button $ishovered={$ishovered} color={color}>
        <Icon $ishovered={$ishovered} color="#FF8A8A">
          <FontAwesomeIcon icon={faTv} />
        </Icon>
        {type || "N/A"}
      </Button>
      <Button $ishovered={$ishovered} color={color}>
        <Icon $ishovered={$ishovered} color="#89CFF0">
          <FontAwesomeIcon icon={faClosedCaptioning} />
        </Icon>
        {totalEpisodes || "N/A"}
      </Button>
      <Button $ishovered={$ishovered} color={color}>
        <Icon $ishovered={$ishovered} color="#FFBF00">
          <FontAwesomeIcon icon={faStar} />
        </Icon>
        {rating || "N/A"}
      </Button>
    </InfoButtons>
  </AnimeImage>
);

ImageDisplay.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  type: PropTypes.string,
  totalEpisodes: PropTypes.string,
  rating: PropTypes.string,
  color: PropTypes.string,
  $ishovered: PropTypes.bool,
};

export default ImageDisplay;
