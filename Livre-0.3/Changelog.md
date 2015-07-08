# Changelog {#Changelog}

# Release 0.4 {#Release040}

* Add command line option to enable ZeroEQ camera synchronization
* Add command line parameter to set the camera lookAt vector to define its orientation
* Add command line parameters for RESTBridge (hostname, port, ZeroEQ schema)
* Add command line parameters to specify the minimum and maximum levels of detail to render
* Add frustum culling
* Add livre_batch.py script for offline image series rendering
* Add the possibility of specifying the rage of frames to render from the command line
* Add time support, implementing a new animation mode that triggers a new frame
  after the rendering of the previous one is finished
* Do not setup ZeroEQ subscribers for REST if not requested
* Fix a problem that made the texture cache not to unload unused elements
* Fix the "Empty servus implementation" exception that was raised when zeroconf wasn not available
* Fix the LOD computation based on the screen height
* Frames can now be written to disk as PNG files
* General cleanup of command line parameters
* General code cleanups and improvements
* Graceful exit when ZeroEQ EXIT event is received
* Refactor the code to setup the data and texture UploadProcessors, removing race
  conditions and fixing crashes (at exit and with multiple local GPUs) in the process
* Several fixes in the tree creation and the LOD-selection algorithm
* Synchronous mode (wait until every block has been processed before rendering them)
  is now available as a command line option
* The hierarchical information for the Dash tree is now implicit in each node ID,
  effectively becoming a flat structure. This change has a positive impact on the
  performance and memory use
* Qt5 replaces Qt4 dependency (used for the GUI in the transfer function editor)
* Window title has been improved to show the application name and its version number
