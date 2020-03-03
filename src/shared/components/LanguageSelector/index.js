import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LANGS from 'shared/constants/langs';

import './styles.scss'

export default function LanguageSelector(props) {
  const [isOpened, setOpen] = useState(false);
  const {withNames, className, activeLang, 
    changeLang,
    ...restProps} = props;
  
  function handleClick() {
    setOpen(!isOpened);
  }
  const CurrentLangIcon = activeLang.url
  return (
    
    <div {...restProps} 
      class={`wrapper-dropdown ${className} ${isOpened ? 'active' : ''}`} 
      onClick={handleClick}
    >
      <div class='dropdown-head'>
        <CurrentLangIcon className="language__img" />
        {withNames && <span class='language__name'>{activeLang.name}</span>}
      </div>
      <ul class='dropdown dropdownList'>
        {LANGS.map(lang => {
          const LangIcon = lang.url
          return (
            <li onClick={() => changeLang(lang)}>
              <a>
                <LangIcon className="language__img" />
                {withNames && <span>{lang.name}</span>}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
LanguageSelector.propTypes = {
  withNames: PropTypes.bool,
  activeLang: PropTypes.object,
  changeLang: PropTypes.func, 
}
