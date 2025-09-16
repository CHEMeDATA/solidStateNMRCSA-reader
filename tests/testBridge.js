import { NMRspinSystemModel_CSA } from "./NMRspinSystemModel_CSA.js";

const input = {
    "$schema": "https://chemedata.github.io/schema/v1/schema/NMRspinSystemModel_CSA.json",
    "wildComment": "Created by schema/scripts/createSchemaSomeInstances.js using function createInstance",
    "spins": [
        {
            "$schema": "https://chemedata.github.io/schema/v1/schema/atomicPropertySpin_CSA.json",
            "wildComment": "Created by schema/scripts/createSchemaSomeInstances.js using function createInstance",
            "typeVariableString": "ChemicalShift",
            "diagTensorValues": {
                "$schema": "https://chemedata.github.io/schema/v1/schema/diagTensor.json",
                "wildComment": "Created by schema/scripts/createSchemaSomeInstances.js using function createInstance",
                "xx": 120,
                "yy": 87,
                "zz": 51
            }
        }
    ]
};
	const theNMRspinSystemModel_CSA = new NMRspinSystemModel_CSA([], input);
	const param = {
		//dataObj : dataObj,
		//objDataField: dataObj.item.objDataField,
		creatorParam : {
			"editor": "djeanner",
			"version": "1",
			"source": "NMRspinSystemModel_CSA",
			"id": "none"
		},
		targetObjType: "3", // NMRspectrumObject
		//object: dataObj.objSource,
		//objectObj: dataObj.objectObj,
		};
	const returnedExport = theNMRspinSystemModel_CSA._saveExportedData(param);

    console.log("=========================================")
    console.log("returnedExport :",returnedExport)
