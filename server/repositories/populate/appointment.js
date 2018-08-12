module.exports = [
  { 
    path: 'creator',
    select: 'name'
  }, {
    path: 'subscribers',
    select: 'name'
  }, { 
    path: 'weeks',
    select: ['startDate', 'subscribers'],
    populate:
    {
      path: 'subscribers'
    }
  }
]