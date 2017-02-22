---
name: Hello
version: "1.0"
major: 1
minor: 0
description: Example project for the Blue Brain Project
updated: 22/02/17
homepage: https://github.com/BlueBrain/Hello
repository: https://github.com/BlueBrain/Hello.git
issuesurl: https://github.com/BlueBrain/Hello/issues
packageurl: 
license: LGPL;BSD
maturity: EP
maintainers: Blue Brain Project (bbp-open-source@googlegroups.com)
contributors: Stefan Eilemann
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

Hello is a cross-platform library, designed to run on any modern
operating system, including all Unix variants and the Windows operating
system. It requires a C++11 compiler and uses CMake to create a
platform-specific build environment. The following platforms and build
environments are tested:

* Linux: Ubuntu 16.04, RHEL 6.8 (Makefile, Ninja)
* Windows: 7 (Visual Studio 2012)
* Mac OS X: 10.9 (Makefile, Ninja)

Building from source is as simple as:

    git clone https://github.com/BlueBrain/Hello.git
    mkdir Hello/build
    cd Hello/build
    cmake -GNinja ..
    ninja


