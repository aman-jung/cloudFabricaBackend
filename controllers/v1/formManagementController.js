module.exports = class FormManagement extends Abstract {
  constructor() {
    super(formManagementSchema);
  }

  /**
 * @api {post} {{url}}/test/api/v1/formManagement/createAdminForm  create admin form
 * @apiGroup Form 
 * @apiHeader {String} X-authenticated-user-token Authentication token
   * @apiParamExample {json} Body Params:
   * {
	"type":"Services",
	"adminId":"5cdf8ecba8eb9ef95572416e"
} 
   * @apiParamExample {json}  response:
   {
    "message": "Form Created Successfully",
    "status": 200,
    "result": {
        "_id": "5d0617531f44a462d538dd16",
        "type": "Billing",
        "adminId": "5cdf8ecba8eb9ef95572416e",
        "__v": 0
    }
}
*@apiDescription If same type is submitted for the particular admin then it will throw an error
 */

  async createAdminForm(req) {
    return new Promise(async (resolve, reject) => {
      try {
        let result;

        let formManagementDocuments = await database.models.formManagement
          .find({
            adminId: req.body.adminId
          })
          .lean();

        let queryFormData = {
          type: req.body.type,
          adminId: req.body.adminId
        };

        if (!formManagementDocuments.length) {
          result = await database.models.formManagement.create(queryFormData);
        } else {
          let isFormPresent = formManagementDocuments.findIndex(
            item => item.type == req.body.type
          );

          if (isFormPresent < 0) {
            result = await database.models.formManagement.create(queryFormData);
          } else {
            throw "Form with given name already exists";
          }
        }

        return resolve({
          message: "Form Created Successfully",
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
 * @api {post} {{url}}/test/api/v1/formManagement/listAdminForm?adminId  List admin form
 * @apiGroup Form 
 * @apiHeader {String} X-authenticated-user-token Authentication token
   * @apiParamExample {json} Body Params:
   * {
	"type":"Services",
	"adminId":"5cdf8ecba8eb9ef95572416e"
} 
   * @apiParamExample {json} response:
   {
    "message": "Form Listed Successfully",
    "status": 200,
    "result": [
        {
            "type": "Billing"
        }
    ]
}
}
 */

  async listAdminForm(req) {
    return new Promise(async (resolve, reject) => {
      try {
        let result;

        if (!req.query.adminId) {
          throw "Admin Id is required";
        }

        let formManagementDocuments = await database.models.formManagement
          .find(
            {
              adminId: req.query.adminId
            },
            { type: 1, _id: 0 }
          )
          .lean();

        if (!formManagementDocuments.length) {
          result = [];
        } else {
          result = formManagementDocuments;
        }

        return resolve({
          message: "Form Listed Successfully",
          result: result
        });
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }
};
