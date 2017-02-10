import React from 'react';
import Button from '../../src/Button';

const ButtonOutline = () => (
  <div>
    <Button variant="outline" text="Default" />
    <Button intent="primary" variant="outline" text="Primary" />
    <Button intent="secondary" variant="outline" text="Secondary" />
    <Button intent="positive" variant="outline" text="Positive" />
    <Button intent="negative" variant="outline" text="Negative" />
    <Button intent="warning" variant="outline" text="Warning" />
    <Button intent="info" variant="outline" text="Info" />
    <hr />
    <Button variant="outline" text="Default" className="is-hovered" />
    <Button intent="primary" variant="outline" text="Primary" className="is-hovered" />
    <Button intent="secondary" variant="outline" text="Secondary" className="is-hovered" />
    <Button intent="positive" variant="outline" text="Positive" className="is-hovered" />
    <Button intent="negative" variant="outline" text="Negative" className="is-hovered" />
    <Button intent="warning" variant="outline" text="Warning" className="is-hovered" />
    <Button intent="info" variant="outline" text="Info" className="is-hovered" />
    <hr />
    <Button variant="outline" text="Default" className="is-active" />
    <Button intent="primary" variant="outline" text="Primary" className="is-active" />
    <Button intent="secondary" variant="outline" text="Secondary" className="is-active" />
    <Button intent="positive" variant="outline" text="Positive" className="is-active" />
    <Button intent="negative" variant="outline" text="Negative" className="is-active" />
    <Button intent="warning" variant="outline" text="Warning" className="is-active" />
    <Button intent="info" variant="outline" text="Info" className="is-active" />
    <hr />
    <Button variant="outline" text="Default" isDisabled />
    <Button intent="primary" variant="outline" text="Primary" isDisabled />
    <Button intent="secondary" variant="outline" text="Secondary" isDisabled />
    <Button intent="positive" variant="outline" text="Positive" isDisabled />
    <Button intent="negative" variant="outline" text="Negative" isDisabled />
    <Button intent="warning" variant="outline" text="Warning" isDisabled />
    <Button intent="info" variant="outline" text="Info" isDisabled />
  </div>
);

export default ButtonOutline;
