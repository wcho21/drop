%.svg: %.pdf
	pdf2svg $< $(basename $<).temp.svg && \
		svgo $(basename $<).temp.svg -o $@ --quiet && \
		rm $(basename $<).temp.svg

%.pdf: %.tex
	pdflatex $< && rm $(basename $<).log $(basename $<).aux
