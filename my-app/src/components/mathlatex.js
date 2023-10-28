import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const LaTeXFormula = (props) => {

    return (
        <BlockMath
          math={props.formula}
        />
    );
  };

export default LaTeXFormula;