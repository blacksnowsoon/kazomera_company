import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data'
import { fakerAR as faker } from '@faker-js/faker'
import { nanoid } from '@reduxjs/toolkit'
import seedrandom from 'seedrandom'
import { setRandom } from 'txtgen'
import { rest } from 'msw'
import { parseISO } from 'date-fns'

// num of users will generate
const NUM_USERS = 10
// num of posts will generate per user
const POSTS_PER_USER = 5
// num of notification will generate per day
const RECENT_NOTIFICATIONS_DAYS = 3
// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000

/* RNG setup */
// Set up a seeded random number generator, so that we get
// a consistent set of users / entries each time the page loads.
// This can be reset by deleting this localStorage value,
// or turned off by setting `useSeededRNG` to false.
let useSeededRNG = true

let rng = seedrandom()

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem('randomTimestampSeed')
  let seedDate

  if (randomSeedString) {
    seedDate = new Date(randomSeedString)
  } else {
    seedDate = new Date()
    randomSeedString = seedDate.toISOString()
    localStorage.setItem('randomTimestampSeed', randomSeedString)
  }

  rng = seedrandom(randomSeedString)
  setRandom(rng)
  faker.seed(seedDate.getTime())
}

// return a random int
export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(rng() * (max - min + 1)) + min
}
// return random 
export const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1)
  return array[index]
}

export const db = factory({
  user: {
    id: primaryKey(nanoid),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    username: String,
    posts: manyOf('post'),
    connections: manyOf('user'),
    favs: manyOf('post'),
    address : {
      country: String,
      city: String,
      state: String,
      street: String,
      zipCode: String,
    },
    receivedInvitations: [],
    sentInvitations: []
  },
  post: {
    id: primaryKey(nanoid),
    title: String,
    date: String,
    content: String,
    imageURL: String,
    category: String,
    reactions: oneOf('reaction'),
    comments: manyOf('comment'),
    author: oneOf('user'),
  },
  comment: {
    id: primaryKey(String),
    date: String,
    text: String,
    post: oneOf('post'),
  },
  reaction: {
    id: primaryKey(nanoid),
    loveit: Number,
    supports: Number,
    likes: Number,
    post: oneOf('post'),
  },
  // 
})

// user Creatore
const createUserData = () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return {
    firstName ,
    lastName ,
    username : `${firstName} ${lastName}`,
    email : faker.internet.email(),
    password : faker.internet.password(),
    avatar : faker.image.avatar(),
    phoneNumber: faker.phone.number('+2 01# ### ### ##'),
    address: {
      country: faker.location.country(),
      city: faker.location.city(),
      street: faker.location.streetAddress()
    },
    connections: [],
    receivedInvitations: [],
    sentInvitations: []
  }
}


  // posts creatore
const createPostData = (user) => {
  return {
    title: faker.lorem.words(),
    date: faker.date.recent({days: RECENT_NOTIFICATIONS_DAYS}).toISOString(),
    author: user,
    content: faker.lorem.paragraphs(),
    imageURL: faker.image.urlLoremFlickr({category: 'nature', width: 640, height: 480}),
    reactions: db.reaction.create(),
    category: randomFromArray(['project', 'invesment', 'news']),
  }
}


/* MSW Data Model Setup */

// Create an initial set of users and posts
for (let i = 0; i < NUM_USERS; i++) {
  
  const author = db.user.create(createUserData())

  for (let j = 0; j < POSTS_PER_USER; j++) {
    const newPost = createPostData(author)
    db.post.create(newPost)
  }
}

const serializePost = (post) => ({
  ...post,
  author: post.author.id,
})

/* MSW REST API Handlers */
export const handlers = [
  // get all posts endpoint
  rest.get('/fakeApi/posts', function (req, res, ctx) {
    const posts = db.post.getAll().map(serializePost)
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(posts))
  }),
  // get news endpoint
  rest.get('/fakeApi/posts/news', function (req, res, ctx) {
    const news = db.post.findMany({ where : { 'category' : {
      equals : 'news'
    } } }).map(serializePost)
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(news))
  }),
  // get investment endpoint
  rest.get('/fakeApi/posts/investments', function (req, res, ctx) {
    const news = db.post.findMany({ where : { 'category' : {
      equals : 'investment'
    } } }).map(serializePost)
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(news))
  }),
  // get projects endpoint
  rest.get('/fakeApi/posts/projects', function (req, res, ctx) {
  const news = db.post.findMany({ where : { 'category' : {
    equals : 'project'
  } } }).map(serializePost)
  return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(news))
}),
  rest.post('/fakeApi/posts', function (req, res, ctx) {
    const data = req.json()

    if (data.content === 'error') {
      return res(
        ctx.delay(ARTIFICIAL_DELAY_MS),
        ctx.status(500),
        ctx.json('Server error saving this post!')
      )
    }

    data.date = new Date().toISOString()

    const user = db.user.findFirst({ where: { id: { equals: data.user } } })
    data.user = user
    data.reactions = db.reaction.create()

    const post = db.post.create(data)
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(serializePost(post)))
  }),
  rest.get('/fakeApi/posts/:postId', function (req, res, ctx) {
    const post = db.post.findFirst({
      where: { id: { equals: req.params.postId } },
    })
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(serializePost(post)))
  }),
  rest.patch('/fakeApi/posts/:postId', (req, res, ctx) => {
    const { id, ...data } = req.body
    const updatedPost = db.post.update({
      where: { id: { equals: req.params.postId } },
      data,
    })
    return res(
      ctx.delay(ARTIFICIAL_DELAY_MS),
      ctx.json(serializePost(updatedPost))
    )
  }),
  rest.get('/fakeApi/posts/:postId/comments', (req, res, ctx) => {
    const post = db.post.findFirst({
      where: { id: { equals: req.params.postId } },
    })
    return res(
      ctx.delay(ARTIFICIAL_DELAY_MS),
      ctx.json({ comments: post.comments })
    )
  }),
  rest.post('/fakeApi/posts/:postId/reactions', (req, res, ctx) => {
    const postId = req.params.postId
    const reaction = req.body.reaction
    const post = db.post.findFirst({
      where: { id: { equals: postId } },
    })

    const updatedPost = db.post.update({
      where: { id: { equals: postId } },
      data: {
        reactions: {
          ...post.reactions,
          [reaction]: (post.reactions[reaction] += 1),
        },
      },
    })

    return res(
      ctx.delay(ARTIFICIAL_DELAY_MS),
      ctx.json(serializePost(updatedPost))
    )
  }),
  rest.get('/fakeApi/notifications', (req, res, ctx) => {
    const numNotifications = getRandomInt(1, 5)

    let notifications = generateRandomNotifications(
      undefined,
      numNotifications,
      db
    )

    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(notifications))
  }),
  rest.get('/fakeApi/users', (req, res, ctx) => {
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(db.user.getAll()))
  }),
  rest.post('/fakeApi/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
]


/* Random Notifications Generation */

const notificationTemplates = [
  'poked you',
  'says hi!',
  `is glad we're friends`,
  'sent you a gift',
  'new message'
]

export function generateRandomNotifications(since, numNotifications, db) {
  const now = new Date()
  let pastDate

  if (since) {
    pastDate = parseISO(since)
  } else {
    pastDate = new Date(now.valueOf())
    pastDate.setMinutes(pastDate.getMinutes() - 15)
  }

  // Create N random notifications. We won't bother saving these
  // in the DB - just generate a new batch and return them.
  const notifications = [...Array(numNotifications)].map(() => {
    const user = randomFromArray(db.user.getAll())
    const template = randomFromArray(notificationTemplates)
    return {
      id: nanoid(),
      date: faker.date.between(pastDate, now).toISOString(),
      message: template,
      user: user.id,
    }
  })

  return notifications
}