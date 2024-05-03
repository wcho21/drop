% Wrapper `standalone` class to generate *.xdv output with `xelatex -no-pdf`.
% `dvisvgm` will be used to convert the output to *.svg.

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{xdvsvgw}[2024/05/03]

% Since `dvisvgm` (currently, 3.2.2) does not support 'pdf specials' created by TikZ, `dvisvgm` option must be included.
\LoadClass[tikz,border=4mm,12pt,dvisvgm]{standalone}
