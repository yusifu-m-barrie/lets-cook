export const categories = [
  {
    id: 3,
    name: 'African Food',
    photo_url:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZ8jpbDFnKgLxo63RanyWyEq0QL1gMCaa9A&usqp=CAU'
  },
  {
    id: 1,
    name: 'European Food',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Chinese Food',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0vVhbwYr1QMdJ3kd0asMovdM_EA8G5rQYg&usqp=CAU'
  },
  {
    id: 4,
    name: 'Chicken',
    photo_url:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wJaHc06HVfFrkUc-xb3dl3h8oPYiZEM-hA&usqp=CAU'
  },
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOJhVPIO0_EZBA8OKx13O5L3PQ0fIDLk1Gw&usqp=CAU'
  },

  {
    id: 5,
    name: 'Yogurt',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaisB7sShbK4gYmf7ChiXZ9gzXmIiTuLOEkA&usqp=CAU'
  },

  {
    id: 6,
    name: 'Cake',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQmsY5hdkDB8v9zj0ZC9PlBlARM6q9FzR-g&usqp=CAU'
  },
];



export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Crain Crain',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXongtLaU03CmGYHfAyA3NIwnf_DgDgzyPIw&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXongtLaU03CmGYHfAyA3NIwnf_DgDgzyPIw&usqp=CAU',
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6rPsuNHsbu6dDSgLkQwxlHfOUs6LmXwkGg&usqp=CAU",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },

  {
    recipeId: 3,
    categoryId: 4,
    title: 'Chicken & Chipps',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqINAxsREYxXcFyC3B5opRtoXIvPOzQZO3g&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqINAxsREYxXcFyC3B5opRtoXIvPOzQZO3g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iAPwrq6UYm7C5ANnHJkWFw9QhkdUL1CbuA&usqp=CAU',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
  },

  {
    recipeId: 3,
    categoryId: 5,
    title: 'Triple Berry Yogurt',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
  },

  {
    recipeId: 3,
    categoryId: 6,
    title: 'Pound cake',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJI6UgPCAf17i_nNa2X0LYpXXZqqSWLiQsg&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJI6UgPCAf17i_nNa2X0LYpXXZqqSWLiQsg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1n6jBA3SbZKm2_4C_OmGcY5-V5WTkLm2sbJxNjsMEBYewZmD__PIlGTr2BSKJxX7Lfo&usqp=CAU',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
  },

  {
    recipeId: 3,
    categoryId: 6,
    title: 'Cup cake',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMid7s2wqV-wQwwI6VrfXy4ir5un4oPYitg&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMid7s2wqV-wQwwI6VrfXy4ir5un4oPYitg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboas7sEDNNySlJLpjTuJVxzCOejOIla816VTL7zfqTw1ohTecmZv0OuhPSxMD6jsOxZ8&usqp=CAU',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
  },

  {
    recipeId: 2,
    categoryId: 3,
    title: 'Cassava Leaf',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMn9mf5Q41zaYpYEb4nIidMi1qA6Z6r0HZA&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMn9mf5Q41zaYpYEb4nIidMi1qA6Z6r0HZA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9oNtGJfcmwYrUfRmGEO5wvf-9y6pykt9EQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9tjpfgGZh5HE3a6I26ohTC5KisXwHOuRxg&usqp=CAU',
      'data:image/jpeg;base64,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'
    ],
    time: '30',
    ingredients: [
      [0, '3 pounds frozen Cassava leaf'],
      [16, '1 pound beef'],
      [12, '½ pound smoked chicken,turkey, fish'],
      [18, '1 medium onion chopped'],
      [19, '½ - 1 cup palm oil'],
      [1, '4-5 tablespoon ground groundnuts'],
      [4, 'Salt and pepper to taste'],
      [7, '1 scotch pepper '],
      [20, '1 tablespoon chicken bouillon or Maggie powder1/2 teaspoons'],
      [21, '4']
    ],
    description:
      '-- In a large saucepan, season meat with salt, Maggi and onions and boil until tender, depending on the choice of meat. You should have at least 1-2 cups of stock. Remove the meat and beef stock, reserve, Heat oil in a large sauce pan over medium heat , add onions and crayfish l, sauté until fragrant about 1-2 minutes. Add beef and or / smoked meat. Stir in peanut butter or groundnut paste, then add stock about a cup cook for another 5 minutes. Throw in the drained cassava leaves and continue cooking for about 25 more minutes. Finally if using shrimp add shrimp - cook until shrimp turns pink about 3-5 minutes. Adjust seasonings (Maggie, salt, soup consistency with water and oil) to taste Serve warm over rice'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Potato leaf',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hVzBbt9-5Wo5HddrWwmI9zf36gMaW2WUw59Vy82cEK1ckGyPWfuJLND9-Jx7zzThL9o&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hVzBbt9-5Wo5HddrWwmI9zf36gMaW2WUw59Vy82cEK1ckGyPWfuJLND9-Jx7zzThL9o&usqp=CAU',
      'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
      'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
      'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
    ],
    time: '45',
    ingredients: [
      [0, '2 tablespoons'],
      [22, '1/2'],
      [23, '2 tablespoons'],
      [7, '2 cloves'],
      [3, '1 teaspoon'],
      [24, '1 tablespoon'],
      [25, '1 lb'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons'],
      [26, '15 oz'],
      [27, '8'],
      [28, '2'],
      [29, '1 cup']
    ],
    description:
      '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Groundnut Soup',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5foTcA5Q4Tl-miz6Cw2qtLh7hB_ESTJKXQ&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5foTcA5Q4Tl-miz6Cw2qtLh7hB_ESTJKXQ&usqp=CAU',
      'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
      'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
      'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
    ],
    time: '30',
    ingredients: [
      [1, '2 tablespoons'],
      [3, '1 tablespoon'],
      [4, '1 teaspoon'],
      [5, '1/2 teaspoons'],
      [6, '1/2 teaspoons'],
      [7, '1/2 teaspoons'],
      [8, '1/2 teaspoons'],
      [9, '1/2 teaspoons'],
      [10, '1/2 teaspoons'],
      [11, '1/2 teaspoons'],
      [12, '1/2 cups'],
      [13, '1 tablespoon'],
      [14, '1 tablespoon'],
      [15, '2 breasts, 2 thighs, 2 drumsticks, 2 wings'],
      [16, '1'],
      [17, '2 quarts']
    ],
    description:
      '-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Fish & Chips',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PhQZ73iDLg5dDRy-JRdJ-abK0mqzqS7fCA&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PhQZ73iDLg5dDRy-JRdJ-abK0mqzqS7fCA&usqp=CAU',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '35',
    ingredients: [
      [30, 'jucie of 1 '],
      [24, '2 teaspoons'],
      [0, '3 tablespoons'],
      [3, '1 teaspoon'],
      [31, '1/2 teaspoons'],
      [32, '1/2 teaspoons'],
      [4, '2 teaspoons'],
      [33, '1/2 lb'],
      [27, '8'],
      [14, '2 teasponns'],
      [34, '1']
    ],
    description:
      '-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Herring',
    photo_url:
      'https://europebackpacker.com/wp-content/uploads/2021/04/herring-967778_1280.webp',
    photosArray: [
      'https://europebackpacker.com/wp-content/uploads/2021/04/herring-967778_1280.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuX4xp_MQ8L9Vlcf8VDlFOoIjt6t8u0YUXvw&usqp=CAU',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 teaspoons'],
      [0, '4 tablespoons'],
      [1, '1/2 teaspoons'],
      [30, '2 tablespoons'],
      [31, '1 teaspoon'],
      [7, '1 teaspoon'],
      [24, '1/2 teaspoons'],
      [3, '1/2 teaspoons'],
      [21, '1 pound'],
      [22, '1/2 cup'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description:
      '-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Buffalo Pizza',
    photo_url:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
      'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
    ],
    time: 50,
    ingredients: [
      [39, '1 lb'],
      [40, '1 cup'],
      [41, '1/2 cup'],
      [42, '1/4 cup'],
      [43, '2 tablespoons'],
      [44, '1/2 cup'],
      [7, '1/4 teaspoons'],
      [5, '1/4 teaspoons'],
      [30, '1/4 teaspoons'],
      [45, '2 oz'],
      [12, 'for dusting'],
      [4, '1/2 teaspoons'],
      [47, '2'],
      [46, '9 oz']
    ],
    description:
      '-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ¼ cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ¼ cup blue cheese, ½ tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that’s slightly larger than the cast-iron skillet you’re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you’re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ⅓ cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ¼ cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15–20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Vegetable Pizza',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpFqf2l4VsbziyKTj-5Y2lJM1DlJfNXIZow&usqp=CAU',
    photosArray: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpFqf2l4VsbziyKTj-5Y2lJM1DlJfNXIZow&usqp=CAU",
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSyN0XqGoNZq2i9hS0evErrdMwP8skbfUqw&usqp=CAU',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },
  {
  recipeId: 0,
    categoryId: 0,
    title: 'Magarita Pizza',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4Yg3FS3PWVo7XbbLCoQOd-g_V3CcgDoFjA&usqp=CAU',
    photosArray: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4Yg3FS3PWVo7XbbLCoQOd-g_V3CcgDoFjA&usqp=CAU",
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjUrACUs0trNYqS_57ldFNs6mNQFVrWVzLA&usqp=CAU',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },

  {
    recipeId: 7,
    categoryId: 2,
    title: 'Spaghetti Carbonara',
    photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
    photosArray: [
      'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
      'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      [48, '50g'],
      [49, '100g'],
      [50, '350g'],
      [51, '2 plump'],
      [42, '50g'],
      [16, '3'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons']
    ],
    description:
      '-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Lazania',
    photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
    photosArray: [
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [36, '1 large'],
      [25, '1 pound'],
      [51, '5 cloves'],
      [52, '1 pound'],
      [53, '1 pound'],
      [54, '1 28 ounce can'],
      [23, '2 6 ounce can'],
      [55, '2 tablespoons'],
      [56, '1/4 cup'],
      [10, '1/2 cup'],
      [1, '1/2 teaspoons'],
      [58, '1 teaspoon'],
      [4, '1/4 teaspoons'],
      [16, '1 large'],
      [46, '1 pound'],
      [48, '1 cup'],
      [57, '30 ounces']
    ],
    description:
      '-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Cassava Leaf',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNFZiAjxsKX4g2Qd6v8Lg2isG3vOEEEeWbw&usqp=CAU'
  },
  {
    ingredientId: 1,
    name: 'Salt',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Russet potatoes',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Black Pepper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Dried sage',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Garlic powder',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ground allspice',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Dried oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Dried basil',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
