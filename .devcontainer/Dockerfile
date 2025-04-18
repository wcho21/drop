FROM ubuntu:24.10 AS base

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC
RUN apt-get update && apt-get --yes install git vim gnupg2 curl make && apt-get clean

FROM base AS tex-base

RUN apt-get update && apt-get --yes install texlive-xetex && apt-get clean

FROM tex-base AS node-base

SHELL ["/bin/bash", "-c"]

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
RUN . "$HOME/.nvm/nvm.sh" && nvm install 22.14.0

RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.2.10"

FROM node-base AS workspace

COPY ./fonts /usr/local/share/fonts

ENV PATH="/root/.bun/bin:$PATH"
RUN bun install --global svgo