import name from './fields/name'
import relatedCharacterType from './fields/relatedCharacterType'

export default {
  name: 'character',
  type: 'document',
  title: 'Character',
  fields: [name, relatedCharacterType],
}
