module.exports = {
    // default: `--format-options '{"snippetInterface": "synchronous"}'`
    "default": {
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            "src/test/features/addReservation.feature" 
        ],
        "dryRun": false,
        "require": [
            "src/test/steps/addReservation.ts"
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