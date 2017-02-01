### Button onClick

Buttons can trigger callback functions passed in via the `onClick` prop on the `<Button />` component when the component is clicked.

### Usage

```js
import Button from 'terra-button';

<Button onClick={() => alert("I've been clicked!")} />
```

### Prop Details

| Prop      | Type     | Default | Description |
|-----------|----------|---------|-------------|
| `onClick` | Function |         | Callback function triggered when clicked. |
