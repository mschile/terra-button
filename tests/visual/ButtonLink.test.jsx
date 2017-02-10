import React from 'react';
import Button from '../../src/Button';

const ButtonLink = () => (
  <div>
    <Button variant="link" text="Default" />
    <Button intent="primary" variant="link" text="Primary" />
    <Button intent="secondary" variant="link" text="Secondary" />
    <Button intent="positive" variant="link" text="Positive" />
    <Button intent="negative" variant="link" text="Negative" />
    <Button intent="warning" variant="link" text="Warning" />
    <Button intent="info" variant="link" text="Info" />
    <hr />
    <Button variant="link" text="Default" className="is-hovered" />
    <Button intent="primary" variant="link" text="Primary" className="is-hovered" />
    <Button intent="secondary" variant="link" text="Secondary" className="is-hovered" />
    <Button intent="positive" variant="link" text="Positive" className="is-hovered" />
    <Button intent="negative" variant="link" text="Negative" className="is-hovered" />
    <Button intent="warning" variant="link" text="Warning" className="is-hovered" />
    <Button intent="info" variant="link" text="Info" className="is-hovered" />
    <hr />
    <Button variant="link" text="Default" className="is-active" />
    <Button intent="primary" variant="link" text="Primary" className="is-active" />
    <Button intent="secondary" variant="link" text="Secondary" className="is-active" />
    <Button intent="positive" variant="link" text="Positive" className="is-active" />
    <Button intent="negative" variant="link" text="Negative" className="is-active" />
    <Button intent="warning" variant="link" text="Warning" className="is-active" />
    <Button intent="info" variant="link" text="Info" className="is-active" />
    <hr />
    <Button variant="link" text="Default" isDisabled />
    <Button intent="primary" variant="link" text="Primary" isDisabled />
    <Button intent="secondary" variant="link" text="Secondary" isDisabled />
    <Button intent="positive" variant="link" text="Positive" isDisabled />
    <Button intent="negative" variant="link" text="Negative" isDisabled />
    <Button intent="warning" variant="link" text="Warning" isDisabled />
    <Button intent="info" variant="link" text="Info" isDisabled />
  </div>
);

export default ButtonLink;
