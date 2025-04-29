SRC=$(shell find . -name *.tex)

# svgo config file (see svgo documentation for the options and detail)
SVGO_CONFIG_JS:=./svgo.config.js
# custom tex package directory
TEX_CUSTOM_PACKAGES:=./packages//:

XELATEX:=xelatex
# --libgs: dvisvgm seems to have a problem to find ghostscript brew package, so specify its directory
DVISVGM:=dvisvgm --no-fonts --optimize --bbox=papersize --pdf
SVGO:=svgo --config "$(SVGO_CONFIG_JS)"

# $1: path with basename of dvi output
define tex_cleanup
	rm -f $1.log $1.aux
endef

# $1: file path of svg output
define optimize_svg
	$(SVGO) $1
endef

define load_tex_custom_packages
	export TEXINPUTS=$(TEX_CUSTOM_PACKAGES)
endef

all: $(patsubst %.tex,%.svg,$(SRC))

%.svg: %.pdf
	$(DVISVGM) --stdout $< > $@ && \
		$(call optimize_svg,$@)

%.pdf: %.tex
	$(call load_tex_custom_packages) && \
	$(XELATEX) -output-directory=$(dir $<) $< && \
		$(call tex_cleanup,$(basename $<))
