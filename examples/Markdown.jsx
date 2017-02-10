import React, { PropTypes } from 'react';
import marked from 'marked';
import 'github-markdown-css/github-markdown.css';

/* eslint react/no-danger:0 */
const Markdown = props => (
  <div
    className="markdown-body"
    style={{ listStyle: 'initial' }}
    dangerouslySetInnerHTML={{ __html: marked(props.text) }}
  />
);

Markdown.defaultProps = {
  text: '',
};

Markdown.propTypes = {
  /**
   * Description of prop "foo".
   */
  text: PropTypes.string,
};

export default Markdown;
