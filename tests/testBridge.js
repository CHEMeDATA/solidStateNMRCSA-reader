import { NMRspinSystemModel_CSA } from "./NMRspinSystemModel_CSA.js";
import fs from "fs";
const input = {
    "spins": [
        {
            "typeVariableString": "ChemicalShift",
            "diagTensorValues": {
                "xx": 120,
                "yy": 87,
                "zz": 51
            }
        }
    ]
};
	const theNMRspinSystemModel_CSA = new NMRspinSystemModel_CSA([], input);
    const newFields = {frequency: 500.0};
	const param = {
		//dataObj : dataObj,
		//objDataField: dataObj.item.objDataField,
		creatorParam : {
			"editor": "djeanner",
			"version": "1",
			"source": "NMRspinSystemModel_CSA",
			"id": "none"
		},
		object: "nmrSpectrumObject", // NMRspectrumObject
		//objectObj: dataObj.objectObj,
        newFields
		};
	const returnedExport = theNMRspinSystemModel_CSA._saveExportedData(param);

    console.log("=========================================")
    console.log("returnedExport :",returnedExport)
fs.writeFileSync("./tests/output.json", JSON.stringify(returnedExport, null, 2));