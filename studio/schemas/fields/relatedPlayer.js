const relatedPlayer = {
  name: 'relatedPlayer',
  title: 'Related Player',
  type: 'reference',
  to: [{type: 'player'}],
  validation: (Rule) => Rule.required(),
}

export default relatedPlayer
