---
name: Monsteer
version: "0.4"
major: 0
minor: 4
description: Interactive Supercomputing - Monitoring and Steering for NEST simulations
updated: 06/04/16
homepage: https://github.com/BlueBrain/Monsteer
repository: https://github.com/BlueBrain/Monsteer.git
issuesurl: https://github.com/BlueBrain/Monsteer/issues
packageurl: 
license: LGPL
maturity: EP
maintainers: BBP Visualization Team (bbp-open-source@googlegroups.com)
contributors: Ahmet Bilgili; Chevtchenko Grigori; Jafet Villafranca; Juan Hernando; Juan Hernando Vieites; Raphael Dumusc; Stefan Eilemann; hernando
readmetype: text/x-markdown
---
# Monsteer

Monsteer is a library for Interactive Supercomputing in the neuroscience
domain. Monsteer facilitates the coupling of running simulations
(currently NEST) with interactive visualization and analysis
applications. Monsteer supports streaming of simulation data to clients
(currenty only spikes) as well as control of the simulator from the
clients (also kown as computational steering). Monsteer's main
components are a C++ library, a MUSIC-based application and Python
helpers.

## Features

Monsteer provides the following functionality:
* A brion::SpikeReportPlugin for streaming spike data using ZeroEQ. The
  plugin accepts URIs with the format "monsteer://[host[:port]]".
* A MUSIC application called music_proxy to be used as the runtime gateway
  to simulators that support MUSIC, e.g. NEST.
* A small Python library to interface the Simulator in the client side and
  MUSIC proxy on the simulator side. This library also activates the Brion
  plugin when imported.

## Examples

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

## Building from Source

~~~
git clone https://github.com/BlueBrain/Monsteer.git
mkdir Monsteer/build
cd Monsteer/build
cmake ..
make
~~~

## Known Bugs

The following bugs were known at release time. Please file a
[Bug Report](https://github.com/BlueBrain/Monsteer/issues) if you find
any other issue with this release

## About

The [API documentation](http://bluebrain.github.io/Monsteer-0.4/index.html)
can be found on [bluebrain.github.io](http://bluebrain.github.io/).

The following platforms and build environments are tested:

* Linux: Ubuntu 14.04, RHEL 6.5 (Makefile, x64)

Contact: ahmet.bilgili@epfl.ch
         jafet.villafrancadiaz@epfl.ch
         jhernando@fi.upm.es

