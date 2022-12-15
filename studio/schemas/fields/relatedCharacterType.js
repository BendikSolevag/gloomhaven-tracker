const relatedCharacterType = {
  name: 'relatedCharacterType',
  title: 'Character Type',
  type: 'reference',
  to: [{type: 'characterType'}],
  validation: (Rule) => Rule.required(),
}

export default relatedCharacterType
