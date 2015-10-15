
# Copyright (c) 2012-2015 Stefan.Eilemann@epfl.ch

cmake_minimum_required(VERSION 2.8 FATAL_ERROR)
project(BlueBrain)

set(VERSION_MAJOR "2015")
set(VERSION_MINOR "5")
set(VERSION_PATCH "0")
set(GITTARGETS_RELEASE_BRANCH current)

list(APPEND CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/CMake
  ${CMAKE_SOURCE_DIR}/CMake/common)

include(GitExternal)
include(Common)

common_documentation()
set(bluebrain_SKIP_FIND ON PARENT_SCOPE) # for superprojects
