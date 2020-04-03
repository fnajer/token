import React from 'react';
import { FormattedMessage } from 'react-intl';

export const headerMenuLinks = [
  {
    name: <FormattedMessage id="header.menu.telegram" />,
    url: "https://t.me/BitTeam_Official",
  },
  {
    name: <FormattedMessage id="header.menu.howItWorks" />,
    url: "https://drive.google.com/open?id=1U_BhoINY7-rLJVzQb5tggrR8acN2BO9r",
  },
  {
    name: <FormattedMessage id="header.menu.signIn" />,
    url: "https://bit.team/",
  },
];

export const footerMenuLinksExtra = [
  {
    name: <FormattedMessage id="footer.menuExtra.terms" />,
    url: "https://bit.team/page/agreement",
  },
  {
    name: <FormattedMessage id="footer.menuExtra.policy" />,
    url: "https://bit.team/page/privacy",
  },
  {
    name: <FormattedMessage id="footer.menuExtra.sales" />,
    url: "",
  },
  {
    name: <FormattedMessage id="footer.menuExtra.legal" />,
    url: "",
  },
];