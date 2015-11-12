---
name: dash
version: "1.1"
major: 1
minor: 1
description: C++ library for generic, efficient and thread-safe Data Access and Sharing
updated: 12/11/15
homepage: https://github.com/BlueBrain/dash
repository: https://github.com/BlueBrain/dash.git
issuesurl: https://github.com/BlueBrain/dash/issues
packageurl: https://launchpad.net/~eilemann/+archive/equalizer
license: LGPL
maturity: EP
maintainers: BBP Visualization Team (bbp-open-source@googlegroups.com)
contributors: Ahmet Bilgili; Carsten Rohn; Cedric Stalder; Daniel Nachbaur; Daniel Pfeifer; Dardo D Kleiner; Fabien Delalondre; Jafet Villafranca; John Biddiscombe; Juan Hernando; Julio Delgado; Marwan; Raphael Dumusc; Sarah Amsellem; Stefan Eilemann; Valentin Haenel; marwan-abdellah
readmetype: text/x-markdown
---
# DASH
## Description

DASH provides generic, efficient multi-threaded data access. It allows data
distribution and synchronization in heterogenous environments, implemented by
the CoDASH library. The primary use case is the development of task-parallel
multi-threaded applications.

DASH fulfills the following requirements:

* Memory efficient
    * All threads share the data and copy-on-write
    * Single-threaded use does not create any additional copies
    * Different data representations may share underlying data, e.g.,
      triangles between a BVH and kd-tree.
* High-Performance
    * Lock-free and wait-free read access
    * Fast write access after first copy-on-write
    * Change migration from thread A to B uses simple pointer swaps
* DAG structure
    * Access, context mapping and data distribution handles full graphs
    * Selective distribution shall be possible (partial data range,
      partial features)
* Distributable
    * See [codash](https://github.com/BlueBrain/codash)
    * Data update from node A to B shall only send change delta
    * Data discovery shall be transparent

## Downloads

* [Source Code](https://github.com/BlueBrain/dash/tags)
* [Ubuntu Packages Repository](https://launchpad.net/~eilemann/+archive/equalizer/)
* [Binary Packages](https://github.com/BlueBrain/dash/downloads)
* [API Documentation](http://bluebrain.github.com/)

## Support

Open an [issue](https://github.com/BlueBrain/dash/issues/new) if you need help,
have a question, want to provide feedback or need advice. We'll try to resolve
them in a timely manner.

## Building from source

    git clone https://github.com/BlueBrain/dash.git
    cd dash
    mkdir build
    cd build
    cmake ..
    make

