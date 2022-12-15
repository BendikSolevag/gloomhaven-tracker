const perkProgression = {
  name: 'perkProgressionList',
  title: 'Perk Progression List',
  type: 'array',
  of: [
    {
      name: 'perkProgression',
      title: 'Perk Progression',
      type: 'object',
      fields: [
        {name: 'perkLevel', title: 'Perk Level', type: 'number'},
        {name: 'perkType', title: 'Perk Type', type: 'reference', to: [{type: 'perk'}]},
      ],
    },
  ],
}

export default perkProgression
