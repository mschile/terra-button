### Button Attributes

Additional attributes can be merged into the root element of the `<Button />` component ( className, style, data etc..) by using the `attributes` prop on the `<Button />` component.

### Usage

```js
import Button from 'terra-button';

<Button attributes={{className="custom"}} />
```

### Prop Details
| Prop         | Type   | Default | Description |
|--------------|--------|---------|-------------|
| `attributes` | Object |         | Additional information to be merged into the button container. ( className, style, data etc..). |
