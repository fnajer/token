import React from 'react';

const Icon = ({bgColor = '#141029', withParent, ...restProps}) => {
  let Parent = ""
  if (withParent) Parent = withParent
  return (
    <Parent>
      <svg {...restProps} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <g fill="none" fill-rule="evenodd">
            <path d="M-2-2h24v24H-2z"/>
            <path fill={bgColor} d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10"/>
        </g>
      </svg>
    </Parent>
  );
}

export default Icon
