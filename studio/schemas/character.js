import name from './fields/name'
import perkProgression from './fields/perkProgression'
import relatedCharacterType from './fields/relatedCharacterType'
import relatedPlayer from './fields/relatedPlayer'

export default {
  name: 'character',
  type: 'document',
  title: 'Character',
  fields: [
    relatedPlayer,
    name,
    relatedCharacterType,
    {
      name: 'xp',
      title: 'Exprecience',
      type: 'number',
    },
    {
      name: 'gold',
      title: 'Gold',
      type: 'number',
    },
    {
      name: 'accuiredItems',
      title: 'Accuired Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'item'}]}],
    },
    {
      name: 'checkmarkPoints',
      title: 'Checkmark Points Unlocked',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    perkProgression,
  ],

  preview: {
    select: {
      title: 'name',
      media: 'relatedCharacterType.icon',
    },
  },
}
