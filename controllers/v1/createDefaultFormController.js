module.exports = class CreateDefaultForm extends Abstract {
  constructor() {
    super(createDefaultFormSchema);
  }

  /**
 * @api {get} {{url}}/test/api/v1/createDefaultForm/listDefaultForm?adminId=5cdf8ecba8eb9ef95572416f&type=services  Create Default form for all admin
* @apiVersion 0.0.1
* @apiGroup AccordionForm
* @apiHeader {String} X-authenticated-user-token Authentication token
*  @apiParamExample {json} Response:
     
* {
    "message": "Default form fetched successfully",
    "status": 200,
    "result": {
        "type": "defaultForm",
        "formResult": {
            "id": 1,
            "name": "Default Form",
            "children": [
                {
                    "id": 2,
                    "name": "Default Parent1",
                    "children": [
                        {
                            "id": 4,
                            "name": "Default Children1",
                            "children": [
                                {
                                    "id": 8,
                                    "name": "Default sub-children1",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "name": "Default Children2",
                            "children": [
                                {
                                    "id": 9,
                                    "name": "Default sub-children2",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Default Parent2",
                    "children": [
                        {
                            "id": 6,
                            "name": "Default Children3",
                            "children": [
                                {
                                    "id": 10,
                                    "name": "Default sub-children3",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "name": "Default Children4",
                            "children": [
                                {
                                    "id": 11,
                                    "name": "Default sub-children4",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
*}
*/

  async listDefaultForm(req) {
    return new Promise(async (resolve, reject) => {
      try {
        let result;

        if (!req.query.type || !req.query.adminId) {
          throw "Type/AdminId is required";
        }

        let createDefaultFormDocuments = await database.models.createDefaultForm
          .findOne({
            type: req.query.type,
            adminId: req.query.adminId
          })
          .lean();

        if (!createDefaultFormDocuments) {
          let defaultDocuments = await database.models.createDefaultForm
            .findOne({
              type: "defaultForm"
            })
            .lean();

          result = _.omit(defaultDocuments, "_id");
        } else {
          let resultingData = {};

          if (createDefaultFormDocuments.formResult.length < 0) {
            resultingData["formResult"] = {};
          } else {
            resultingData["formResult"] =
              createDefaultFormDocuments.formResult[
                createDefaultFormDocuments.formResult.length - 1
              ];
          }
          result = resultingData;
        }

        return resolve({
          message: "Default form fetched successfully",
          result: result
        });
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }

  /**
 * @api {post} {{url}}/test/api/v1/createDefaultForm/edit Edit Form
 * @apiGroup AccordionForm
 * @apiHeader {String} X-authenticated-user-token Authentication token
 * @apiParam (Request body) {String} formResult
 * @apiParam (Request body) {String} adminId
 * @apiParam (Request body) {String} companyName
 *  @apiParam (Request body) {String} type
   * @apiParamExample {json} Request-Body for edit:
    *{
    "formResult" : [
    		{
    				"id":1,
    				"name":"Vogo2",
    				"children":[
    					{
    						"id":2,
    						"name":"A",
    						"children":[
    							{
    								"name":"B",
    								"id":4,
    								"children":[
    									{
    									"name":"C",
    									"id":8,
    									"children":[]
    								}
    								]
    							},
    							{
    								"name":"D",
    								"id":5,
    								"children":[
    									{
    									"name":"E",
    									"id":9,
    									"children":[]
    									}
    									]
    							}
    							]},
                        {
                        	"name":"F",
    						"id":3,
    						"children":[
    							{
    								"name":"G",
    								"id":6,
    								"children":[
    									{
    									"name":"H",
    									"id":10,
    									"children":[]
    									}
    									]
    							},
    							{
    								"name":"I",
    								"id":7,
    								"children":[
    									{
    									"name":"J",
    									"id":11,
    									"children":[]
    									}
    									]
    							}
    							]
    					}
    					]
    		}
    ],
    "adminId" : "5cdf8ecba8eb9ef95572416e",
    "companyName" : "royal brother",
    "type":"services"
    
    *}
 */

  async edit(req) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = {};
        let resultingData;

        let accordionDocument = await database.models.createDefaultForm
          .findOne({
            adminId: req.body.adminId,
            type: req.body.type,
            companyName: req.body.companyName
          })
          .lean();

        if (!accordionDocument) {
          resultingData = await database.models.createDefaultForm.create({
            adminId: req.body.adminId,
            companyName: req.body.companyName,
            createdAt: new Date(),
            formResult: req.body.formResult,
            type: req.body.type
          });
        } else {
          let formDataLength = accordionDocument.formResult.length;

          if (formDataLength < 2) {
            accordionDocument.formResult.push(req.body.formResult[0]);

            resultingData = await database.models.createDefaultForm.findOneAndUpdate(
              {
                adminId: req.body.adminId,
                type: req.body.type
              },
              { $set: { formResult: accordionDocument.formResult } },
              {
                new: true,
                returnNewDocument: true
              }
            );
          } else if (formDataLength === 2) {
            accordionDocument.formResult[0] = accordionDocument.formResult[1];
            accordionDocument.formResult.pop();
            accordionDocument.formResult.push(req.body.formResult[0]);

            resultingData = await database.models.createDefaultForm.findOneAndUpdate(
              {
                adminId: req.body.adminId,
                type: req.body.type
              },
              { $set: { formResult: accordionDocument.formResult } },
              {
                new: true,
                returnNewDocument: true
              }
            );
          }
        }

        result["adminId"] = resultingData.adminId;
        result["companyName"] = resultingData.companyName;
        result["type"] = resultingData.type;
        result["formResult"] =
          resultingData.formResult[resultingData.formResult.length - 1];

        return resolve({
          message: "Created/Updated successfully",
          result: result
        });
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }

  /**
 * @api {post} {{url}}/test/api/v1/createDefaultForm/undo/:adminId?type=services  Undo Form
 * @apiGroup AccordionForm
 * @apiHeader {String} X-authenticated-user-token Authentication token
   * @apiParamExample {json} Listed Undo response:
  {
    "message": "Undo fetched successfully",
    "status": 200,
    "result": {
        "adminId": "5cdf8ecba8eb9ef95572416e",
        "companyName": "royal brother",
        "type": "services",
        "allVersionData": {
            "id": 1,
            "name": "Vogo",
            "children": [
                {
                    "id": 2,
                    "name": "A",
                    "children": [
                        {
                            "name": "B",
                            "id": 4,
                            "children": [
                                {
                                    "name": "C",
                                    "id": 8,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "D",
                            "id": 5,
                            "children": [
                                {
                                    "name": "E",
                                    "id": 9,
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "F",
                    "id": 3,
                    "children": [
                        {
                            "name": "G",
                            "id": 6,
                            "children": [
                                {
                                    "name": "H",
                                    "id": 10,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "I",
                            "id": 7,
                            "children": [
                                {
                                    "name": "J",
                                    "id": 11,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
 */

  async undo(req) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!req.params.id && !req.query.type) {
          throw "Params is required";
        }

        let accordionForCustomerDocument = await database.models.createDefaultForm
          .findOne({
            adminId: req.params.id,
            type: req.query.type
          })
          .lean();

        if (!accordionForCustomerDocument) {
          throw "No Accordion found for given params";
        } else {
          let result = {};
          result["adminId"] = accordionForCustomerDocument.adminId;
          result["companyName"] = accordionForCustomerDocument.companyName;
          result["type"] = accordionForCustomerDocument.type;
          result["formResult"] = accordionForCustomerDocument.formResult[0];

          return resolve({
            message: "Undo fetched successfully",
            result: result
          });
        }
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }

  /**
 * @api {post} {{url}}/test/api/v1/createDefaultForm/listCustomerExecutiveForm?adminId=5cdf8ecba8eb9ef95572416e&companyName=royal&type=services&id=4  listCustomerExecutiveForm
 * @apiGroup AccordionForm
 * @apiHeader {String} X-authenticated-user-token Authentication token
   * @apiParamExample {json} Listed Undo response:
   * {
    "message": "Customer executive form executed successfully",
    "status": 200,
    "result": {
        "immediateData": [
            {
                "name": "C",
                "id": 8
            }
        ]
    }
}
*@apiDescription If id is not given it will by default return all parents.
 */

  async listCustomerExecutiveForm(req) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = {};

        if (!req.query.companyName) {
          throw "company name is required";
        }

        if (!req.query.adminId) {
          throw "admin Id is required";
        }

        if (!req.query.type) {
          throw "type of services is required";
        }

        let resultingData = await database.models.createDefaultForm
          .findOne(
            {
              adminId: req.query.adminId,
              companyName: req.query.companyName,
              type: req.query.type
            },
            { formResult: 1 }
          )
          .lean();

        let currentData =
          resultingData.formResult[resultingData.formResult.length - 1];
        let childrenValue = [];

        function customerExecutiveHelperForm(formData, id) {
          // let children = []

          if (formData.id === id) {
            if (formData.children.length > 0) {
              formData.children.forEach(eachChildren => {
                let childrenObject = {};
                childrenObject["label"] = eachChildren.name;
                childrenObject["value"] = eachChildren.id;

                childrenValue.push(childrenObject);
                // childrenValue.push(_.omit(eachChildren,"children"))
              });
            }

            // else{

            //     childrenValue.push({
            //         label:formData.name,
            //         value:formData
            //     })
            // }

            return childrenValue;
          } else {
            if (formData.children.length > 0) {
              formData.children.forEach(eachChildren => {
                customerExecutiveHelperForm(eachChildren, id);
              });
            }
          }
        }

        if (req.query.id === undefined) {
          let children = [];

          currentData.children.forEach(eachChildren => {
            let childrenObject = {};

            childrenObject["label"] = eachChildren.name;
            childrenObject["value"] = eachChildren.id;

            children.push(childrenObject);
          });
          result["immediateData"] = children;
        } else {
          customerExecutiveHelperForm(currentData, parseInt(req.query.id));
          result["immediateData"] = childrenValue;
        }

        return resolve({
          message: "Customer executive form executed successfully",
          result: result
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
};
