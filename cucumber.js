module.exports = {
    // default: `--format-options '{"snippetInterface": "synchronous"}'`
    "default": {
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            // "src/test/features/addCustomer.feature",
            // "src/test/features/addCustomerMembership.feature",
            // "src/test/features/editGeneralSettings.feature",
            // "src/test/features/editMemberData.feature",
            // "src/test/features/editMembershipsData.feature",
            // "src/test/features/editPointOfSale.feature",
            // "src/test/features/logout.feature",
            "src/test/features/login.feature",
        ],
        
        "dryRun": false,
        "require": [
            "src/test/steps/*.ts",
            "src/test/setup/hooks.ts"
        ],
        "requireModule": [
            "ts-node/register"
        ],
        "format": [
            "html:cucumber-report.html"
        ]
        
    },
    globals: {
        "ts-jest": {
          "diagnostics": {
            "warnOnly": true
          }
        }
      }
    
  }