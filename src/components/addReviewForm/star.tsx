import React, {ReactElement} from 'react';

import {StarProps} from '../../propsTypes/componentsPropsTypes';

export function Star({value, onClick}: StarProps): ReactElement {
  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} onClick={onClick} />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </React.Fragment>
  );
}
