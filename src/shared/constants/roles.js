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
      'What makes us stand out from the crowd of other cryptocurrency exchange platforms?',
    ],
    list: [
      'BIT.TEAM users are authorized to set the exchange rates in the ads they use to sell or buy a cryptocurrency',
      'All transaction data is stored strictly between the parties participating in the transaction',
      'Each trader has his/her own rank within the site data system. The ranking is based on the number of successful transactions a user performs. In addition, users will have a chance to review each other',
      'Users can optimize security levels for their own profiles: BIT.TEAM allows users to use two-factor authorization for Mail.ru and Google',
      'An option allowing trade alerts to be delivered by email, telegram or through SMS. BIT.TEAM applications',
      'Customers have a chance to choose the payment system that has the most convenience for them',
      'Multi-level referral program.',
    ]
  },
  {
    name: 'Investor',
    img: Investor,
    descriptionsStart: [
      'In order to become an owner of BTT tokens, you need to take a number of actions:',
    ],
    list: [
      "Visit the website of the exchange platform: http://token.btt.team",
      "Sign up to the project;",
      "Log in to your account and charge your wallet wich you would like to use to purchase your tokens.",
      "Available: BTC, ETH, LTC;",
      "Many popular payment systems are available for investment.",
      "Go to the BTT bidding page;",
      "Click on the published order from the platform and purchase the required amount of tokens.",
      "Tokens will be stored in the platform's internal wallet and will be available for trading or withdrawal to private wallets.",
    ]
  },
  {
    name: 'Miner',
    img: Miner,
    descriptionsStart: [
      'The exchange platform gives the users the following advantages:',
    ],
    list: [
      'automatic report generation for the selected period;',
      'automatic balance notification;',
      'instant transaction execution;',
      'secure exchange guarantee;',
      'no intermediaries.',
    ],
    descriptionsEnd: [
      'Security within the framework of BIT.TEAM is ensured as follows: when registering a new account, a two-factor user authentication system is applied, where an SMS confirmation is used, which is connected to the Telegram messenger or another platform. In fact, our security is similar to Telegram’s security.',
    ]
  },
  {
    name: 'Wallet',
    img: Wallet,
    descriptionsEnd: [
      "Your funds are at your disposal anywhere, anytime. You can access the funds from your phone, tablet or laptop with Internet connection. To do this, you do not need to install additional software: just enter your account login and password.",
      "You don’t need any special software to store your coins - the platform supports most of the popular coins and a great number of altcoins.",
      "In case of a clear trend in the market, you can immediately start trading. This may be important in a highly volatile environment such as that of cryptocurrency markets. If you store your coins on a third-party platform, they will have to be withdrawn presenting gaps within an altogether fluid market.",
    ],
  },
  {
    name: 'Seller',
    img: Seller,
    descriptionsStart: [
      'What makes us stand out from the crowd of other cryptocurrency exchange platforms?',
    ],
    list: [
      "No intermediaries;",
      "Extreme simplicity of the operation;",
      "Absolute security of transactions, owing to BIT.TEAM guarantor;",
      "24/7 support service;",
      "Traders will be able to utilize a chat interface, allowing them to interact with others.",
      "Multicurrency (transactions with Bitcoin, Dash, Ethereum), as well as the possibility of adding new cryptocurrencies;",
      "Favorable affiliate program;",
      "Mobile access to the site;",
      "Instant notifications in various instant messengers.",
    ]
  },
  {
    name: 'News',
    img: News,
    descriptionsEnd: [
      "News has always been a useful resource, one of the reasons to follow the news and be aware of what is happening around the world is the increased interest in ICOs (initial coin offerings). ICOs have been one of the ways to attract venture capitalists to a startup. But there can be anything in the root of ICO. The major pioneer of ICO was the blockchain infrastructure Ethereum. While Bitcoin price’s jumped 1,000% in 2017, the price of Ethereum soared by 8,000%. This caused a wave of initial offerings, and investors started to invest in these currencies in steed, without due thinking and analysis.",
      "No one can guarantee whether it is worth investing in Bitcoin. The future of the system is only known to those with a high stake, but many are not prepared to share their plans with anyone else. Bit.team news sees to the fact that people feel reluctant to join the crypto-market. However, a single price surge catalyst will be enough for newbies to fall into the cryptocurrency fever again. Follow the news with Bit.team to stay in the loop!",
    ],
  },
]