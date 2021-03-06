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
import PetruPhoto from 'shared/images/team/team-5.png';
import LeonovaPhoto from 'shared/images/team/team-6.jpg';
import RobertPhoto from 'shared/images/team/team-7.jpg';

import MariaPhoto from 'shared/images/advisors/member-1.jpg';
import SurovaPhoto from 'shared/images/advisors/member-2.png';
import EvgenyPhoto from 'shared/images/advisors/member-3.png';
import ArtyomPhoto from 'shared/images/advisors/member-4.jpg';
import EfremovPhoto from 'shared/images/advisors/member-5.png';
import GaryPhoto from 'shared/images/advisors/member-6.png';
import DavidPhoto from 'shared/images/advisors/member-7.png';
import VladimirPhoto from 'shared/images/advisors/member-8.png';
import SimonPhoto from 'shared/images/advisors/member-9.jpg';

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
        instagram: 'https://www.linkedin.com/in/anatoliy-berdnikov/',
      },
      {
        image: MargaritaPhoto,
        imageMobile: MargaritaPhotoMobile,
        position: <FormattedMessage id="team.member2.specialization" />,
        name: <FormattedMessage id="team.member2.name" />,
        description: <FormattedMessage id="team.member2.description" />,
        instagram: '',
      },
      {
        image: DmitryPhoto,
        imageMobile: DmitryPhotoMobile,
        position: <FormattedMessage id="team.member3.specialization" />,
        name: <FormattedMessage id="team.member3.name" />,
        description: <FormattedMessage id="team.member3.description" />,
        instagram: 'https://www.linkedin.com/in/dmitriy-stepanov-002a2a149/',
      },
      {
        image: NikitaPhoto,
        imageMobile: NikitaPhotoMobile,
        position: <FormattedMessage id="team.member4.specialization" />,
        name: <FormattedMessage id="team.member4.name" />,
        description: <FormattedMessage id="team.member4.description" />,
        instagram: 'https://cz.linkedin.com/in/veremeev',
      },
      {
        image: PetruPhoto,
        imageMobile: PetruPhoto,
        position: <FormattedMessage id="team.member5.specialization" />,
        name: <FormattedMessage id="team.member5.name" />,
        description: <FormattedMessage id="team.member5.description" />,
        instagram: 'https://www.linkedin.com/in/petru-bantis-4a50b577/',
      },
      {
        image: LeonovaPhoto,
        imageMobile: LeonovaPhoto,
        position: <FormattedMessage id="team.member6.specialization" />,
        name: <FormattedMessage id="team.member6.name" />,
        description: <FormattedMessage id="team.member6.description" />,
        instagram: '',
      },
      {
        image: RobertPhoto,
        imageMobile: RobertPhoto,
        position: <FormattedMessage id="team.member7.specialization" />,
        name: <FormattedMessage id="team.member7.name" />,
        description: <FormattedMessage id="team.member7.description" />,
        instagram: '',
      },
      
    ]
  },
  {
    name: <FormattedMessage id="advisors.title" />,
    list: [
      {
        image: MariaPhoto,
        imageMobile: MariaPhoto,
        position: <FormattedMessage id="advisors.member1.specialization" />,
        name: <FormattedMessage id="advisors.member1.name" />,
        description: <FormattedMessage id="advisors.member1.description" />,
        instagram: 'https://www.linkedin.com/in/maria-bolobonova-5615b5166/',
      },
      {
        image: SurovaPhoto,
        imageMobile: SurovaPhoto,
        position: <FormattedMessage id="advisors.member2.specialization" />,
        name: <FormattedMessage id="advisors.member2.name" />,
        description: <FormattedMessage id="advisors.member2.description" />,
        instagram: '',
      },
      {
        image: EvgenyPhoto,
        imageMobile: EvgenyPhoto,
        position: <FormattedMessage id="advisors.member3.specialization" />,
        name: <FormattedMessage id="advisors.member3.name" />,
        description: <FormattedMessage id="advisors.member3.description" />,
        instagram: '',
      },
      {
        image: ArtyomPhoto,
        imageMobile: ArtyomPhoto,
        position: <FormattedMessage id="advisors.member4.specialization" />,
        name: <FormattedMessage id="advisors.member4.name" />,
        description: <FormattedMessage id="advisors.member4.description" />,
        instagram: '',
      },
      {
        image: EfremovPhoto,
        imageMobile: EfremovPhoto,
        position: <FormattedMessage id="advisors.member5.specialization" />,
        name: <FormattedMessage id="advisors.member5.name" />,
        description: <FormattedMessage id="advisors.member5.description" />,
        instagram: '',
      },
      {
        image: GaryPhoto,
        imageMobile: GaryPhoto,
        position: <FormattedMessage id="advisors.member6.specialization" />,
        name: <FormattedMessage id="advisors.member6.name" />,
        description: <FormattedMessage id="advisors.member6.description" />,
        instagram: 'https://www.linkedin.com/in/garybaiton/',
      },
      {
        image: DavidPhoto,
        imageMobile: DavidPhoto,
        position: <FormattedMessage id="advisors.member7.specialization" />,
        name: <FormattedMessage id="advisors.member7.name" />,
        description: <FormattedMessage id="advisors.member7.description" />,
        instagram: 'https://www.linkedin.com/in/david-d-739713158/',
      },
      {
        image: VladimirPhoto,
        imageMobile: VladimirPhoto,
        position: <FormattedMessage id="advisors.member8.specialization" />,
        name: <FormattedMessage id="advisors.member8.name" />,
        description: <FormattedMessage id="advisors.member8.description" />,
        instagram: '',
      },
      {
        image: SimonPhoto,
        imageMobile: SimonPhoto,
        position: <FormattedMessage id="advisors.member9.specialization" />,
        name: <FormattedMessage id="advisors.member9.name" />,
        description: <FormattedMessage id="advisors.member9.description" />,
        instagram: '',
      },
    ]
  }
]