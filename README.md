# solidStateNMRCSA-reader

This repository provides the code the generate powder-pattern spectra from CSA diagonalized values.

More technically, it provides:
- a `viewer` of `NMRspinSystemModel_CSA`
- a `bridge` from `NMRspinSystemModel_CSA` to `NMRspinSystemModel_CSA` objects
This demonstrate how the NMR property object is used to produced a simulated spectrum.

1) the CSA object is generated, possibly using [user-controled sliders](html/demoSimSSnmr.html).
2) An export method of the CSA object is used to create a NMR spectrum.
3) The NMR spectrum object can be visualized or exported into Mnova json files.

# Demo examples

[Dynamic demo](html/demoSimSSnmr.html) illustrates how to interact with objects and update visualization.

[Tool demo](html/toolDemo.html) illustrates how to create spectra and export to Mnova json.

[Basic demo](html/basicDemo.html) illustrates how to easily include and visualize CHEMeDATA objects in the browser.

# Acknolegements

We thank Thomas Vosergaard for the pick-up tables for the power-pattern shapes.

# Funding

This project has received funding from the European Union’s Horizon 2020 research and innovation program PANACEA under grant agreement No. 101008500. See the [CHEMeDATA panacea page](https://chemedata.github.io/panacea/) for more details.

# More information

[Technical details](./technicalDetails.md)