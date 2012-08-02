#
# Copyright 2012 Daniel Nachbaur <daniel.nachbaur@epfl.ch>
#
#  Redistribution and use in source and binary forms, with or without
#  modification, are permitted provided that the following conditions are met:
#
#  - Redistributions of source code must retain the above copyright notice, this
#    list of conditions and the following disclaimer.
#  - Redistributions in binary form must reproduce the above copyright notice,
#    this list of conditions and the following disclaimer in the documentation
#    and/or other materials provided with the distribution.
#  - Neither the name of Eyescale Software GmbH nor the names of its
#    contributors may be used to endorse or promote products derived from this
#    software without specific prior written permission.
#
#  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
#  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
#  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
#  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
#  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
#  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
#  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
#  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
#  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
#  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
#  POSSIBILITY OF SUCH DAMAGE.
#
#==================================
#
# - Find CODASH
# This module searches for the CODASH library
#    See https://github.com/BlueBrain/codash
#
#==================================
#
# The following environment variables are respected for finding CODASH.
# CMAKE_PREFIX_PATH can also be used for this (see find_library() CMake
# documentation).
#
#    CODASH_ROOT
#
# This module defines the following output variables:
#
#    CODASH_FOUND - Was CODASH and all of the specified components found?
#
#    CODASH_VERSION - The version of CODASH which was found
#
#    CODASH_VERSION_ABI - The DSO version of CODASH which was found
#
#    CODASH_INCLUDE_DIRS - Where to find the headers
#
#    CODASH_LIBRARIES - The CODASH libraries
#
#==================================
# Example Usage:
#
#  find_package(CODASH 0.1.0 REQUIRED)
#  include_directories(${CODASH_INCLUDE_DIRS})
#
#  add_executable(foo foo.cc)
#  target_link_libraries(foo ${CODASH_LIBRARIES})
#
#==================================
# Naming convention:
#  Local variables of the form _codash_foo
#  Input variables of the form Codash_FOO
#  Output variables of the form CODASH_FOO
#

list(APPEND CMAKE_MODULE_PATH ${CMAKE_CURRENT_LIST_DIR}/FindCODASH)
include(FindLibraryPackage)
include(FindPackageHandleStandardArgs)

find_library_package(codash TRANSIENT Collage DASH)
find_package_handle_standard_args(CODASH DEFAULT_MSG
                                  CODASH_LIBRARIES CODASH_INCLUDE_DIRS)
