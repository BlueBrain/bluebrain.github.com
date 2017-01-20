---
name: Monsteer
version: "0.6"
major: 0
minor: 6
description: Interactive Supercomputing - Monitoring and Steering for NEST simulations
updated: 21/01/17
homepage: https://github.com/BlueBrain/Monsteer
repository: https://github.com/BlueBrain/Monsteer.git
issuesurl: https://github.com/BlueBrain/Monsteer/issues
packageurl: 
license: LGPL
maturity: EP
maintainers: BBP Visualization Team (bbp-open-source@googlegroups.com)
contributors: Stefan Eilemann
readmetype: text/x-markdown
---
Monsteer
=======

# Overview

Monsteer is a library for Interactive Supercomputing in the neuroscience
domain. Monsteer facilitates the coupling of running simulations
(currently NEST) with interactive visualization and analysis
applications. Monsteer supports streaming of simulation data to clients
(currenty only spikes) as well as control of the simulator from the
clients (also kown as computational steering). Monsteer's main
components are a C++ library, a MUSIC-based application and Python
helpers.

# Features

Monsteer provides the following functionality:
* A brion::SpikeReportPlugin for streaming spike data using ZeroEQ. The
  plugin accepts URIs with the format "monsteer://[host[:port]]".
* A MUSIC application called music_proxy to be used as the runtime gateway
  to simulators that support MUSIC, e.g. NEST.
* A small Python library to interface the Simulator in the client side and
  MUSIC proxy on the simulator side. This library also activates the Brion
  plugin when imported.

# Examples

The directory *examples/nest* contains two simple examples using NEST. For each
example there is Python script (the simulator code) and a MUSIC configuration
file. The music configuration files have instructions on how to run them. The
first example, (files *minimal.py* and *nest2music_proxy.music*), is a minimal
simulation with streaming enabled. The second example (*minimal_steered.py*
and *nest2music_proxy_with_steering.music*) is an extended version of the
first one that adds basic steering support.

This package does not provide any client code example at the moment. As a
streaming client you can use the spikeConverter tool from
[Brion](https://github.com/BlueBrain/Brion.git) as a reference.

# Building from Source

Monsteer is a cross-platform library, designed to run on any modern operating
system, including all Unix variants. It requires a C++11 compiler and uses CMake
to create a platform-specific build environment. The following platforms and
build environments are tested:

* Linux: Ubuntu 16.04, RHEL 6.8 (Makefile, Ninja)
* Mac OS X: 10.9 (Makefile, Ninja)

Building from source is as simple as:

    git clone https://github.com/BlueBrain/Monsteer.git
    mkdir Monsteer/build
    cd Monsteer/build
    cmake -GNinja ..
    ninja

This work has been partially funded by the European Union Seventh Framework Program (FP7/2007­2013) under grant agreement no. 604102 (HBP).

