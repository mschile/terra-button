import React from 'react';
import Button from '../../src/Button';

const ButtonIntent = () => (
  <div>
    <Button text="Default" />
    <Button intent="primary" text="Primary" />
    <Button intent="secondary" text="Secondary" />
    <Button intent="positive" text="Positive" />
    <Button intent="negative" text="Negative" />
    <Button intent="warning" text="Warning" />
    <Button intent="info" text="Info" />
    <hr />
    <Button text="Default" className="is-hovered" />
    <Button intent="primary" text="Primary" className="is-hovered" />
    <Button intent="secondary" text="Secondary" className="is-hovered" />
    <Button intent="positive" text="Positive" className="is-hovered" />
    <Button intent="negative" text="Negative" className="is-hovered" />
    <Button intent="warning" text="Warning" className="is-hovered" />
    <Button intent="info" text="Info" className="is-hovered" />
    <hr />
    <Button text="Default" className="is-active" />
    <Button intent="primary" text="Primary" className="is-active" />
    <Button intent="secondary" text="Secondary" className="is-active" />
    <Button intent="positive" text="Positive" className="is-active" />
    <Button intent="negative" text="Negative" className="is-active" />
    <Button intent="warning" text="Warning" className="is-active" />
    <Button intent="info" text="Info" className="is-active" />
    <hr />
    <Button text="Default" isDisabled />
    <Button intent="primary" text="Primary" isDisabled />
    <Button intent="secondary" text="Secondary" isDisabled />
    <Button intent="positive" text="Positive" isDisabled />
    <Button intent="negative" text="Negative" isDisabled />
    <Button intent="warning" text="Warning" isDisabled />
    <Button intent="info" text="Info" isDisabled />
  </div>
);

export default ButtonIntent;
