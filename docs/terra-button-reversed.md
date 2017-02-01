### Reversed Button

Buttons which display and icon and text can flip the order in which the icon and text are rendered by using the `isReversed` prop on the `<Button />` component.

### Usage

```js
import Button from 'terra-button';

<Button icon={<StarIcon />} text="Hello World" isReversed />
```

### Prop Details
| Prop         | Type    | Default | Description |
|--------------|---------|---------|-------------|
| `isReversed` | Boolean | false   | Reverses the default position of the icon and text. |
