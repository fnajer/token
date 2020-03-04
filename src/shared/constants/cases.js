import React from 'react';
import { FormattedMessage } from 'react-intl';

import cryptoSvg from 'modules/Case/svg/crypto.svg';
import giftSvg from 'modules/Case/svg/gift.svg';
import moneySvg from 'modules/Case/svg/money.svg';

export default [
  {
    heading: <FormattedMessage id="cases.case1.title" />,
    img: cryptoSvg,
    description: <FormattedMessage id="cases.case1.description" />,
  },
  {
    heading: <FormattedMessage id="cases.case2.title" />,
    img: giftSvg,
    description: <FormattedMessage id="cases.case2.description" />,
  },
  {
    heading: <FormattedMessage id="cases.case3.title" />,
    img: moneySvg,
    description: <FormattedMessage id="cases.case3.description" />,
  },
]