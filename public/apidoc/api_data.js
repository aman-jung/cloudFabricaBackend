define({ "api": [
  {
    "type": "get",
    "url": "{{url}}/test/api/v1/createDefaultForm/listDefaultForm/:id?type=services",
    "title": "Create Default form for all admin",
    "version": "0.0.1",
    "group": "AccordionForm",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>if type is not there it will return default form</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Default form fetched successfully\",\n    \"status\": 200,\n    \"result\": {\n        \"type\": \"defaultForm\",\n        \"formResult\": {\n            \"id\": 1,\n            \"name\": \"Default Form\",\n            \"children\": [\n                {\n                    \"id\": 2,\n                    \"name\": \"Default Parent1\",\n                    \"children\": [\n                        {\n                            \"id\": 4,\n                            \"name\": \"Default Children1\",\n                            \"children\": [\n                                {\n                                    \"id\": 8,\n                                    \"name\": \"Default sub-children1\",\n                                    \"children\": []\n                                }\n                            ]\n                        },\n                        {\n                            \"id\": 5,\n                            \"name\": \"Default Children2\",\n                            \"children\": [\n                                {\n                                    \"id\": 9,\n                                    \"name\": \"Default sub-children2\",\n                                    \"children\": []\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"id\": 3,\n                    \"name\": \"Default Parent2\",\n                    \"children\": [\n                        {\n                            \"id\": 6,\n                            \"name\": \"Default Children3\",\n                            \"children\": [\n                                {\n                                    \"id\": 10,\n                                    \"name\": \"Default sub-children3\",\n                                    \"children\": []\n                                }\n                            ]\n                        },\n                        {\n                            \"id\": 7,\n                            \"name\": \"Default Children4\",\n                            \"children\": [\n                                {\n                                    \"id\": 11,\n                                    \"name\": \"Default sub-children4\",\n                                    \"children\": []\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-authenticated-user-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "filename": "controllers/v1/createDefaultFormController.js",
    "groupTitle": "AccordionForm",
    "name": "GetUrlTestApiV1CreatedefaultformListdefaultformIdTypeServices"
  },
  {
    "type": "post",
    "url": "{{url}}/test/api/v1/createDefaultForm/edit",
    "title": "Edit Form",
    "group": "AccordionForm",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-authenticated-user-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "formResult",
            "description": ""
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": ""
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": ""
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body for edit:",
          "content": "{\n    \"formResult\" : [\n    \t\t{\n    \t\t\t\t\"id\":1,\n    \t\t\t\t\"name\":\"Vogo2\",\n    \t\t\t\t\"children\":[\n    \t\t\t\t\t{\n    \t\t\t\t\t\t\"id\":2,\n    \t\t\t\t\t\t\"name\":\"A\",\n    \t\t\t\t\t\t\"children\":[\n    \t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\"name\":\"B\",\n    \t\t\t\t\t\t\t\t\"id\":4,\n    \t\t\t\t\t\t\t\t\"children\":[\n    \t\t\t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\t\"name\":\"C\",\n    \t\t\t\t\t\t\t\t\t\"id\":8,\n    \t\t\t\t\t\t\t\t\t\"children\":[]\n    \t\t\t\t\t\t\t\t}\n    \t\t\t\t\t\t\t\t]\n    \t\t\t\t\t\t\t},\n    \t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\"name\":\"D\",\n    \t\t\t\t\t\t\t\t\"id\":5,\n    \t\t\t\t\t\t\t\t\"children\":[\n    \t\t\t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\t\"name\":\"E\",\n    \t\t\t\t\t\t\t\t\t\"id\":9,\n    \t\t\t\t\t\t\t\t\t\"children\":[]\n    \t\t\t\t\t\t\t\t\t}\n    \t\t\t\t\t\t\t\t\t]\n    \t\t\t\t\t\t\t}\n    \t\t\t\t\t\t\t]},\n                        {\n                        \t\"name\":\"F\",\n    \t\t\t\t\t\t\"id\":3,\n    \t\t\t\t\t\t\"children\":[\n    \t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\"name\":\"G\",\n    \t\t\t\t\t\t\t\t\"id\":6,\n    \t\t\t\t\t\t\t\t\"children\":[\n    \t\t\t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\t\"name\":\"H\",\n    \t\t\t\t\t\t\t\t\t\"id\":10,\n    \t\t\t\t\t\t\t\t\t\"children\":[]\n    \t\t\t\t\t\t\t\t\t}\n    \t\t\t\t\t\t\t\t\t]\n    \t\t\t\t\t\t\t},\n    \t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\"name\":\"I\",\n    \t\t\t\t\t\t\t\t\"id\":7,\n    \t\t\t\t\t\t\t\t\"children\":[\n    \t\t\t\t\t\t\t\t\t{\n    \t\t\t\t\t\t\t\t\t\"name\":\"J\",\n    \t\t\t\t\t\t\t\t\t\"id\":11,\n    \t\t\t\t\t\t\t\t\t\"children\":[]\n    \t\t\t\t\t\t\t\t\t}\n    \t\t\t\t\t\t\t\t\t]\n    \t\t\t\t\t\t\t}\n    \t\t\t\t\t\t\t]\n    \t\t\t\t\t}\n    \t\t\t\t\t]\n    \t\t}\n    ],\n    \"adminId\" : \"5cdf8ecba8eb9ef95572416e\",\n    \"companyName\" : \"royal brother\",\n    \"type\":\"services\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/v1/createDefaultFormController.js",
    "groupTitle": "AccordionForm",
    "name": "PostUrlTestApiV1CreatedefaultformEdit"
  },
  {
    "type": "post",
    "url": "{{url}}/test/api/v1/createDefaultForm/undo/:adminId?type=services",
    "title": "Undo Form",
    "group": "AccordionForm",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-authenticated-user-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Listed Undo response:",
          "content": "  {\n    \"message\": \"Undo fetched successfully\",\n    \"status\": 200,\n    \"result\": {\n        \"adminId\": \"5cdf8ecba8eb9ef95572416e\",\n        \"companyName\": \"royal brother\",\n        \"type\": \"services\",\n        \"allVersionData\": {\n            \"id\": 1,\n            \"name\": \"Vogo\",\n            \"children\": [\n                {\n                    \"id\": 2,\n                    \"name\": \"A\",\n                    \"children\": [\n                        {\n                            \"name\": \"B\",\n                            \"id\": 4,\n                            \"children\": [\n                                {\n                                    \"name\": \"C\",\n                                    \"id\": 8,\n                                    \"children\": []\n                                }\n                            ]\n                        },\n                        {\n                            \"name\": \"D\",\n                            \"id\": 5,\n                            \"children\": [\n                                {\n                                    \"name\": \"E\",\n                                    \"id\": 9,\n                                    \"children\": []\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"name\": \"F\",\n                    \"id\": 3,\n                    \"children\": [\n                        {\n                            \"name\": \"G\",\n                            \"id\": 6,\n                            \"children\": [\n                                {\n                                    \"name\": \"H\",\n                                    \"id\": 10,\n                                    \"children\": []\n                                }\n                            ]\n                        },\n                        {\n                            \"name\": \"I\",\n                            \"id\": 7,\n                            \"children\": [\n                                {\n                                    \"name\": \"J\",\n                                    \"id\": 11,\n                                    \"children\": []\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/v1/createDefaultFormController.js",
    "groupTitle": "AccordionForm",
    "name": "PostUrlTestApiV1CreatedefaultformUndoAdminidTypeServices"
  },
  {
    "type": "get",
    "url": "{{url}}/test/api/v1/admin/listCustomerExecutive?companyName=airtel",
    "title": "List Customer Executive",
    "group": "List_Customer_executive",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-authenticated-user-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Customer Executive fetched successfully\",\n    \"status\": 200,\n    \"result\": [\n        {\n            \"companyName\": \"airtel\",\n            \"email\": \"airtelfirst@airtelfirst.com\",\n            \"role\": \"customerExecutive\",\n            \"userInformation\": {\n                \"Employee Id\": 1,\n                \"Department\": \"Billing\",\n                \"First Name\": \"Raunak\",\n                \"Last Name\": \"Agrawal\"\n            },\n            \"createdAt\": \"2019-05-19T16:03:29.839Z\"\n        },\n        {\n            \"companyName\": \"airtel\",\n            \"email\": \"airtelsecond@airtelsecond.com\",\n            \"role\": \"customerExecutive\",\n            \"userInformation\": {\n                \"Employee Id\": 1,\n                \"Department\": \"Billing\",\n                \"First Name\": \"Raunak\",\n                \"Last Name\": \"Agrawal\"\n            },\n            \"createdAt\": \"2019-05-19T16:04:40.894Z\"\n        },\n        {\n            \"companyName\": \"airtel\",\n            \"email\": \"idea@idea.com\",\n            \"role\": \"customerExecutive\",\n            \"userInformation\": {\n                \"Employee Id\": \"1\",\n                \"Department\": \"schedule\",\n                \"First Name\": \"aman\",\n                \"Last Name\": \"karki\"\n            },\n            \"createdAt\": \"2019-05-19T16:16:31.149Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/v1/adminController.js",
    "groupTitle": "List_Customer_executive",
    "name": "GetUrlTestApiV1AdminListcustomerexecutiveCompanynameAirtel"
  },
  {
    "type": "post",
    "url": "{{url}}/test/api/v1/user/verify",
    "title": "Verify Admin/customerExecutive/superAdmin",
    "group": "Log_In",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n\"email\":\"a@gmail.com\",\n\"password\":\"*****\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/v1/userController.js",
    "groupTitle": "Log_In",
    "name": "PostUrlTestApiV1UserVerify"
  },
  {
    "type": "get",
    "url": "{{url}}/test/api/v1/configurations/navigation",
    "title": "Navigation Links",
    "version": "0.0.1",
    "group": "Navigation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-authenticated-user-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n\n    \"message\": \"Configuration successfully fetched\",\n    \"status\": 200,\n    \"result\": {\n        \"tabActions\": [\n            {\n                \"name\": \"Super Admin Dashboard\",\n                \"id\": \"superAdmin\",\n                \"tabActions\": [\n                    {\n                        \"name\": \"Add Admin Credentials\",\n                        \"id\": \"addAdmin\",\n                        \"tabActions\": []\n                    },\n                    {\n                        \"name\": \"List Admin\",\n                        \"id\": \"listAdmin\",\n                        \"tabActions\": []\n                    },\n                    {\n                        \"name\": \"Create Admin Profile/Details\",\n                        \"id\": \"adminDetails\",\n                        \"tabActions\": []\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/v1/configurationsController.js",
    "groupTitle": "Navigation",
    "name": "GetUrlTestApiV1ConfigurationsNavigation"
  },
  {
    "type": "post",
    "url": "{{url}}/test/api/v1/user/create",
    "title": "Create admin",
    "group": "Sign_up_Admin",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Name of the company</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>company email</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role should be - admin</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date at which this api is created</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "userInformation",
            "description": "<p>userInformation Object consists of personOfContact and personOfContactEmail field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n\"companyName\":\"royal brother\",\n\"email\":\"customerExecutive@customer.com\",\n\"password\":\"customer\",\n\"role\":\"customerExecutive\",\n\"userInformation\":{\n\t\"personOfContact\":Aman,\n\t\"personOfContactEmail\":\"aman@gmail.com\",\n}\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Api for creating admin</p>",
    "version": "0.0.0",
    "filename": "controllers/v1/userController.js",
    "groupTitle": "Sign_up_Admin",
    "name": "PostUrlTestApiV1UserCreate"
  },
  {
    "type": "post",
    "url": "{{url}}/test/api/v1/user/create",
    "title": "Create customerExecutive",
    "group": "Sign_up_Customer_Executive",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Name of the company</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>company email</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role should be - customerExecutive</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date at which this api is created</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "userInformation",
            "description": "<p>Object should have - employeeId,department-eg:billing,etc,firstName,lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n\"companyName\":\"royal brother\",\n\"email\":\"customerExecutive@customer.com\",\n\"password\":\"customer\",\n\"role\":\"customerExecutive\",\n\"userInformation\":{\n\t\"employeeId\":1234,\n\t\"department\":\"Billing\",\n\t\"firstName\":\"Raunak\",\n\t\"lastName\":\"Ag\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/v1/userController.js",
    "groupTitle": "Sign_up_Customer_Executive",
    "name": "PostUrlTestApiV1UserCreate"
  },
  {
    "type": "get",
    "url": "{{url}}/test/api/v1/superAdmin/listAdmin",
    "title": "list all the admins",
    "version": "0.0.1",
    "group": "Super_Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-authenticated-user-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Admin listed\",\n    \"status\": 200,\n    \"result\": [\n        {\n            \"name\": \"yulu\",\n            \"email\": \"yulu@yulu.com\",\n            \"role\": \"admin\",\n            \"userInformation\": {\n                \"personOfContactEmail\": \"rama@rama.com\",\n                \"personOfContact\": \"S.rama\"\n            },\n            \"createdAt\": \"2019-05-17T16:31:08.860Z\",\n            \"__v\": 0\n        },\n        {\n            \"name\": \"royal brother\",\n            \"email\": \"royal@brother.com\",\n            \"role\": \"admin\",\n            \"userInformation\": {\n                \"personOfContactEmail\": \"hiran@email.com\",\n                \"personOfContact\": \"Hiran\"\n            },\n            \"createdAt\": \"2019-05-17T17:52:18.461Z\",\n            \"__v\": 0\n        },\n        {\n            \"email\": \"joe@joe.com\",\n            \"role\": \"admin\",\n            \"userInformation\": {\n                \"personOfContact\": \"joe\",\n                \"personOfContactEmail\": \"joe@joe.com\"\n            },\n            \"createdAt\": \"2019-05-19T15:05:22.887Z\",\n            \"__v\": 0\n        },\n        {\n            \"companyName\": \"vogo\",\n            \"email\": \"joe1@joe.com\",\n            \"role\": \"admin\",\n            \"userInformation\": {\n                \"personOfContact\": \"joe\",\n                \"personOfContactEmail\": \"joe@joe.com\"\n            },\n            \"createdAt\": \"2019-05-19T15:09:32.428Z\",\n            \"__v\": 0\n        },\n        {\n            \"companyName\": \"airtel\",\n            \"email\": \"airtel@airtel.com\",\n            \"role\": \"admin\",\n            \"userInformation\": {\n                \"personOfContact\": \"airtel1\",\n                \"personOfContactEmail\": \"airtel1@airtel1.com\"\n            },\n            \"createdAt\": \"2019-05-19T16:01:52.960Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/v1/superAdminController.js",
    "groupTitle": "Super_Admin",
    "name": "GetUrlTestApiV1SuperadminListadmin"
  }
] });
