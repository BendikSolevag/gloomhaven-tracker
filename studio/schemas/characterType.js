import name from './fields/name'
import maxAbilitiesAmount from './fields/maxCharacterLevel'
import characterHpProgression from './fields/characterHpProgression'
import icon from './fields/icon'

export default {
  name: 'characterType',
  type: 'document',
  title: 'Character Type',
  fields: [name, icon, maxAbilitiesAmount, characterHpProgression],
}
