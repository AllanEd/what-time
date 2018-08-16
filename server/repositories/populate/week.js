module.exports = [
  {
    path: 'subscribers',
    select: 'name'
  }, { 
    path: 'days.mo',
    select: ['date', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }, { 
    path: 'days.tu',
    select: ['date', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }, { 
    path: 'days.we',
    select: ['date', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }, { 
    path: 'days.th',
    select: ['date', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }, { 
    path: 'days.fr',
    select: ['date', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }, { 
    path: 'days.sa',
    select: ['date', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }, { 
    path: 'days.su',
    select: ['date', 'subscribers'],
    populate:
    {
      path: 'subscribers',
      select: 'name'
    }
  }
]