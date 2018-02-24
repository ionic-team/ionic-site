---
layout: fluid/docs_base
category: resources
id: using_nvm
title: Using NVM
header_sub_title: Ionic Resources
---

# Using NVM

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/developer-resources/using-nvm/index.md'>
  Improve this doc
</a>

`nvm` is a Node Version Manager that allows you to manage multiple active node.js installations with different versions.

### General Usage

With `nvm` you can install several node versions at the same time and switch between them as you wish. Global packages are installed per node, so you can e.g. have different Ionic CLI versions installed for different node versions.

### macOS and Linux

#### Installation
To install or update nvm, you can use the install script using cURL:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

or Wget:

```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

<sub>The script clones the nvm repository to `~/.nvm` and adds the source line to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).</sub>

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

You can customize the install source, directory, profile, and version using the `NVM_SOURCE`, `NVM_DIR`, `PROFILE`, and `NODE_VERSION` variables.
Eg: `curl ... | NVM_DIR=/usr/local/nvm bash` for a global install.

<sub>*NB. The installer can use `git`, `curl`, or `wget` to download `nvm`, whatever is available.*</sub>

**Note:** On OS X, if you get `nvm: command not found` after running the install script, one of the following might be the reason:-  
 - your system may not have a [`.bash_profile file`] where the command is set up. Simply create one with `touch ~/.bash_profile` and run the install script again
 - you might need to restart your terminal instance. Try opening a new tab/window in your terminal and retry.

If the above doesn't fix the problem, open your `.bash_profile` and add the following line of code:

`source ~/.bashrc`

- For more information about this issue and possible workarounds, please [refer here](https://github.com/creationix/nvm/issues/576)

##### Verify installation

To verify that nvm has been installed, do:

```sh
command -v nvm
```

which should output 'nvm' if the installation was successful.

#### Usage
To download, compile, and install the latest release of node, do this:

```sh
nvm install node
```

And then in any new shell just use the installed version:

```sh
nvm use node
```

Or you can just run it:

```sh
nvm run node --version
```
Or, you can run any arbitrary command in a subshell with the desired version of node:

```sh
nvm exec 4.2 node --version
```

You can also get the path to the executable to where it was installed:

```sh
nvm which 5.0
```

In place of a version pointer like "0.10" or "5.0" or "4.2.1", you can use the following special default aliases with `nvm install`, `nvm use`, `nvm run`, `nvm exec`, `nvm which`, etc:

 - `node`: this installs the latest version of [`node`](https://nodejs.org/en/)
 - `iojs`: this installs the latest version of [`io.js`](https://iojs.org/en/)
 - `stable`: this alias is deprecated, and only truly applies to `node` `v0.12` and earlier. Currently, this is an alias for `node`.
 - `unstable`: this alias points to `node` `v0.11` - the last "unstable" node release, since post-1.0, all node versions are stable. (in semver, versions communicate breakage, not stability).

### Windows

#### Installation
To install NVM on windows, visit the [nvm-windows repo](https://github.com/coreybutler/nvm-windows) and download the latest installer

#### Usage
To list the available and installable node versions:
```sh
nvm list available
```

To install the selected node version call:
```sh
nvm install <version>
```

See how it installed and which node versions can be used:
```sh
nvm list
```

To activate a node installation, do:
```sh
nvm use <version>
```

And if a node version is not required any more, execute:
```sh
nvm uninstall <version>
```
