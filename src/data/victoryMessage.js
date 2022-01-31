const MESSAGES = [
  'Noice!',
  'Sick!',
  'Sweet!',
  'Let\'s Go!',
  'Great Job!',
  'Woohoo!',
  'Righteous!',
  'Kowabunga!',
  'Yeehaw!',
]

export function getVictoryMessage (tries) {
  if (tries > 5) {
    return 'Whew!'
  }
  if (tries > 1) {
    return MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
  } 
   return 'Luckyyy!'
}
