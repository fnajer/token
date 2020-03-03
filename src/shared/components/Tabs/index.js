import React from 'react';

function Tabs({ activeTab, setTab, listItems, TabsList, TabsItem }) {
  return (
    <TabsList>
      {listItems.map(item => (
        <TabsItem 
          active={activeTab.name === item.name}
          onClick={() => setTab(item)}
        >
          {item.name}
        </TabsItem>
      ))}
    </TabsList>
  );
}

export default Tabs;
