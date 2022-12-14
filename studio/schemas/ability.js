import relatedCharacterType from './fields/relatedCharacterType'
import name from './fields/name'

export default {
  name: 'ability',
  type: 'document',
  title: 'Ability',
  fields: [
    relatedCharacterType,
    name,
    {
      name: 'requiredLevel',
      type: 'number',
      title: 'Required Level',
    },
  ],
}
