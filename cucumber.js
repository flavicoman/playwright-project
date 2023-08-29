module.exports = {
    // default: `--format-options '{"snippetInterface": "synchronous"}'`
    "default": {
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            "src/test/features/addMember.feature",
            
           
        ],
        
        "dryRun": true,
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