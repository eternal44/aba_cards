const INIT_STATE = {
  animals: [
    {name: 'dog',
     uri: 'http://static.businessinsider.com/image/5484d9d1eab8ea3017b17e29/image.jpg',
    },
    {name: 'cat',
    uri: 'http://www.pets4homes.co.uk/images/articles/2355/large/burmese-cat-health-and-genetics-547d89dd3bffd.jpg',
    },
    {name: 'bird',
     uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Silverbird_in_Murchison_Falls_National_Park%2C_Uganda.JPG',
    }
  ],
  vehichles: [
    {name: 'car',
     uri: 'https://images.honestjohn.co.uk/imagecache/file/crop/1200x800/media/6285237/SEAT~Toledo~(2).jpg',
    },
    {name: 'boat',
      uri: 'https://gasequipment.com.au/wp-content/uploads/2016/03/Boat-for-Blogpost.jpg'
    },
    {name: 'airplane',
     uri: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/05/airplane-wallpaper-3.jpg'
    }
  ],
  foods: [
    {name: 'apple',
     uri: 'http://www.themonitordaily.com/wp-content/uploads/2015/03/aplle.jpg'
    },
    {name: 'banana',
      uri: 'https://s-i.huffpost.com/gen/1640863/images/o-142765670-facebook.jpg'
    },
    {name: 'bread',
      uri: 'http://upload.wikimedia.org/wikipedia/commons/7/71/Anadama_bread_(1).jpg'
    },
    {name: 'pizza',
      uri: 'http://i.huffpost.com/gen/2072900/images/o-PIZZA-HUT-facebook.jpg'
    }
  ]
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
