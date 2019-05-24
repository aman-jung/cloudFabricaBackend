define({ "api": [
  {
    "type": "get",
    "url": "{{url}}/test/api/v1/superAdmin/listAdmin",
    "title": "list all the admins",
    "group": "Super_Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/v1/superAdminController.js",
    "groupTitle": "Super_Admin",
    "name": "GetUrlTestApiV1SuperadminListadmin"
  }
] });
