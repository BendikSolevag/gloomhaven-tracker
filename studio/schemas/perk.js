import relatedCharacterType from './fields/relatedCharacterType'
import name from './fields/name'

export default {
  name: 'perk',
  type: 'document',
  title: 'Perk',
  fields: [
    name,
    {name: 'maxChecks', title: 'Maximum Checks Amount', type: 'number'},
    relatedCharacterType,
  ],
  preview: {
    select: {
      media: 'relatedCharacterType.icon',
    },
  },
}
