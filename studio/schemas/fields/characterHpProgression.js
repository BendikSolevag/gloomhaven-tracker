const characterHpProgression = {
  name: 'characterHpProgression',
  title: 'Character HP Progression',
  type: 'array',
  of: [{type: 'number'}],
  validation: (Rule) => Rule.min(9) && Rule.max(9),
}

export default characterHpProgression
