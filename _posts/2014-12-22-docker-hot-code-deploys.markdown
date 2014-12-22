---
layout: post
title:  "Fast code deployments with Docker"
date:   "2014-12-22  14:08:00"
categories: docker, ionic, aws, ansible
author: '<img src="https://pbs.twimg.com/profile_images/2645882152/2d0a800126f9913e3df81c47add9d17a.jpeg" class="author-icon"><a href="http://twitter.com/tweakbox" target="_blank">Joel Weirauch</a>'
published: true
---

We are huge fans of [Docker](https://www.docker.com/) here at Ionic. Docker keeps our code and its dependencies together and lets us more fully utilize our computing resources for products like [Ionic Creator](https://creator.ionic.io/) and the upcoming [Ionic.io](https://ionic.io/) services. 

One challenge we faced with Docker, though, was that any time we made even the smallest change to our code, we had to go through the process of building a new container, pulling it down to our servers, and replacing the running version.  

We store all of our code in GitHub, use the [Docker Registry](https://hub.docker.com/) to automatically build and store our containers, and use [Ansible](http://www.ansible.com/) to script the management and deployment of our containers to our servers. Even with a fully automated process, deploying that one small change could take us 20 minutes or more. After some brainstorming, we realized there is a better way for us to utilize Docker.

After the initial container build, 99% of our changes are purely code. We aren't adding any new dependencies or changing any of the requirements for running the code. Docker is really just a way to encapsulate the infrastructure required to run our code in a self-contained package. Because 99% of our changes are to code, not infrastructure, we realized we didn’t need to go through the effort to rebuild the infrastructure on every change.

The killer Docker feature that lets us solve this problem is [volumes](https://docs.docker.com/userguide/dockervolumes/). In the first iterations of our Docker files, our code was pulled from GitHub and built directly into the container. Now, we deliberately leave the code out of the container and instead load it through a host volume on container start. When we want to do a new deploy, Ansible pulls down our master branch from GitHub into an app directory on our servers. Then it checks to make sure that the associated container is running, and if it's not, it will start the container and map the app code into the container.

The other component that makes this work for us is that most of our apps are Python (Django), and we serve them with uWSGI inside the Docker container. uWSGI has a [touch reload](http://uwsgi-docs.readthedocs.org/en/latest/Options.html#touch-reload) feature that watches a specified file and reloads the uWSGI server when the file is touched. After Ansible has pulled our changes from GitHub, we have Ansible touch the uwsgi.ini file, which triggers uWSGI to reload inside the running container. Just like that, we’re running the updated version of our code!

What this means, in brief, is that we took our deployments from a 20+ minute process that looked like this:

1. Commit and push to GitHub.
2. Docker Registry pulls the changes and builds a new container.
3. Ansible connects to our servers and pulls the new container.
4. Ansible finds any running instances of the old container and stops them.
5. Ansible starts new instances of the container.

to this approximately 10 second process:

1. Commit and push to GitHub.
2. Ansible connects to our servers, pulls latest master from GitHub.
3. Ansible touches the app's uwsgi.ini file to trigger UWSGI to reload.

### Breaking it down

#### Supervisor / uWSGI
We are using [Supervisor](http://supervisord.org/) inside the Docker container to start the processes run by the container. Our supervisord.conf looks like the following:

```ini
{% raw %}
[supervisord]
nodaemon=true

[program:uwsgi]
command = /usr/local/bin/uwsgi --touch-reload=/path/to/code/in/container/uwsgi.ini --ini /path/to/code/in/container/uwsgi.ini
{% endraw %}
```

We are using the uwsgi.ini file as the trigger file via the [--touch-reload](http://uwsgi-docs.readthedocs.org/en/latest/Options.html#touch-reload) flag.

#### Docker
When we start our container, we add a host volume that contains the code for our app. That host volume is mapped to an app path in the container from which uWSGI will load the app.

```bash
{% raw %}
docker run -d -P -v /path/to/code/on/host:/path/to/code/in/container --name=container_name driftyco/testapp
{% endraw %}
```

#### Ansible
Ansible is in charge of cloning the application code from GitHub into our host's app directory, ensuring that the Docker container is running and touching the uWSGI touch-reload trigger file. We have created playbooks to direct the deployment of each of our services, so deploying is just a matter of running the right one.

For a quick code deploy, we run a playbook that contains these tasks and takes only a few seconds to run:

```yaml
{% raw %}
- set_fact: host_volume="/path/to/code/on/host"
- name: Git pull the latest code
  git: repo=git@github.com:{{ org }}/{{ container }}.git
       dest={{ host_volume }}
       accept_hostkey=yes
       force=yes

- name: Gracefully reload uwsgi
  file: path={{ touch_file }} state=touch
{% endraw %}
```

If we need to restart the entire container or update system packages, we can do a container deploy, which takes a few minutes, with these tasks:

```yaml
{% raw %}
- name: Add app dir if it doesn't yet exist
  file: path={{ host_volume }} owner=nobody group=docker recurse=yes state=directory
  sudo: yes
- name: Pull Docker image
  command: "{{ item }}"
  ignore_errors: yes
  with_items:
    - docker pull {{ org }}/{{ container }}
    - docker stop {{ container }}
    - docker rm {{ container }}
- name: Run Docker image with app volumes
  command:  docker run -d -P -v {{ host_volume }}:{{ container_volume }} --name={{ container }} {{ extra_params }} {{ org }}/{{ container }}
{% endraw %}
```

For a full deploy, we run both playbooks together in sequence; it’s that simple. ;)

### Conclusion
Because Docker is primarily a way to encapsulate infrastructure into a self-contained, deployable package, there is often no need to rebuild the entire container just to deploy a couple code changes. By utilizing volumes in Docker, we remove the code from the container, enabling code to be updated independently of the container that runs it. Finally, we can use the UWSGI touch reload feature to restart UWSGI in the container and load the updated code from the volume. 

