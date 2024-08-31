import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'help',
  alias: ['h'],
  description: 'Exibe a lista de todos comandos disponíveis.',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.printCommands(toolbox)
  },
}
