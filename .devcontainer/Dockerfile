FROM ubuntu:24.10

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

ENV PNPM_HOME="/workspaces/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

SHELL ["/bin/bash", "-c"]

COPY ./fonts /usr/local/share/fonts

RUN apt-get update && apt-get --yes install git vim gnupg2 texlive-xetex curl make && apt-get clean
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
RUN source "$HOME/.nvm/nvm.sh" && nvm install 22