import React from 'react';
import Button from '../../src/Button';

const icon = <span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>....</span>;

const ButtonIcon = () => (
  <div>
    <Button icon={icon} text="icon" />
    <Button icon={icon} text="icon" variant="outline" />
    <Button icon={icon} text="icon" variant="link" />
    <hr />
    <Button icon={icon} text="icon" isReversed />
    <Button icon={icon} text="icon" isReversed variant="outline" />
    <Button icon={icon} text="icon" isReversed variant="link" />
    <hr />
    <Button icon={icon} />
    <Button icon={icon} variant="outline" />
    <Button icon={icon} variant="link" />
  </div>
);

export default ButtonIcon;
