const guest = ['Ali', 'Awais', 'Hammad Dar', 'Wasif Ali', 'SHAH']

guest.forEach((element, index) => {
  index
    ? console.log(
        'I would like to invite you to dinner. Will you accept my offer? Ms.' +
          element
      )
    : console.log(
        'I would like to invite you to dinner. Will you accept my offer? Mr.' +
          element
      )
})
