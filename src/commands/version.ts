import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'version',
  alias: ['v'],
  description: 'Exibe a versão atual da CLI',
  run: async (box: GluegunToolbox) => {
    const { print, meta } = box

    print.highlight('🚀 Nextget CLI')
    print.info(`Versão: ${meta.version()}`)
  },
}
