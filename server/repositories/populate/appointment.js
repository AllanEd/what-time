module.exports = [
  { 
    path: 'owner',
    select: 'name'
  }, {
    path: 'subscribers',
    select: 'name'
  }, { 
    path: 'weeks',
    select: ['startDate', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }
]