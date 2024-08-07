FROM alpine
LABEL org.opencontainers.image.title="Dive Into Ansible" \
    org.opencontainers.image.description="Run a Full Ansible Lab Environment within Docker Desktop!" \
    org.opencontainers.image.vendor="James Spurin" \
    com.docker.desktop.extension.api.version=">= 0.2.3" \
    com.docker.desktop.extension.icon="https://raw.githubusercontent.com/spurin/diveintoansible-extension/main/ansible.svg" \
    com.docker.extension.screenshots='[{"alt":"Main Page", "url":"https://github.com/spurin/diveintoansible-extension/blob/main/screenshots/1.png?raw=true"}, {"alt":"Ansible Terminal", "url":"https://github.com/spurin/diveintoansible-extension/blob/main/screenshots/2.png?raw=true"}, {"alt":"Host Selection", "url":"https://github.com/spurin/diveintoansible-extension/blob/main/screenshots/3.png?raw=true"}, {"alt":"Reverse Proxy", "url":"https://github.com/spurin/diveintoansible-extension/blob/main/screenshots/4.png?raw=true"}]' \
    com.docker.extension.detailed-description="Instant Ansible Lab within Docker Desktop" \
    com.docker.extension.detailed-description="<p><h1>Dive Into Ansible with the Dive Into Ansible Lab</h1>Run Ansible, along with Ubuntu and CentOS hosts in this awesome Docker Desktop Lab Environment Extension that includes Reverse Proxies for accessing Web Services!</p><p>Default username/passwords for the lab are ansible/password and root/password" \
    com.docker.extension.publisher-url="https://diveinto.com" \
    com.docker.extension.categories="utility-tools" \
    com.docker.extension.additional-urls='[{"title":"https://github.com/spurin/diveintoansible-lab","url":"https://github.com/spurin/diveintoansible-lab"}]' \
    com.docker.extension.changelog="Update CentOS to CentOS Stream"

COPY docker-compose.yaml .
COPY metadata.json .
COPY ansible.svg .
COPY ui ui
