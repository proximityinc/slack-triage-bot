const triageConfig = {
  statuses: {
    WorkingOnIt: {
      emoji: ':working_on_it:'
    },
    LookingIntoIt: {
      emoji: ':looking_into_it:'
    },
    LongTermFix: {
      emoji: ':long_term_fix:'
    },
    ReadyToDeploy: {
      emoji: ':ready_to_deploy:'
    },
    Done: {
      emoji: ':done:'
    }
  },
  levels: {
    Urgent: {
      emoji: ':red_circle:'
    },
    Medium: {
      emoji: ':large_blue_circle:'
    },
    Low: {
      emoji: ':white_circle:'
    }
  },
  scheduled_reminders: [
    {
      expression: '0 9,15 * * *',
      hours_to_look_back: 24,
      report_on_levels: ['Urgent', 'Medium'], // only report on messages with one of these levels ("OR" logic)
      report_on_does_not_have_status: ['Done'] // only report on messages that do not have either of these statuses ("OR")
    }
  ]
}

// !!! You should not need to edit anything below this comment !!!

// Load our internal triage config helper
const { generateTriageConfigLookups } = require('./helpers/misc')

// Create some calculated arrays/lookups based off of our triageConfig
triageConfig._ = generateTriageConfigLookups(triageConfig)

// Export the config and the generated lookups
module.exports = triageConfig
