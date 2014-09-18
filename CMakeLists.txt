
# Copyright (c) 2012-2014 Stefan.Eilemann@epfl.ch

cmake_minimum_required(VERSION 2.8 FATAL_ERROR)
project(BlueBrain)

set(VERSION_MAJOR "2013")
set(VERSION_MINOR "6")
set(VERSION_PATCH "0")
set(GITTARGETS_RELEASE_BRANCH current)

list(APPEND CMAKE_MODULE_PATH ${CMAKE_SOURCE_DIR}/CMake
  ${CMAKE_SOURCE_DIR}/CMake/common)

include(GitExternal)
include(Common)

set(DOXYGIT_TOC_POST "<p>See also <a href=\"https://eyescale.github.io\">eyescale.github.io</a></p>")
common_documentation()
