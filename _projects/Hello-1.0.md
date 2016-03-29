---
name: Hello
version: "1.0"
major: 1
minor: 0
description: Example project for the Blue Brain Project
updated: 29/03/16
homepage: https://github.com/BlueBrain/Hello
repository: https://github.com/BlueBrain/Hello.git
issuesurl: https://github.com/BlueBrain/Hello/issues
packageurl: 
license: LGPL;BSD
maturity: EP
maintainers: Blue Brain Project (bbp-open-source@googlegroups.com)
contributors: Ahmet Bilgili; Daniel Nachbaur; Raphael Dumusc; Stefan Eilemann
readmetype: text/x-markdown
---
# Hello

Welcome to Hello, a C++ library to rule the world.

## Features

Hello provides the following functionality:
* Rule the world
* Provide a C++/CMake template for the Blue Brain Project
* [Documentation](http://bluebrain.github.io/Hello-1.0/documentation.html)

## Building from Source

```
  git clone https://github.com/BlueBrain/Hello.git
  mkdir Hello/build
  cd Hello/build
  cmake ..
  make
```

Or using Buildyard:

```
  git clone https://github.com/Eyescale/Buildyard.git
  cd Buildyard
  git clone https://github.com/BlueBrain/config.git config.bluebrain
  make Hello
```

