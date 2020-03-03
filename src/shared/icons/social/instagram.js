import React from 'react';

const Icon = ({bgColor = '#141029', withParent, href, ...restProps}) => {

  if (!withParent) return null
  let Parent = withParent
  return (
    <Parent href={href}>
      <svg {...restProps} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <g fill="none" fill-rule="evenodd">
            <path d="M-2-2h24v24H-2z"/>
            <path fill={bgColor} d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44zm1.484 10.85h-2.97V7.5h2.97v9.543zM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003z"/>
        </g>
      </svg>
    </Parent>
  );
}

export default Icon
