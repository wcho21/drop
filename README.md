# Drop

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3c68612-9d83-462a-a62f-76aee4682c1b/deploy-status)](https://app.netlify.com/sites/rooidrop/deploys)

[Drop][drop].

A personal magazine about computer science and mathematics.

[drop]: https://drop.rooi.dev

## Dependencies

Built with [astro][astro] framework.

Images contained in articles are usually built with [LaTeX][LaTeX] typesetting system.
[GNU Make][make] is used as image converting macro, depending on [pdf2svg][pdf2svg] converter and [svgo][svgo] optimizer.

```
$ latex --version
pdfTeX 3.141592653-2.6-1.40.25 (TeX Live 2023)
$ make --version
GNU Make 3.81
$ brew list pdf2svg --version
pdf2svg 0.2.3_6
$ svgo --version
3.0.2
```

[astro]: https://astro.build/
[LaTeX]: https://www.latex-project.org/
[make]: https://www.gnu.org/software/make/
[pdf2svg]: https://github.com/dawbarton/pdf2svg
[svgo]: https://github.com/svg/svgo
