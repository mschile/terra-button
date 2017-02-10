import React from 'react';
import ReactDOM from 'react-dom';
import { parse } from 'react-docgen';
import PropsTable from './PropsTable';
import ButtonDemo from './ButtonDemo';
import Markdown from './Markdown';
import ReadMe from '../docs/README.md';
import src from '!raw!../src/Button.jsx';


const compProps = parse(src);
console.log(compProps.props);

const ButtonExample = () => (
  <div>
    <Markdown text={ReadMe} />
    <PropsTable propMetaData={compProps.props} />
    <ButtonDemo />
  </div>
);

ReactDOM.render(<ButtonExample />, document.getElementById('root'));
