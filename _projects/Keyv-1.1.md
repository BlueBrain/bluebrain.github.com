---
name: Keyv
version: "1.1"
major: 1
minor: 1
description: Key-Value based storage and caching using a variety of backends
updated: 07/01/17
homepage: https://github.com/BlueBrain/Keyv
repository: https://github.com/BlueBrain/Keyv.git
issuesurl: https://github.com/BlueBrain/Keyv/issues
packageurl: 
license: LGPL
maturity: EP
maintainers: Blue Brain Project (bbp-open-source@googlegroups.com)
contributors: Stefan Eilemann
readmetype: text/x-markdown
---
/ˈkiːwi/:
=======

# Overview

Key-Value based storage and caching using a variety of backends. Keyv
provides a unified C++ keyv::Map frontend to store data in ceph, memcached
and leveldb.

# Building from Source

Keyv is a cross-platform library, designed to run on any modern operating
system, including all Unix variants. It requires a C++11 compiler and uses CMake
to create a platform-specific build environment. The following platforms and
build environments are tested:

* Linux: Ubuntu 16.04, RHEL 6.8 (Makefile, Ninja)
* Mac OS X: 10.9 (Makefile, Ninja)

Building from source is as simple as:

    git clone https://github.com/BlueBrain/Keyv.git
    mkdir Keyv/build
    cd Keyv/build
    cmake -GNinja ..
    ninja


