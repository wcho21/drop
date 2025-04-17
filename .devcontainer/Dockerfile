FROM node:22.14.0

ENV PNPM_HOME="/workspaces/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apt-get update && apt-get install vim gnupg2 texlive-xetex -y && apt-get clean

COPY ../fonts /usr/local/share/fonts