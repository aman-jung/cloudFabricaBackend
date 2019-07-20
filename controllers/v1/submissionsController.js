let submissionsHelper = require(ROOT + "/module/submissions/helper");

module.exports = class Submissions extends Abstract {
  constructor() {
    super(submissionsSchema);
  }

  /**
 * @api {post} {{url}}/test/api/v1/submissions/make make submission
 * @apiGroup submissions
 * @apiHeader {String} X-authenticated-user-token Authentication token
 *   @apiParamExample {json}  body response:
 {
  "id":[2,4],
  	"ratings":4,
	"feedback":"No options"
}
* @apiParamExample {json} Listed submission response:
   {
    "message": "Submissions saved successfully",
    "status": 200,
    "result": {
        "submissions": [
            {
                "name": "A",
                "id": 2,
                "hierarchyLevel": 0
            },
            {
                "name": "B",
                "id": 4,
                "hierarchyLevel": 1
            }
        ],
        "_id": "5cf644a37602972b50f3711b",
        "userDetails": {
            "submittedBy": 1234,
            "Department": "services",
            "fName": "Raunak",
            "lName": "Ag",
            "adminId": "5cdf8ecba8eb9ef95572416e"
        },
          "ratings": 4,
        "feedback": "No options",
        "createdAt": "2019-06-04T10:14:55.931Z",
        "__v": 0
    }
}
*@apiDescription If id is not given it will throw you an error.
 */

  async make(req) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!req.body.id) {
          throw "Id is required.";
        } else {
          let userDocuments = await database.models.user
            .findOne(
              {
                _id: req.userDetails._id
              },
              { userInformation: 1, companyName: 1, email: 1 }
            )
            .lean();

          if (!userDocuments) {
            throw "User is not present in database";
          } else {
            let childrenValue = [];

            function formDataValue(formData, id, index) {
              if (formData.id === id) {
                childrenValue.push({
                  name: formData.name,
                  id: formData.id,
                  hierarchyLevel: index
                });

                return childrenValue;
              } else {
                if (formData.children.length > 0) {
                  formData.children.forEach(eachChildren => {
                    formDataValue(eachChildren, id, index);
                  });
                }
              }
            }

            let resultDocument = await database.models.createDefaultForm
              .findOne(
                {
                  adminId: userDocuments.userInformation.adminId,
                  type: userDocuments.userInformation.department,
                  companyName: userDocuments.companyName
                },
                { formResult: 1 }
              )
              .lean();

            let currentEditedForm =
              resultDocument.formResult[resultDocument.formResult.length - 1];
            let allIds = req.body.id;

            for (
              let pointerToAllIds = 0;
              pointerToAllIds < allIds.length;
              pointerToAllIds++
            ) {
              formDataValue(
                currentEditedForm,
                allIds[pointerToAllIds],
                pointerToAllIds
              );
            }

            let submissionObject = {
              userDetails: {
                submittedBy: userDocuments.userInformation["employeeId"],
                Department: userDocuments.userInformation.department,
                fName: userDocuments.userInformation["firstName"],
                lName: userDocuments.userInformation["lastName"],
                adminId: userDocuments.userInformation.adminId
              },
              ratings:req.body.ratings,
              feedback:req.body.feedback,
              submissions: childrenValue,
              createdAt: new Date()
            };

            let submissionDocument = await database.models.submissions.create(
              submissionObject
            );

            return resolve({
              message: "Submissions saved successfully",
              result: submissionDocument
            });
          }
        }
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }

  /**
 * @api {get} {{url}}/test/api/v1/listSubmissions/:adminId List Table data
 * @apiGroup submissions
 * @apiHeader {String} X-authenticated-user-token Authentication token
* @apiParamExample {json} Listed submission response:
{
    "status": 200,
    "result": [
        {
            "data": [
                {
                    "name": "A",
                    "id": 2,
                    "hierarchyLevel": 0,
                    "label": "parent"
                },
                {
                    "name": "B",
                    "id": 4,
                    "hierarchyLevel": 1,
                    "label": "children1"
                }
            ],
            "table": true,
            "submittedBy": 1234,
            "Department": "services",
            "fName": "Raunak",
            "lName": "Ag"
        }
    ]
}
*@apiDescription adminId is mandatory.
 */

  async listSubmissions(req) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!req.params.id) {
          throw "Admin id is mandatory";
        }

        let submissionDocuments = await database.models.submissions
          .find(
            {
              "userDetails.adminId": ObjectId(req.params.id)
            },
            { _id: 1 }
          )
          .lean();

        let chunkOfSubmissionDocument = _.chunk(submissionDocuments, 10);
        let submissionIds;
        let submissionsData;
        let results = [];

        for (
          let pointerToSubmissions = 0;
          pointerToSubmissions < chunkOfSubmissionDocument.length;
          pointerToSubmissions++
        ) {
          submissionIds = chunkOfSubmissionDocument[pointerToSubmissions].map(
            eachSubmissionData => {
              return eachSubmissionData._id;
            }
          );

          submissionsData = await database.models.submissions
            .find(
              {
                _id: { $in: submissionIds }
              },
              { _id: 0, __v: 0 }
            )
            .lean();

          await Promise.all(
            submissionsData.map(async eachSubmissionData => {
              let submissions = {};
              submissions["data"] = [];
              submissions["table"] = true;

              Object.keys(eachSubmissionData.userDetails).forEach(
                eachUserCredentials => {
                  if (["adminId"].indexOf(eachUserCredentials) == -1) {
                    submissions[eachUserCredentials] =
                      eachSubmissionData.userDetails[eachUserCredentials];
                  }
                }
              );

              if(eachSubmissionData.submissions.length>0){
                eachSubmissionData.submissions[0]["label"] = "parent";

                submissions.data.push(eachSubmissionData.submissions[0]);

                for (
                  let pointerToSubmissions = 1;
                  pointerToSubmissions < eachSubmissionData.submissions.length;
                  pointerToSubmissions++
                ) {
                eachSubmissionData.submissions[pointerToSubmissions]["label"] =
                  "children" + pointerToSubmissions;
                submissions.data.push(
                  eachSubmissionData.submissions[pointerToSubmissions]
                );
                }

                results.push(submissions);
              }
            })
          );
        }

        return resolve({
          result: results
        });
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }

  /**
 * @api {get} {{url}}/test/api/v1/submissions/submissionDrillDown/:adminId?type=services Graph submissions
 * @apiGroup submissions
 * @apiHeader {String} X-authenticated-user-token Authentication token
* @apiParamExample {json} Listed submission response:
{
    "message": "Data for graph fetched successfully",
    "status": 200,
    "result": {
        "data": [
            {
                "name": "A",
                "score": 2
            },
            {
                "name": "B",
                "score": 2
            }
        ],
        "graphData": true
    }
}
*@apiDescription adminId and type of service is mandatory.
 */

  async submissionDrillDown(req) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!req.params.id || !req.query.type) {
          throw "Admin id/type is required";
        }

        let editedForm = await database.models.createDefaultForm
          .findOne(
            {
              adminId: ObjectId(req.params.id),
              type: req.query.type
            },
            { formResult: 1, adminId: 1 }
          )
          .lean();

        let allFormValue = submissionsHelper.defaultForm(
          editedForm.formResult[editedForm.formResult.length - 1]
        );

        let submissionsDocuments = await database.models.submissions
          .find(
            {
              "userDetails.adminId": editedForm.adminId
            },
            { _id: 1 }
          )
          .lean();

        if (!submissionsDocuments.length > 0) {
          throw "Submissions is not there";
        }

        let chunkOfSubmissionDocument = _.chunk(submissionsDocuments, 10);
        let submissionIds;
        let submissionDocuments;
        let results = {};
        results["data"] = [];

        results.graphData = true;

        for (
          let pointerToSubmissions = 0;
          pointerToSubmissions < chunkOfSubmissionDocument.length;
          pointerToSubmissions++
        ) {
          submissionIds = chunkOfSubmissionDocument[pointerToSubmissions].map(
            eachSubmissionModel => {
              return eachSubmissionModel._id;
            }
          );

          submissionDocuments = await database.models.submissions
            .find(
              {
                _id: { $in: submissionIds }
              },
              { submissions: 1 }
            )
            .lean();

          await Promise.all(
            submissionDocuments.map(async eachSubmissionDocument => {
              for (
                let pointerToEachSubmissionData = 0;
                pointerToEachSubmissionData <
                eachSubmissionDocument.submissions.length;
                pointerToEachSubmissionData++
              ) {
                let singleSubmission =
                  eachSubmissionDocument.submissions[
                    pointerToEachSubmissionData
                  ];

                if (allFormValue[singleSubmission.name]) {
                  allFormValue[singleSubmission.name].score += 1;
                }
              }
            })
          );
        }

        Object.keys(allFormValue).forEach(eachFormData => {
          if (allFormValue[eachFormData].score !== 0) {
            results.data.push({
              name: eachFormData,
              score: allFormValue[eachFormData].score
            });
          }
        });

        return resolve({
          message: "Data for graph fetched successfully",
          result: results
        });
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }

   /**
 * @api {get} {{url}}/test/api/v1/submissions/submissionBasedOnRatings/:adminId?type=services Submissions based on ratings
 * @apiGroup submissions
 * @apiHeader {String} X-authenticated-user-token Authentication token
* @apiParamExample {json} Listed submission response:
{
    "message": "Data for graph fetched successfully",
    "status": 200,
    "result": {
        "data": [
            {
                "name": "Excellent",
                "score": 2
            },
            {
                "name": "Average",
                "score": 0
            },
            {
                "name": "Not Satisfied",
                "score": 0
            }
        ],
        "graphData": true
    }
}
*@apiDescription adminId and type of service is mandatory.
 */

  async submissionBasedOnRatings(req) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!req.params.id || !req.query.type) {
          throw "Admin id/type is required";
        }

        let submissionsDocuments = await database.models.submissions
          .find(
            {
              "userDetails.adminId": ObjectId(req.params.id),
              "userDetails.Department":req.query.type
            },
            { ratings:1 }
          )
          .lean();

        if (!submissionsDocuments.length > 0) {
          throw "Submissions is not there";
        }

        let excellent = submissionsDocuments.filter(item=>item.ratings>3)

        let average = submissionsDocuments.filter(item=>item.ratings === 3)
        let notSatisfied = submissionsDocuments.filter(item=>item.ratings<3)
        
        let results = {}
        results["data"] = []

        results.data.push({
          name:"Excellent",
          score:excellent.length
        },{
          name:"Average",
          score:average.length
        },{
          name:"Not Satisfied",
          score:notSatisfied.length
        })

        results["graphData"] = true

        return resolve({
          message: "Data for ratings fetched successfully",
          result: results
        });
      } catch (error) {
        return reject({
          message: error
        });
      }
    });
  }

    /**
 * @api {get} {{url}}/test/api/v1/submissions/submissionBasedOnRatings/:adminId?type=services Submissions based on ratings
 * @apiGroup submissions
 * @apiHeader {String} X-authenticated-user-token Authentication token
* @apiParamExample {json} Listed submission response:
{
    "message": "Data for graph fetched successfully",
    "status": 200,
    "result": {
        "data": [
            {
                "name": "Excellent",
                "score": 2
            },
            {
                "name": "Average",
                "score": 0
            },
            {
                "name": "Not Satisfied",
                "score": 0
            }
        ],
        "graphData": true
    }
}
*@apiDescription adminId and type of service is mandatory.
 */

async submissionBasedOnRatings(req) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!req.params.id || !req.query.type) {
        throw "Admin id/type is required";
      }

      let submissionsDocuments = await database.models.submissions
        .find(
          {
            "userDetails.adminId": ObjectId(req.params.id),
            "userDetails.Department":req.query.type
          },
          { ratings:1 }
        )
        .lean();

      if (!submissionsDocuments.length > 0) {
        throw "Submissions is not there";
      }

      let excellent = submissionsDocuments.filter(item=>item.ratings>3)

      let average = submissionsDocuments.filter(item=>item.ratings === 3)
      let notSatisfied = submissionsDocuments.filter(item=>item.ratings<3)
      
      let results = {}
      results["data"] = []

      results.data.push({
        name:"Excellent",
        score:excellent.length
      },{
        name:"Average",
        score:average.length
      },{
        name:"Not Satisfied",
        score:notSatisfied.length
      })

      results["graphData"] = true

      return resolve({
        message: "Data for ratings fetched successfully",
        result: results
      });
    } catch (error) {
      return reject({
        message: error
      });
    }
  });
}
};
