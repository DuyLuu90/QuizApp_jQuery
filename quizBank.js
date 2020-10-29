const quizBank=[
  { id: cuid(),
    question: 'What was Tandem previous name?',
    image: '',
    option: ['Tandem','Burger Shack','Extraordinary Humans','Devmynd',],
    answer: 'Devmynd'
  },
  { id: cuid(),
    question: `In Shakespeare's play Julius Caesar, Caesar's last words were...`,
    image: '',
    option: [
      "Iacta alea est!", "Vidi, vini, vici","Et tu, Brute?", "Aegri somnia vana", 
    ],
    answer: 'Et tu, Brute?'
  },
  { id: cuid(),
    question: 'A group of tigers are referred to as:',
    image: '',
    option: [
      "Ambush","Chowder", "Pride", "Destruction",
    ],
    answer: 'Ambush'
  },
  { id: cuid(),
    question: 'What is the top speed an average cat can travel?',
    image: '',
    option: [
      "9 mph","13 mph","31 mph","42 mph",
    ],
    answer: '31 mph'
  },
  { id: cuid(),
    question: 'A cat can jump to _____ times its own height:',
    image: '',
    option: [
      "3","5","7","9"
    ],
    answer: '5'
  },
  { id: cuid(),
    question: `What is the only letter that doesn't appear in a US state name?`,
    image: '',
    option: [
      "M","Q","X","Z", 
    ],
    answer: 'Q'
  },
  { id: cuid(),
    question: 'What is the name for a cow-bison hybrid?',
    image: '',
    option: [
      "Cowson", "Bicow", "Beefalo", "Mooson",
    ],
    answer: 'Beefalo'
  },
  { id: cuid(),
    question: 'What is the largest freshwater lake in the world?',
    image: '',
    option: [
      "Lake Baikal", "Lake Michigan", "Lake Victoria","Lake Superior",
    ],
    answer: 'Lake Superior'
  },
  { id: cuid(),
    question: 'Approximately how many grapes go into a bottle of wine?',
    image: '',
    option: [
       "200","500","700","1000",
    ],
    answer: '700'
  },
  { id: cuid(),
    question: 'How much does a US One Dollar Bill cost to make?',
    image: '',
    option: [
      "$0.05","$0.25", "$1", "$5",
    ],
    answer: '$0.05'
  },

]
 
const user= {
    currentQuestion: 0, 
    answer: '',
    currentView: '',
    score: 0
  }
