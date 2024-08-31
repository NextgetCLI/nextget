import { GluegunToolbox } from 'gluegun'
import { commandTitle } from '../utils/strings'

module.exports = {
  name: 'version',
  alias: ['v'],
  description: 'Exibe a versão atual da CLI',
  run: async (box: GluegunToolbox) => {
    const { print, meta } = box

    commandTitle('Versão ℹ️', print)
    print.info(meta.version())
  },
}
