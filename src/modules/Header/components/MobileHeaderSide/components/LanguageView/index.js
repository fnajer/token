import React from 'react'

import './styles.scss'

export default function LanguageView({activeLang, toggleMenu}) {
  const CurrentLangIcon = activeLang.url
  return (
    <div onClick={toggleMenu} class="language-view wrapperMobileDropdown">
      <div class="language-view__left-col">
        <CurrentLangIcon className='language__img' />
        {activeLang.name}
      </div>
      <div class="language-view__current">
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
          <g fill="none" fill-rule="evenodd">
              <path d="M-9 18V-6h24v24z"/>
              <path fill="rgba(20, 16, 41, 0.4)" fill-rule="nonzero" d="M.29 9.88L4.17 6 .29 2.12A.996.996 0 1 1 1.7.71L6.29 5.3c.39.39.39 1.02 0 1.41L1.7 11.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"/>
          </g>
        </svg>
      </div>
    </div>
  )
}