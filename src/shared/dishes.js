export const DISHES = [
    {
      id: 0,
      name: 'Uthappizza',
      image: 'assets/images/uthappizza.png',
      category: 'principais',
      label: 'Apimentado',
      price: '4.99',
      description: 'Uma combinação única de Uthappam indiano (panqueca) e pizza italiana.',
      ingredients: [
        'Uthappam',
        'Tomates cereja',
        'Cebola Vidalia',
        'Pimentas Guntur',
        'Paneer de búfalo'
      ],
      recipe: 'Prepare o Uthappam, adicione os ingredientes e asse até dourar.',
      comments: [
        { id: 0, rating: 5, comment: "Imagine todos os alimentos vivendo na confusão!", author: "John Lemon", date: "2012-10-16T17:57:28.556094Z" },
        { id: 1, rating: 4, comment: "Muito saboroso e bem feito.", author: "Anna Bell", date: "2018-06-05T17:57:28.556094Z" },
        { id: 2, rating: 5, comment: "Simplesmente perfeito!", author: "Chris P. Bacon", date: "2021-11-01T12:57:28.556094Z" }
      ]
    },
    {
      id: 1,
      name: 'Zucchipakoda',
      image: 'assets/images/zucchipakoda.png',
      category: 'entrada',
      label: '',
      price: '1.99',
      description: 'Abobrinha frita coberta com uma massa de farinha de grão-de-bico levemente temperada.',
      ingredients: [
        'Abobrinha',
        'Farinha de grão-de-bico',
        'Tempero especial',
        'Óleo para fritura',
        'Molho de tamarindo agridoce'
      ],
      recipe: 'Passe a abobrinha na massa e frite até dourar. Sirva com molho.',
      comments: [
        { id: 0, rating: 4, comment: "Leva qualquer um ao paraíso.", author: "Paul McVites", date: "2014-09-05T17:57:28.556094Z" },
        { id: 1, rating: 3, comment: "Gostei, mas podia ser mais crocante.", author: "Jane Dough", date: "2020-04-19T09:20:28.556094Z" }
      ]
    },
    {
      id: 2,
      name: 'Vadonut',
      image: 'assets/images/vadonut.png',
      category: 'entrada',
      label: 'Novo',
      price: '1.99',
      description: 'Uma experiência clássica de ConFusion. É um vada ou é um donut?',
      ingredients: [
        'Farinha de trigo',
        'Fermento',
        'Açúcar',
        'Óleo para fritura',
        'Especiarias indianas'
      ],
      recipe: 'Misture os ingredientes, molde os vadonuts e frite até dourar.',
      comments: [
        { id: 0, rating: 5, comment: "Coma, apenas coma!", author: "Michael Jaikishan", date: "2015-02-13T17:57:28.556094Z" },
        { id: 1, rating: 2, comment: "A massa estava um pouco pesada.", author: "Patty Cake", date: "2019-08-11T10:35:28.556094Z" },
        { id: 2, rating: 4, comment: "Bem diferente e gostoso!", author: "Dough Nut", date: "2023-03-23T14:18:28.556094Z" },
        { id: 3, rating: 5, comment: "Adorei a combinação de sabores.", author: "Sugar Plum", date: "2021-07-15T08:57:28.556094Z" }
      ]
    },
    {
      id: 3,
      name: 'ElaiCheese Cake',
      image: 'assets/images/elaicheesecake.png',
      category: 'sobremesa',
      label: '',
      price: '2.99',
      description: 'Um delicioso Cheesecake estilo Nova York, temperado com cardamomo indiano.',
      ingredients: [
        'Biscoito Graham',
        'Queijo cremoso',
        'Açúcar',
        'Ovos',
        'Cardamomo moído'
      ],
      recipe: 'Misture os ingredientes, asse e deixe esfriar antes de servir.',
      comments: [
        { id: 0, rating: 5, comment: "Incrível, alcançando as estrelas!", author: "Ringo Starry", date: "2013-12-02T17:57:28.556094Z" },
        { id: 1, rating: 4, comment: "A textura é maravilhosa!", author: "Lara Sweet", date: "2017-09-25T11:43:28.556094Z" },
        { id: 2, rating: 5, comment: "Melhor sobremesa que já comi!", author: "Cheese Queen", date: "2022-01-17T19:30:28.556094Z" }
      ]
    },
    {
      id: 4,
      name: 'Poção da Paciência',
      image: 'assets/images/paciencia.jpeg',
      category: 'mágica',
      label: 'Calma',
      price: '5.99',
      description: 'Elixir mágico que concede paciência e tranquilidade extraordinárias por um dia.',
      ingredients: [
        'Essência de camomila',
        'Raiz de valeriana',
        'Água pura',
        'Mel',
        'Toque mágico'
      ],
      recipe: 'Misture os ingredientes em um caldeirão e aqueça suavemente.',
      comments: [
        { id: 0, rating: 5, comment: "Estou tão calmo agora!", author: "Buscador da Serenidade", date: "2024-10-16T17:57:28.556094Z" },
        { id: 1, rating: 5, comment: "Mudou completamente meu dia.", author: "Paz Interior", date: "2023-06-21T13:42:28.556094Z" },
        { id: 2, rating: 4, comment: "Efeito relaxante imediato!", author: "Zen Master", date: "2021-03-10T15:18:28.556094Z" }
      ]
    },
    {
      id: 5,
      name: 'Poção do Amor',
      image: 'assets/images/amor.jpeg',
      category: 'mágica',
      label: 'Paixão',
      price: '7.49',
      description: 'Mistura mística que ajuda a fomentar sentimentos de afeição e atração.',
      ingredients: [
        'Pétalas de rosa',
        'Mel',
        'Essência de baunilha',
        'Água de rosas',
        'Poeira de estrelas'
      ],
      recipe: 'Combine os ingredientes e mexa em sentido horário sob a luz da lua cheia.',
      comments: [
        { id: 0, rating: 5, comment: "Minha paixão finalmente me notou!", author: "Alma Romântica", date: "2024-09-21T15:20:18.556094Z" },
        { id: 1, rating: 4, comment: "Funciona! Mas o gosto é bem doce.", author: "Coração Valente", date: "2022-02-14T11:20:28.556094Z" },
        { id: 2, rating: 5, comment: "Amor à primeira vista!", author: "Romeo Love", date: "2020-07-07T16:30:28.556094Z" }
      ]
    },
    {
      id: 6,
      name: 'Poção da Morte',
      image: 'assets/images/morte.jpeg',
      category: 'mágica',
      label: 'Fatal',
      price: '9.99',
      description: 'Poção perigosa conhecida por acabar com qualquer inimigo com uma única gota.',
      ingredients: [
        'Veneno de cobra',
        'Erva mortal',
        'Essência de noite eterna',
        'Água escura',
        'Toque final'
      ],
      recipe: 'Misture tudo em um caldeirão sob uma lua nova. Use com extrema cautela.',
      comments: [
        { id: 0, rating: 5, comment: "Não é para os fracos, mas é poderosa.", author: "Mago Sombrio", date: "2024-08-11T09:32:45.556094Z" },
        { id: 1, rating: 3, comment: "Muito forte, mas eficaz.", author: "Dark Wizard", date: "2023-05-01T17:28:28.556094Z" },
        { id: 2, rating: 4, comment: "Um pouco assustadora, mas incrível.", author: "Sorcerer Supreme", date: "2022-10-10T12:45:28.556094Z" },
        { id: 3, rating: 5, comment: "Recomendo com cuidado.", author: "Dark Knight", date: "2021-04-08T10:15:28.556094Z" }
      ]
    }
  ];
  