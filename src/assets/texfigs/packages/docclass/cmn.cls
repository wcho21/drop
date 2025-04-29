% wrapper document class for standalone with tikz option

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{cmn}[2024/05/03]

\RequirePackage{xkeyval}

\newcommand{\customBorder}{4mm} % default
\DeclareOptionX{border}[4mm]{\renewcommand\customBorder{#1}}
\ProcessOptionsX

\LoadClass[tikz,border={\customBorder},12pt]{standalone}
