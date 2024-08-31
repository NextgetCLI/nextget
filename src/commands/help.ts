import { GluegunToolbox } from 'gluegun'
import { commandTitle } from '../utils/strings'

module.exports = {
  name: 'help',
  alias: ['h'],
  description: 'Exibe a lista de todos comandos disponíveis.',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    commandTitle('Ajuda ❓', print)
    print.printCommands(toolbox)
  },
}
