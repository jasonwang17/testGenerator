import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const LaTeXFormula = (props) => {

    return (
      <div>
        <BlockMath
          math={props.formula}
        />
      </div>
    );
  };

export default LaTeXFormula;