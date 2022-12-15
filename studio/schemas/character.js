import name from './fields/name'
import perkProgression from './fields/perkProgression'
import relatedCharacterType from './fields/relatedCharacterType'

export default {
  name: 'character',
  type: 'document',
  title: 'Character',
  fields: [
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
      name: 'checkmarkPoints',
      title: 'Checkmark Points Unlocked',
      type: 'number',
    },
    perkProgression,
  ],
}
