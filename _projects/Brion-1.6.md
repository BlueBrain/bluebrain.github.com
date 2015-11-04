---
name: Brion
version: "1.6"
major: 1
minor: 6
description: The Blue Brain C++ I/O library
updated: 04/11/15
homepage: https://github.com/BlueBrain/Brion
repository: https://github.com/BlueBrain/Brion
issuesurl: https://github.com/BlueBrain/Brion
packageurl: 
license: LGPL
maturity: EP
maintainers: Blue Brain Project (bbp-open-source@googlegroups.com)
contributors: Ahmet Bilgili; Daniel Nachbaur; Jafet Villafranca; Juan Hernando; Mike Gevaert; Raphael Dumusc; Stefan Eilemann; hernando
readmetype: text/x-markdown
---
# Brion

![](doc/BBPLOGO350.jpg)

Welcome to Brion, a C++ library for read and write access to Blue Brain data
structures, including BlueConfig/CircuitConfig, Circuit, CompartmentReport,
Mesh, Morphology, Synapse and Target files.

Brion can be retrieved by cloning the
[source code](https://github.com/BlueBrain/Brion.git).

## Features

Brion provides the following major features:

* Fast and low-overhead read access to:
  * Blue configs (brion::BlueConfig)
  * Circuit description (brion::Circuit)
  * H5 Synapses data (brion::SynapseSummary, brion::Synapse)
  * Target (brion::Target)
  * BBP binary meshes (brion::Mesh)
  * BBP H5 morphologies and SWC morphologies (brion::Morphology)
  * Compartment reports (brion::CompartmentReport)
  * Spike reports (brion::SpikeReport)
* Fast and low-overhead write access to:
  * Compartment reports (brion::CompartmentReport)
  * BBP binary meshes (brion::Mesh)
  * BBP H5 morphologies (brion::Morphology)
* Basic [data types](@ref brion/types.h) to work with the loaded data using
  [vmmlib](http://vmml.github.io/vmmlib),
  [Lunchbox](http://eyescale.github.io/Lunchbox-1.8/index.html),
  [Boost](http://www.boost.org/doc/libs).

## Building

    git clone https://github.com/BlueBrain/Brion.git
    cd Brion
    mkdir Brion/build
    cd Brion/build
    cmake ..
    make

## ChangeLog

To keep track of the changes between releases check the [changelog](doc/Changelog.md).

## About

Brion is a cross-platform library, designed to run on any modern operating
system, including all Unix variants. Brion uses CMake to create a
platform-specific build environment. The following platforms and build
environments are tested:

* Linux: Ubuntu 14.04 and RHEL 6 (Makefile, i386, x64)

The [latest API documentation]
(http://bluebrain.github.io/Brion-1.5/index.html) can be found on
[bluebrain.github.io](http://bluebrain.github.io).

