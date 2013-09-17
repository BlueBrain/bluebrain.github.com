
# Copyright (c) 2012 Stefan.Eilemann@epfl.ch

cmake_minimum_required(VERSION 2.8 FATAL_ERROR)
project(BlueBrain)

set(VERSION_MAJOR "2013")
set(VERSION_MINOR "6")
set(VERSION_PATCH "0")

list(APPEND CMAKE_MODULE_PATH ${CMAKE_SOURCE_DIR}/CMake)

set(DOXYGIT_PROJECT_EXTRA
 "<a href=\"https://travis-ci.org/BlueBrain/[PROJECT]\"><img src=\"https://travis-ci.org/BlueBrain/[PROJECT].png\"></a>")
set(GITTARGETS_RELEASE_BRANCH current)

include(github)
include(Common)
include(GitTargets)
