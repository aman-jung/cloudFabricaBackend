define({ "api": [
  {
    "type": "get",
    "url": "/tasks/:id",
    "title": "Find a task",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"done\": false\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/loginController.js",
    "groupTitle": "Tasks",
    "name": "GetTasksId"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p>"
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./node_modules/gulp-apidoc/example/example.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p>"
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/gulp-apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.1.0.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/gulp-apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.1.0.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.3.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/gulp-apidoc/example/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.3.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/gulp-apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change a User",
    "version": "0.3.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This function has same errors like POST /user, but errors not defined again, they were included with &quot;apiErrorStructure&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/gulp-apidoc/example/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change a User",
    "version": "0.3.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This function has same errors like POST /user, but errors not defined again, they were included with &quot;apiErrorStructure&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_doc_main_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_doc_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/cli-table/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/cli-table/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/cli-table/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/cli-table/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_utils_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/cli-table/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_cli_table_lib_utils_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./module/migrations/node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_module_migrations_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ansi-colors/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ansi_colors_index_js",
    "name": "Public"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./node_modules/apidoc/template/main.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_apidoc_template_main_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_apidoc_template_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/append-buffer/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_append_buffer_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_append_buffer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/array-each/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_array_each_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_array_each_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/array-sort/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_array_sort_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_array_sort_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_read_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/raw.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_body_parser_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bunyan/lib/bunyan.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bunyan_lib_bunyan_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_bunyan_lib_bunyan_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/colornames/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/colornames/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/colornames/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/colornames/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colornames_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/colorspace/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colorspace_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_colorspace_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/copy-descriptor/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_copy_descriptor_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_copy_descriptor_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/default-compare/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_default_compare_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_default_compare_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/detect-file/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_detect_file_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_detect_file_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/dist/diagnostics.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/dist/diagnostics.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/dist/diagnostics.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/dist/diagnostics.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/dist/diagnostics.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/dist/diagnostics.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_dist_diagnostics_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/diagnostics/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_diagnostics_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/duplexer2/node_modules/isarray/build/build.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/duplexer2/node_modules/isarray/build/build.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/duplexer2/node_modules/isarray/build/build.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/duplexer2/node_modules/isarray/build/build.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/duplexer2/node_modules/isarray/build/build.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/duplexer2/node_modules/isarray/build/build.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_duplexer2_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/enabled/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_enabled_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_enabled_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/env-variable/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_env_variable_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_env_variable_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/env-variable/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_env_variable_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_env_variable_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/env-variable/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_env_variable_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_env_variable_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/etag/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_etag_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_expand_brackets_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_express_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_middleware_init_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_middleware_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_express_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/finalhandler/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_finalhandler_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/findup-sync/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_findup_sync_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_findup_sync_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/matchdep/node_modules/findup-sync/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_matchdep_node_modules_findup_sync_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_matchdep_node_modules_findup_sync_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose-legacy-pluralize/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_legacy_pluralize_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_legacy_pluralize_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browserDocument.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browserDocument_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browserDocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cast.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cast_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cast_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document_provider.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_provider_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_document_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/cast.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_cast_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_cast_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/disconnected.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_disconnected_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_disconnected_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/messages.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_messages_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_messages_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/mongooseError.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_mongooseError_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_mongooseError_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/objectExpected.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_objectExpected_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_objectExpected_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/objectParameter.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_objectParameter_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_objectParameter_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/parallelSave.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_parallelSave_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_parallelSave_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/strict.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_strict_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_strict_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/validation.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_validation_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_validation_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/validator.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_validator_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_validator_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/version.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_version_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_error_version_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/cursor/eachAsync.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_helpers_cursor_eachAsync_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_helpers_cursor_eachAsync_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/setDefaultsOnInsert.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_helpers_setDefaultsOnInsert_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_helpers_setDefaultsOnInsert_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/updateValidators.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_helpers_updateValidators_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_helpers_updateValidators_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/browser_build/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/bson/lib/bson/bson.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mongoose_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/multipipe/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_multipipe_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_multipipe_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_needle_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object-copy/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_object_copy_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_object_copy_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object.defaults/immutable.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_object_defaults_immutable_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_object_defaults_immutable_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object.defaults/mutable.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_object_defaults_mutable_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_object_defaults_mutable_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/one-time/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_one_time_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_one_time_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/one-time/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_one_time_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_one_time_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/parse-passwd/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_parse_passwd_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_parse_passwd_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/path-to-regexp/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_path_to_regexp_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_regex_not_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_regex_not_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_repeat_string_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_send_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/sliced/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_sliced_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_sliced_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/compiler.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_compiler_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/source-maps.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_source_maps_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_lib_source_maps_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/debug.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/debug/src/node.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_node_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/node_modules/ms/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/static-extend/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_static_extend_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_static_extend_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/text-hex/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_text_hex_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_text_hex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_to_regex_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_to_regex_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_use_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_use_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/utils-merge/index.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_utils_merge_index_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/apidoc/main.js",
    "group": "_home_aman_Documents_boiler_plate_for_nodejs_public_apidoc_main_js",
    "groupTitle": "_home_aman_Documents_boiler_plate_for_nodejs_public_apidoc_main_js",
    "name": ""
  }
] });
