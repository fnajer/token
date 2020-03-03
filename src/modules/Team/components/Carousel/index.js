import styled from 'styled-components';
import { GalleryList, GalleryItem } from 'shared/components/Carousel/List';

import Card from '../Card';

export const CarouselList = styled.ul`
  display: flex;
  overflow: auto;
  padding: 15px 5px 20px 5px;
  ${props => props.mobile ? '' : GalleryList};
  margin-right: ${props => props.position ? props.position : 0};
`
export const CarouselItem = styled(Card)`
  flex-shrink: 0;
  margin-right: ${props => props.mobile ? '16px' : '30px'};;
  &:last-child {
    margin-right: 0;
  }
  ${props => props.mobile ? '' : GalleryItem};
`
