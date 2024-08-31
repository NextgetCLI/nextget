import { GluegunPrint } from 'gluegun'

export function commandTitle(title: string, print: GluegunPrint): string {
  return `${print.highlight(`🚀 Nextget CLI • ${title}`)}`
}
