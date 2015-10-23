---
name: DisplayCluster
version: "0.6"
major: 0
minor: 6
description: A collaborative software for driving large display walls
updated: 23/10/15
homepage: https://github.com/BlueBrain/DisplayCluster
repository: https://github.com/BlueBrain/DisplayCluster.git
issuesurl: https://github.com/BlueBrain/DisplayCluster/issues
packageurl: 
license: BSD
maturity: EP
maintainers: Blue Brain Project (bbp-open-source@googlegroups.com)
contributors: Brandt Westing; Chevtchenko Grigori; Daniel Nachbaur; Glendon Holst; Greg Abram; Greg Johnson; Jafet Villafranca; Julio Delgado; Madhu Srinivasan; Patric Schmitz; Raphael Dumusc; Stefan Eilemann
readmetype: text/x-markdown
---
# DisplayCluster

A collaborative software for driving large display walls.

## Documentation

The documentation is available at
[bluebrain.github.io](http://bluebrain.github.io/)

## Features

DisplayCluster provides the following functionality:
* Interactively view media such as high-resolution imagery and video
* Receive content from remote sources such as laptops / desktops or
  high-performance remote visualization machines using the
  [Deflect library](https://github.com/BlueBrain/Deflect.git)

## Building from Source

```
  git clone https://github.com/BlueBrain/DisplayCluster.git
  mkdir DisplayCluster/build
  cd DisplayCluster/build
  cmake ..
  make
```

