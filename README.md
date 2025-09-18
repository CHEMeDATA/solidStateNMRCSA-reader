# solidStateNMRCSA-reader

Create powder-pattern spectra from CSA diagonalized values.
This demonstrate how the NMR property object is used to produced a simulated spectrum.

1) the CSA object is generated, possibly using [user-controled sliders](html/demoSimSSnmr.html).
2) An export method of the CSA object is used to create a NMR spectrum.
3) The NMR spectrum object can be visualized or exported into Mnova json files.

[Demo](html/basicDemo.html)

# Acknolegements

We thank Thomas Vosergaard for the pick-up tables for the power-pattern shapes.

# Funding

This project has received funding from the European Union’s Horizon 2020 research and innovation program PANACEA under grant agreement No. 101008500. See the [CHEMeDATA panacea page](https://chemedata.github.io/panacea/) for more details.

# Installation 

Only specialist need to use these installation scripts.
There should be nothing to install.
This script should add the required files (would they not be there already)

```zsh

echo "for only external files"
node install/install.js diff html/src

echo "for all files"
node install/install.js all html/src

```
