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
    box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  }
  ${props => props.mobile ? '' : GalleryItem};
`
