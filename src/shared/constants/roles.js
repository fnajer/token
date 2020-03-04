import React from 'react';
import { FormattedMessage } from 'react-intl';

import Buyer from 'shared/icons/solutions/buyer.svg';
import Investor from 'shared/icons/solutions/investor.svg';
import Miner from 'shared/icons/solutions/miner.svg';
import Wallet from 'shared/icons/solutions/wallet.svg';
import Seller from 'shared/icons/solutions/seller.svg';
import News from 'shared/icons/solutions/news.svg';

export default [
  {
    name: <FormattedMessage id="roles.buyer.name" />,
    img: Buyer,
    descriptionsStart: [
      <FormattedMessage id="roles.buyer.descriptionsStart.item1" />,
    ],
    list: [
      <FormattedMessage id="roles.buyer.list.item1" />,
      <FormattedMessage id="roles.buyer.list.item2" />,
      <FormattedMessage id="roles.buyer.list.item3" />,
      <FormattedMessage id="roles.buyer.list.item4" />,
      <FormattedMessage id="roles.buyer.list.item5" />,
      <FormattedMessage id="roles.buyer.list.item6" />,
      <FormattedMessage id="roles.buyer.list.item7" />,
    ]
  },
  {
    name: <FormattedMessage id="roles.investor.name" />,
    img: Investor,
    descriptionsStart: [
      <FormattedMessage id="roles.investor.descriptionsStart.item1" />,
    ],
    list: [
      <FormattedMessage id="roles.investor.list.item1" />,
      <FormattedMessage id="roles.investor.list.item2" />,
      <FormattedMessage id="roles.investor.list.item3" />,
      <FormattedMessage id="roles.investor.list.item4" />,
      <FormattedMessage id="roles.investor.list.item5" />,
      <FormattedMessage id="roles.investor.list.item6" />,
      <FormattedMessage id="roles.investor.list.item7" />,
      <FormattedMessage id="roles.investor.list.item8" />,
    ]
  },
  {
    name: <FormattedMessage id="roles.miner.name" />,
    img: Miner,
    descriptionsStart: [
      <FormattedMessage id="roles.miner.descriptionsStart.item1" />,
    ],
    list: [
      <FormattedMessage id="roles.miner.list.item1" />,
      <FormattedMessage id="roles.miner.list.item2" />,
      <FormattedMessage id="roles.miner.list.item3" />,
      <FormattedMessage id="roles.miner.list.item4" />,
      <FormattedMessage id="roles.miner.list.item5" />,
    ],
    descriptionsEnd: [
      <FormattedMessage id="roles.miner.descriptionsEnd.item1" />,
    ]
  },
  {
    name: <FormattedMessage id="roles.wallet.name" />,
    img: Wallet,
    descriptionsEnd: [
      <FormattedMessage id="roles.wallet.descriptionsEnd.item1" />,
      <FormattedMessage id="roles.wallet.descriptionsEnd.item2" />,
      <FormattedMessage id="roles.wallet.descriptionsEnd.item3" />,
    ],
  },
  {
    name: <FormattedMessage id="roles.seller.name" />,
    img: Seller,
    descriptionsStart: [
      <FormattedMessage id="roles.seller.descriptionsStart.item1" />,
    ],
    list: [
      <FormattedMessage id="roles.seller.list.item1" />,
      <FormattedMessage id="roles.seller.list.item2" />,
      <FormattedMessage id="roles.seller.list.item3" />,
      <FormattedMessage id="roles.seller.list.item4" />,
      <FormattedMessage id="roles.seller.list.item5" />,
      <FormattedMessage id="roles.seller.list.item6" />,
      <FormattedMessage id="roles.seller.list.item7" />,
      <FormattedMessage id="roles.seller.list.item8" />,
      <FormattedMessage id="roles.seller.list.item9" />,
    ]
  },
  {
    name: <FormattedMessage id="roles.news.name" />,
    img: News,
    descriptionsEnd: [
      <FormattedMessage id="roles.news.descriptionsEnd.item1" />,
      <FormattedMessage id="roles.news.descriptionsEnd.item2" />,
    ],
  },
]