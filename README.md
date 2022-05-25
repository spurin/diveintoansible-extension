## Dive Into Ansible Lab - Docker Extension

[![Follow](https://shields.io/twitter/follow/jamesspurin?label=Follow)](https://twitter.com/jamesspurin)
[![GitHub Stars](https://shields.io/docker/pulls/spurin/diveintoansible)](https://hub.docker.com/r/spurin/diveintoansible)

✨ This repository provides a proof of concept lab configuration for DiveInto.com's 'Dive Into Ansible' course that can be run as a Docker Extension in Docker Desktop ✨

The related code repository is available at - https://github.com/spurin/diveintoansible

The full video course relating to this lab is available on -

* [DiveInto](https://diveinto.com)
* [Udemy](https://www.udemy.com/course/diveintoansible/?referralCode=28BBB7A1DCCD01BBA51F)
* [O'Reilly](https://learning.oreilly.com/videos/dive-into-ansible/9781801076937)
* [PacktPub](https://www.packtpub.com/product/dive-into-ansible-from-beginner-to-expert-in-ansible-video/9781801076937)

🆘 If you experience any problems with the lab or the course, please reach out to me direct, James Spurin, or flag an issue in the repositories.  I'd much rather know about an issue and in doing so, help yourself and others who encounter similar problems, Thanks!

### Installation of the Dive Into Ansible Docker Desktop Extension

The Docker Desktop extension framework is currently in Beta and therefore, these instructions will change as this matures into the Stable release cycle. 

In the future, you'll be able to execute the commands ```docker extension``` by default but, at the moment this requires manual configuration.

Download the docker-extension binary from https://github.com/docker/extensions-sdk/releases/tag/v0.2.4 and then configure as a plugin using the steps outlined here - https://docs.docker.com/desktop/extensions-sdk/#prerequisites (essentially, moving the docker-extension file to ~/.docker/cli-plugins).

Once complete, from this repository you should be able to execute the following to install and uninstall the extension -

#### If you wish to build the extension yourself (this can be skipped and instead it will pull my hosted version on Docker Hub)
```
make build-extension
# or alternatively, if you haven't got make run: docker build --tag=spurin/diveintoansible-extension:latest . 
```

#### Installation
```
docker extension install spurin/diveintoansible-extension:latest
```

#### Removal
```
docker extension uninstall spurin/diveintoansible-extension:latest
```

## Container Sources for the Lab Images

The Dockerfiles used for the creation of these lab images are available from the following -

* [spurin/diveintoansible-images](https://github.com/spurin/diveintoansible-images)

---

![DiveIntoAnsible Cover](DiveIntoAnsible_Cover.png?raw=true "Dive Into Ansible")
