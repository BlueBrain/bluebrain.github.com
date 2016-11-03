---
name: Keyv
version: "1.0"
major: 1
minor: 0
description: Key-Value based storage and caching using a variety of backends
updated: 03/11/16
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
# /ˈkiːwi/:

Key-Value based storage and caching using a variety of backends. Keyv
provides a unified C++ keyv::Map frontend to store data in ceph, memcached
and leveldb.

## Building from Source

```
  git clone https://github.com/BlueBrain/Keyv.git
  mkdir Keyv/build
  cd Keyv/build
  cmake ..
  make
```

