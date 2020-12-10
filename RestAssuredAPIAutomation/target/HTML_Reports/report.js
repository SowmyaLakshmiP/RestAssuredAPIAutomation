$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/socialNetworkingServices.feature");
formatter.feature({
  "line": 2,
  "name": "POST, GET APIs validation with paramenters passed and validate the response",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@apiservtests"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@firsttest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "requesting post api with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify post api response counts \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 10
    },
    {
      "cells": [
        "id"
      ],
      "line": 11
    },
    {
      "cells": [
        "title"
      ],
      "line": 12
    },
    {
      "cells": [
        "body"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 16,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "id\u003d59",
        "200",
        "1"
      ],
      "line": 17,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "userId\u003d6",
        "200",
        "10"
      ],
      "line": 18,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiservtests"
    },
    {
      "line": 3,
      "name": "@firsttest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "requesting post api with \"id\u003d59\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify post api response counts \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 10
    },
    {
      "cells": [
        "id"
      ],
      "line": 11
    },
    {
      "cells": [
        "title"
      ],
      "line": 12
    },
    {
      "cells": [
        "body"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 270606200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 11
    },
    {
      "val": "id\u003d59",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.requestingApiWith(String,String)"
});
formatter.result({
  "duration": 2850721500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 5545000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "SocialNetworkingStepDef.verifyApiResponseCounts(String,String)"
});
formatter.result({
  "duration": 163254500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 2316600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiservtests"
    },
    {
      "line": 3,
      "name": "@firsttest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "requesting post api with \"userId\u003d6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify post api response counts \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 10
    },
    {
      "cells": [
        "id"
      ],
      "line": 11
    },
    {
      "cells": [
        "title"
      ],
      "line": 12
    },
    {
      "cells": [
        "body"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 1969700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 11
    },
    {
      "val": "userId\u003d6",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.requestingApiWith(String,String)"
});
formatter.result({
  "duration": 656348100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 2437800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "SocialNetworkingStepDef.verifyApiResponseCounts(String,String)"
});
formatter.result({
  "duration": 4986700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 3147700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@secondtest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "requesting comments api with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify comments api response counts \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 26
    },
    {
      "cells": [
        "id"
      ],
      "line": 27
    },
    {
      "cells": [
        "name"
      ],
      "line": 28
    },
    {
      "cells": [
        "email"
      ],
      "line": 29
    },
    {
      "cells": [
        "body"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 33,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "email\u003dNikita@garfield.biz",
        "200",
        "1"
      ],
      "line": 34,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "postId\u003d3",
        "200",
        "5"
      ],
      "line": 35,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiservtests"
    },
    {
      "line": 19,
      "name": "@secondtest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "requesting comments api with \"email\u003dNikita@garfield.biz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify comments api response counts \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 26
    },
    {
      "cells": [
        "id"
      ],
      "line": 27
    },
    {
      "cells": [
        "name"
      ],
      "line": 28
    },
    {
      "cells": [
        "email"
      ],
      "line": 29
    },
    {
      "cells": [
        "body"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 4232400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "email\u003dNikita@garfield.biz",
      "offset": 30
    }
  ],
  "location": "SocialNetworkingStepDef.requestingApiWith(String,String)"
});
formatter.result({
  "duration": 669325100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 2029700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "SocialNetworkingStepDef.verifyApiResponseCounts(String,String)"
});
formatter.result({
  "duration": 2674900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 2247200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiservtests"
    },
    {
      "line": 19,
      "name": "@secondtest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "requesting comments api with \"postId\u003d3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify comments api response counts \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 26
    },
    {
      "cells": [
        "id"
      ],
      "line": 27
    },
    {
      "cells": [
        "name"
      ],
      "line": 28
    },
    {
      "cells": [
        "email"
      ],
      "line": 29
    },
    {
      "cells": [
        "body"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 4763600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "postId\u003d3",
      "offset": 30
    }
  ],
  "location": "SocialNetworkingStepDef.requestingApiWith(String,String)"
});
formatter.result({
  "duration": 782189400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 2196200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 37
    }
  ],
  "location": "SocialNetworkingStepDef.verifyApiResponseCounts(String,String)"
});
formatter.result({
  "duration": 2887400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 3700600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@thirdtest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "requesting users api with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify users api response counts \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 43
    },
    {
      "cells": [
        "name"
      ],
      "line": 44
    },
    {
      "cells": [
        "phone"
      ],
      "line": 45
    },
    {
      "cells": [
        "email"
      ],
      "line": 46
    },
    {
      "cells": [
        "website"
      ],
      "line": 47
    },
    {
      "cells": [
        "company"
      ],
      "line": 48
    },
    {
      "cells": [
        "address"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 52,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "website\u003danastasia.net",
        "200",
        "1"
      ],
      "line": 53,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "id\u003d9",
        "200",
        "1"
      ],
      "line": 54,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiservtests"
    },
    {
      "line": 36,
      "name": "@thirdtest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "requesting users api with \"website\u003danastasia.net\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify users api response counts \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 43
    },
    {
      "cells": [
        "name"
      ],
      "line": 44
    },
    {
      "cells": [
        "phone"
      ],
      "line": 45
    },
    {
      "cells": [
        "email"
      ],
      "line": 46
    },
    {
      "cells": [
        "website"
      ],
      "line": 47
    },
    {
      "cells": [
        "company"
      ],
      "line": 48
    },
    {
      "cells": [
        "address"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 4231600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "website\u003danastasia.net",
      "offset": 27
    }
  ],
  "location": "SocialNetworkingStepDef.requestingApiWith(String,String)"
});
formatter.result({
  "duration": 605315900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 2635300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "SocialNetworkingStepDef.verifyApiResponseCounts(String,String)"
});
formatter.result({
  "duration": 2578500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 2042300,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiservtests"
    },
    {
      "line": 36,
      "name": "@thirdtest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "requesting users api with \"id\u003d9\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify users api response counts \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 43
    },
    {
      "cells": [
        "name"
      ],
      "line": 44
    },
    {
      "cells": [
        "phone"
      ],
      "line": 45
    },
    {
      "cells": [
        "email"
      ],
      "line": 46
    },
    {
      "cells": [
        "website"
      ],
      "line": 47
    },
    {
      "cells": [
        "company"
      ],
      "line": 48
    },
    {
      "cells": [
        "address"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 4486000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "id\u003d9",
      "offset": 27
    }
  ],
  "location": "SocialNetworkingStepDef.requestingApiWith(String,String)"
});
formatter.result({
  "duration": 651805900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 1919100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "SocialNetworkingStepDef.verifyApiResponseCounts(String,String)"
});
formatter.result({
  "duration": 2273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 1637100,
  "status": "passed"
});
});