module.exports = [
  { 
    path: 'creator',
    select: ['name', 'email'] 
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