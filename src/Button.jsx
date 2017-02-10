import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/button.scss';

const propTypes = {
  /**
   * Additional information to be merged into the button container. ( className, style, data etc.. )
   */
  attributes: PropTypes.oneOfType([PropTypes.object]),
  /**
   * Whether or not the button should display as a block
   */
  isBlock: PropTypes.bool,
  /**
   * JSX children
   */
  children: PropTypes.node,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: PropTypes.element,
  /**
   * Sets the button color scheme. One of `primary`, `secondary`, `positive`, `negative`, `warning`, `info`
   */
  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'positive', 'negative', 'warning', 'info']),
  /**
   * Whether or not the button should be disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Sets the href. When set will render the component as an anchor tag
   */
  href: PropTypes.string,
  /**
   * Callback function triggered when clicked
   */
  onClick: PropTypes.func,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: PropTypes.bool,
  /**
   * Sets the button size. One of tiny, small, medium, large, huge
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * Sets the button variant. One of link or outline
   */
  variant: PropTypes.oneOf(['link', 'outline']),
};

const defaultProps = {
  isBlock: false,
  intent: 'default',
  isDisabled: false,
  isReversed: false,
};

const Button = (props) => {
  const attributes = Object.assign({}, props.attributes);
  const text = props.text ? <span className="terra-Button-text">{props.text}</span> : null;

  let style = props.intent;
  const titleize = s => s.charAt(0).toUpperCase() + s.slice(1);
  if (props.variant) {
    style = `${props.variant}${titleize(props.intent)}`;
  }

  attributes.className = classNames([
    'terra-Button',
    `terra-Button--${style}`,
    { 'is-disabled': props.isDisabled },
    { [`terra-Button--${props.size}`]: props.size },
    { 'terra-Button--block': props.isBlock },
    attributes.className,
  ]);

  attributes.disabled = props.isDisabled;
  attributes.href = props.href;
  attributes.onClick = props.onClick;
  attributes.tabIndex = props.isDisabled ? '-1' : undefined;
  attributes['aria-disabled'] = props.isDisabled;

  const order = props.isReversed ?
    [text, props.icon, props.children] :
    [props.icon, text, props.children];

  return React.createElement(props.href ? 'a' : 'button', attributes, ...order);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
