import React from 'react';
import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { InlineMath } from 'react-katex';


const LaTeXFormula = () => {
  return (
    <div>
      <BlockMath
        math={`
            \\begin{align*}
            x^2 + y^2 &= 1 \\
            y &= \\sqrt{1 - x^2}
            \\end{align*}
        `}
      />
    </div>
  );
};

const LaTeXDiagram = () => {
  const tikzCode = `
    \\begin{tikzpicture}
      \\draw (0,0) -- (2,0) -- (1,1) -- cycle;
    \\end{tikzpicture}
    `;

  return (
    <div>
      <script type="text/tikz">
        {tikzCode}
      </script>
      <InlineMath math={tikzCode} />
    </div>
  );
};

function TikzGraph({ latexCode }) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    // Convert LaTeX to URI component
    const encodedLatex = encodeURIComponent(latexCode);

    // Construct the URL for QuickLaTeX
    const quickLatexURL = `https://quicklatex.com/latex3.fcg?&formula=${encodedLatex}&fsize=20px&fcolor=000000&mode=0&out=1&errors=1`;

    setImgSrc(quickLatexURL);
  }, [latexCode]);

  return <img src={imgSrc} alt="Tikz Graph" />;
}

export default TikzGraph;
//export default LaTeXDiagram; 


