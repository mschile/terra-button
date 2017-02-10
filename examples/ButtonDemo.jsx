import React from 'react';

import './example.scss';
import Button from '../src/Button';

const Icon = <span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>....</span>;

const ButtonDemo = () => (
  <div>
    <h2>Intent</h2>
    <Button text="Default" />
    <Button intent="primary" text="Primary" />
    <Button intent="secondary" text="Secondary" />
    <Button intent="positive" text="Positive" />
    <Button intent="negative" text="Negative" />
    <Button intent="warning" text="Warning" />
    <Button intent="info" text="Info" />

    <h2>Outline Variant</h2>
    <Button text="Outline Default" variant="outline" />
    <Button intent="primary" text="Outline Primary" variant="outline" />
    <Button intent="secondary" text="Outline Secondary" variant="outline" />
    <Button intent="positive" text="Outline Positive" variant="outline" />
    <Button intent="negative" text="Outline Negative" variant="outline" />
    <Button intent="warning" text="Outline Warning" variant="outline" />
    <Button intent="info" text="Outline Info" variant="outline" />

    <h2>Link Variant</h2>
    <Button text="Link Default" variant="link" />
    <Button intent="primary" text="Link Primary" variant="link" />
    <Button intent="secondary" text="Link Secondary" variant="link" />
    <Button intent="positive" text="Link Positive" variant="link" />
    <Button intent="negative" text="Link Negative" variant="link" />
    <Button intent="warning" text="Link Warning" variant="link" />
    <Button intent="info" text="Link Info" variant="link" />

    <h2>Size</h2>
    <Button size="tiny" text="Tiny button" />
    <Button size="small" text="Small button" />
    <Button size="medium" text="Medium button" />
    <Button size="large" text="Large button" />
    <Button size="huge" text="Huge button" />

    <h2>Anchor</h2>
    <Button href="#" text="I am rendered with an anchor tag" />

    <h2>Block</h2>
    <Button text="Default Block" isBlock />

    <h2>Disabled</h2>
    <Button text="Disabled Button" isDisabled />

    <h2>OnClick</h2>
    <Button text="Click Me" onClick={() => alert('Ive been clicked!')} />

    <h2>Icon</h2>
    <Button icon={Icon} text="icon" />
    <Button icon={Icon} text="icon" isReversed />
    <Button icon={Icon} />
  </div>
);

export default ButtonDemo;
