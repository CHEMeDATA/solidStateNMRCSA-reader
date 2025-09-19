# solidStateNMRCSA-reader

This repository provides the code to generate and visualize powder-pattern spectra from CSA diagonalized values.

More technically, it provides:
- a `viewer` of `NMRspinSystemModel_CSA` objects.
- a `bridge` from `NMRspinSystemModel_CSA` to `NMRspinSystemModel_CSA` objects.

This demonstrate how the NMR property objects can be used to produced a simulated spectrum.

# Demo examples

[Dynamic demo](html/demoSimSSnmr.html) illustrates how to interact with objects and update visualization.

[Tool demo](html/toolDemo.html) illustrates how to create and manipulate spectra and export them as Mnova json.

[Basic demo](html/basicDemo.html) illustrates how to easily include and visualize CHEMeDATA objects in the browser.

# Acknolegements

We thank Thomas Vosergaard for the pick-up tables for the power-pattern shapes.

# Funding

This project has received funding from the European Union’s Horizon 2020 research and innovation program PANACEA under grant agreement No. 101008500. See the [CHEMeDATA panacea page](https://chemedata.github.io/panacea/) for more details.

# More information

[Technical details](./technicalDetails.md)