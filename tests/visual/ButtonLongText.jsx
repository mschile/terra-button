import React from 'react';
import Button from '../../src/Button';

const icon = <span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>....</span>;

const ButtonLongText = () => (
  <div>
    <Button text="Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text" />
    <hr />
    <Button icon={icon} text="Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text" />
    <hr />
    <Button text="astringofreallylongtexttotestalongsinglewordtestcase" />
    <hr />
    <Button icon={icon} text="astringofreallylongtexttotestalongsinglewordtestcase" />
  </div>
);

export default ButtonLongText;
