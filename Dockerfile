FROM alpine
LABEL org.opencontainers.image.title="diveintoansible" \
    org.opencontainers.image.description="Dive Into Ansible Docker Extension" \
    org.opencontainers.image.vendor="DiveInto" \
    com.docker.desktop.extension.api.version=">= 0.2.3" \
    com.docker.extension.screenshots="" \
    com.docker.extension.detailed-description="Instant Ansible Lab within Docker Desktop" \
    com.docker.extension.publisher-url="https://diveinto.com" \
    com.docker.extension.additional-urls="" \
    com.docker.extension.changelog=""

COPY docker-compose.yaml .
COPY metadata.json .
COPY ansible.svg .
COPY ui ui
