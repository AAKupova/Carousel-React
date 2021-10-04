import React from 'react';
import { Image } from './Image';

import './styles.css';

export const Card = ({ src, alt }) => 
( <li className="card">
  <Image src={src} alt={alt}/>
</li> );