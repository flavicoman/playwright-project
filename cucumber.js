module.exports = {
    // default: `--format-options '{"snippetInterface": "synchronous"}'`
    "default": {
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            "src/test/features/editGeneralSettings.feature" 
           
        ],
        
        "dryRun": false,
        "require": [
            "src/test/steps/*.ts",
            "src/test/setup/hooks.ts"
        ],
        "requireModule": [
            "ts-node/register"
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