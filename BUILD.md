# Build

## tex-to-svg Conversion

Images contained in articles are usually built with [LaTeX][LaTeX] and [XeTeX][XeTeX] typesetting system.
[GNU Make][make] is used as image converting macro.
The macro uses [dvisvgm][dvisvgm] to convert pdf file (output of XeTeX) to svg file, and [svgo][svgo] to optimize the converted svg file.

## Dependencies

- `tex`: 3.141592653 (TeX Live 2024)
- `latex` (pdfTeX): 3.141592653-2.6-1.40.26 (TeX Live 2024)
- `xetex`: 3.141592653-2.6-0.999996 (TeX Live 2024)
- `make`: 3.81
- `dvisvgm`: 3.2.2
- `svgo`: 3.2.0

Some tex files use locally installed fonts such as `Noto Emoji` (for emoji) or `Noto Serif KR` (for Hangul)

[LaTeX]: https://www.latex-project.org/
[XeTeX]: https://tug.org/xetex/
[make]: https://www.gnu.org/software/make/
[dvisvgm]: https://dvisvgm.de/
[svgo]: https://github.com/svg/svgo
