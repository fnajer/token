import React from 'react';
import { FormattedMessage } from 'react-intl';

import AnatolyPhoto from 'shared/images/team/team-1.jpg';
import MargaritaPhoto from 'shared/images/team/team-2.jpg';
import DmitryPhoto from 'shared/images/team/team-3.jpg';
import NikitaPhoto from 'shared/images/team/team-4.jpg';
import AnatolyPhotoMobile from 'shared/images/team/team-mobile-1.jpg';
import MargaritaPhotoMobile from 'shared/images/team/team-mobile-2.jpg';
import DmitryPhotoMobile from 'shared/images/team/team-mobile-3.jpg';
import NikitaPhotoMobile from 'shared/images/team/team-mobile-4.jpg';

export default [
  {
    name: <FormattedMessage id="team.title" />,
    list: [
      {
        image: AnatolyPhoto,
        imageMobile: AnatolyPhotoMobile,
        position: <FormattedMessage id="team.member1.specialization" />,
        name: <FormattedMessage id="team.member1.name" />,
        description: <FormattedMessage id="team.member1.description" />,
        instagram: 'https://instagram.com',
      },
      {
        image: MargaritaPhoto,
        imageMobile: MargaritaPhotoMobile,
        position: <FormattedMessage id="team.member2.specialization" />,
        name: <FormattedMessage id="team.member2.name" />,
        description: <FormattedMessage id="team.member2.description" />,
        instagram: 'https://instagram.com',
      },
      {
        image: DmitryPhoto,
        imageMobile: DmitryPhotoMobile,
        position: <FormattedMessage id="team.member3.specialization" />,
        name: <FormattedMessage id="team.member3.name" />,
        description: <FormattedMessage id="team.member3.description" />,
        instagram: 'https://instagram.com',
      },
      {
        image: NikitaPhoto,
        imageMobile: NikitaPhotoMobile,
        position: <FormattedMessage id="team.member4.specialization" />,
        name: <FormattedMessage id="team.member4.name" />,
        description: <FormattedMessage id="team.member4.description" />,
        instagram: 'https://instagram.com',
      }
    ]
  },
  {
    name: <FormattedMessage id="advisors.title" />,
    list: [
      {
        image: DmitryPhoto,
        imageMobile: DmitryPhotoMobile,
        position: <FormattedMessage id="team.member3.specialization" />,
        name: <FormattedMessage id="team.member3.name" />,
        description: <FormattedMessage id="team.member3.description" />,
        instagram: 'https://instagram.com',
      },
      {
        image: NikitaPhoto,
        imageMobile: NikitaPhotoMobile,
        position: <FormattedMessage id="team.member4.specialization" />,
        name: <FormattedMessage id="team.member4.name" />,
        description: <FormattedMessage id="team.member4.description" />,
        instagram: 'https://instagram.com',
      },
      {
        image: AnatolyPhoto,
        imageMobile: AnatolyPhotoMobile,
        position: <FormattedMessage id="team.member1.specialization" />,
        name: <FormattedMessage id="team.member1.name" />,
        description: <FormattedMessage id="team.member1.description" />,
        instagram: 'https://instagram.com',
      },
      {
        image: MargaritaPhoto,
        imageMobile: MargaritaPhotoMobile,
        position: <FormattedMessage id="team.member2.specialization" />,
        name: <FormattedMessage id="team.member2.name" />,
        description: <FormattedMessage id="team.member2.description" />,
        instagram: 'https://instagram.com',
      },
    ]
  }
]