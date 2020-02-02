exports.seed = function(knex) {
  return seedCategories()
    .then(seedNominees);

  function seedCategories() {
    return knex('categories').del()
      .then(() => {
        return knex('categories').insert([
          { id: 1, name: 'Best Actor', points: 2 },
          { id: 2, name: 'Best Actress', points: 2 },
          { id: 3, name: 'Best Supporting Actor', points: 1 },
          { id: 4, name: 'Best Supporting Actress', points: 1 },
          { id: 5, name: 'Best Cinematography', points: 1 },
          { id: 6, name: 'Best Costume Design', points: 1 },
          { id: 7, name: 'Best Original Score', points: 1 },
          { id: 8, name: 'Best Adapted Screenplay', points: 1 },
          { id: 9, name: 'Best Original Screenplay', points: 1 },
          { id: 10, name: 'Best Director', points: 2 },
          { id: 11, name: 'Best Picture', points: 3 }
        ]);
      });
  }

  function seedNominees() {
    return knex('nominees').del()
      .then(() => {
        return knex('nominees').insert([

          { id: 1, name: 'Antonio Banderas', film: 'PAIN AND GLORY', category: 1 },
          { id: 2, name: 'Leonardo DiCaprio', film: 'ONCE UPON A TIME...IN HOLLYWOOD', category: 1 },
          { id: 3, name: 'Adam Driver', film: 'MARRIAGE STORY', category: 1 },
          { id: 4, name: 'Joaquin Phoenix', film: 'JOKER', category: 1 },
          { id: 5, name: 'Jonathan Pryce', film: 'THE TWO POPES', category: 1 },

          { id: 6, name: 'Cynthia Erivo', film: 'HARRIET', category: 2 },
          { id: 7, name: 'Scarlett Johansson', film: 'MARRIAGE STORY', category: 2 },
          { id: 8, name: 'Saoirse Ronan', film: 'LITTLE WOMEN', category: 2 },
          { id: 9, name: 'Charlize Theron', film: 'BOMBSHELL', category: 2 },
          { id: 10, name: 'Renée Zellweger', film: 'JUDY', category: 2 },

          { id: 11, name: 'Tom Hanks', film: 'A BEAUTIFUL DAY IN THE NEIGHBORHOOD', category: 3 },
          { id: 12, name: 'Anthony Hopkins', film: 'THE TWO POPES', category: 3 },
          { id: 13, name: 'Al Pacino', film: 'THE IRISHMAN', category: 3 },
          { id: 14, name: 'Joe Pesci', film: 'THE IRISHMAN', category: 3 },
          { id: 15, name: 'Brad Pitt', film: 'ONCE UPON A TIME...IN HOLLYWOOD', category: 3 },

          { id: 16, name: 'Kathy Bates', film: 'RICHARD JEWELL', category: 4 },
          { id: 17, name: 'Laura Dern', film: 'MARRIAGE STORY', category: 4 },
          { id: 18, name: 'Scarlett Johansson', film: 'JOJO RABBIT', category: 4 },
          { id: 19, name: 'Florence Pugh', film: 'LITTLE WOMEN', category: 4 },
          { id: 20, name: 'Margot Robbie', film: 'BOMBSHELL', category: 4 },

          { id: 21, name: 'Rodrigo Prieto', film: 'THE IRISHMAN', category: 5 },
          { id: 22, name: 'Lawrence Sher', film: 'JOKER', category: 5 },
          { id: 23, name: 'Jarin Blaschke', film: 'THE LIGHTHOUSE', category: 5 },
          { id: 24, name: 'Roger Deakins', film: '1917', category: 5 },
          { id: 25, name: 'Robert Richardson', film: 'ONCE UPON A TIME...IN HOLLYWOOD', category: 5 },

          { id: 26, name: 'Sandy Powell and Christopher Peterson', film: 'THE IRISHMAN', category: 6 },
          { id: 27, name: 'Mayes C. Rubeo', film: 'JOJO RABBIT', category: 6 },
          { id: 28, name: 'Mark Bridges', film: 'JOKER', category: 6 },
          { id: 29, name: 'Jacqueline Durran', film: 'LITTLE WOMEN', category: 6 },
          { id: 30, name: 'Arianne Phillips', film: 'ONCE UPON A TIME...IN HOLLYWOOD', category: 6 },

          { id: 31, name: 'Hildur Guðnadóttir', film: 'JOKER', category: 7 },
          { id: 32, name: 'Alexandre Desplat', film: 'LITTLE WOMEN', category: 7 },
          { id: 33, name: 'Randy Newman', film: 'MARRIAGE STORY', category: 7 },
          { id: 34, name: 'Thomas Newman', film: '1917', category: 7 },
          { id: 35, name: 'John Williams', film: 'STAR WARS: THE RISE OF SKYWALKER', category: 7 },

          { id: 36, name: 'Steven Zaillian', film: 'THE IRISHMAN', category: 8 },
          { id: 37, name: 'Taika Waititi', film: 'JOJO RABBIT', category: 8 },
          { id: 38, name: 'Todd Phillips and Scott Silver', film: 'JOKER', category: 8 },
          { id: 39, name: 'Greta Gerwig', film: 'LITTLE WOMEN', category: 8 },
          { id: 40, name: 'Anthony McCarten', film: 'THE TWO POPES', category: 8 },

          { id: 41, name: 'Rian Johnson', film: 'KNIVES OUT', category: 9 },
          { id: 42, name: 'Noah Baumbach', film: 'MARRIAGE STORY', category: 9 },
          { id: 43, name: 'Sam Mendes and Krysty Wilson-Cairns', film: '1917', category: 9 },
          { id: 44, name: 'Quentin Tarantino', film: 'ONCE UPON A TIME...IN HOLLYWOOD', category: 9 },
          { id: 45, name: 'Bong Joon Ho and Han Jin Won', film: 'PARASITE', category: 9 },

          { id: 46, name: 'Martin Scorsese', film: 'THE IRISHMAN', category: 10 },
          { id: 47, name: 'Todd Phillips', film: 'JOKER', category: 10 },
          { id: 48, name: 'Sam Mendes', film: '1917', category: 10 },
          { id: 49, name: 'Quentin Tarantino', film: 'ONCE UPON A TIME...IN HOLLYWOOD', category: 10 },
          { id: 50, name: 'Bong Joon Ho', film: 'PARASITE', category: 10 },

          { id: 51, name: 'Peter Chernin, Jenno Topping and James Mangold', film: 'FORD V FERRARI', category: 11 },
          { id: 52, name: 'Martin Scorsese, Robert De Niro, Jane Rosenthal and Emma Tillinger Koskoff', film: 'THE IRISHMAN', category: 11 },
          { id: 53, name: 'Carthew Neal, Taika Waititi and Chelsea Winstanley', film: 'JOJO RABBIT', category: 11 },
          { id: 54, name: 'Todd Phillips, Bradley Cooper and Emma Tillinger Koskoff', film: 'JOKER', category: 11 },
          { id: 55, name: 'Amy Pascal', film: 'LITTLE WOMEN', category: 11 },
          { id: 56, name: 'Noah Baumbach and David Heyman', film: 'MARRIAGE STORY', category: 11 },
          { id: 57, name: 'Sam Mendes, Pippa Harris, Jayne-Ann Tenggren and Callum McDougall', film: '1917', category: 11 },
          { id: 58, name: 'David Heyman, Shannon McIntosh and Quentin Tarantino', film: 'ONCE UPON A TIME...IN HOLLYWOOD', category: 11 },
          { id: 59, name: 'Kwak Sin Ae and Bong Joon Ho', film: 'PARASITE', category: 11 }

        ]);
      });
  }

};
