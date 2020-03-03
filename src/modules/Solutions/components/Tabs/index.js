import styled from 'styled-components';

import * as SCREEN_SIZES from 'shared/constants/screenSizes';


export const TabsList = styled.ul`
  display: flex;
  overflow: auto;
  padding-bottom: 10px;
  margin-bottom: 38px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.6);
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    overflow: initial;
    padding-bottom: 0;
    max-width: 696px;
    justify-content: space-between;
    flex-grow: 1;
  }
`
export const TabsItem = styled.li`
  padding: 12px 25px;
  border-radius: 24px;
  background-color: ${props => props.active ? '#4579f5' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : ''};
  cursor: pointer;
`

// function Tabs({ activeTab, setTab }) {
//   return (
//     <TabsList>
//       {ROLES.map(role => (
//         <TabsItem 
//           active={activeTab.name === role.name}
//           onClick={() => setTab(role)}
//         >
//           {role.name}
//         </TabsItem>
//       ))}
//     </TabsList>
//   );
// }

// export default Tabs;
