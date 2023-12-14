dmx.config({
  "index": {
    "APIusers": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "user_Id"
          },
          {
            "type": "text",
            "name": "username"
          },
          {
            "type": "text",
            "name": "email"
          },
          {
            "type": "text",
            "name": "created_At"
          },
          {
            "type": "text",
            "name": "password"
          },
          {
            "type": "number",
            "name": "tel"
          },
          {
            "type": "number",
            "name": "id_role"
          },
          {
            "type": "text",
            "name": "supprime"
          },
          {
            "type": "text",
            "name": "libelle_role"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "transfer-encoding"
          }
        ]
      }
    ],
    "data_view1": {
      "meta": null,
      "outputType": "array"
    }
  }
});
