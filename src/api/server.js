
import {rest, setupWorker} from 'msw'
import { nanoid } from '@reduxjs/toolkit'
import { fakerAR as faker } from '@faker-js/faker'

import { Server as MockSocketServer } from 'mock-socket'


import { handlers, db, getRandomInt, generateRandomNotifications } from './handlers'


export const worker = setupWorker(...handlers)
// worker.printHandlers() // Optional: nice for debugging to see all available route handlers that will be intercepted
// worker.printHandlers() 

/* Mock Websocket Setup */

const socketServer = new MockSocketServer('ws://localhost')

let currentSocket

const sendMessage = (socket, obj) => {
  socket.send(JSON.stringify(obj))
}

// Allow our UI to fake the server pushing out some notifications over the websocket,
// as if other users were interacting with the system.
const sendRandomNotifications = (socket, since) => {
  const numNotifications = getRandomInt(1, 5)

  const notifications = generateRandomNotifications(since, numNotifications, db)

  sendMessage(socket, { type: 'notifications', payload: notifications })
}

export const forceGenerateNotifications = (since) => {
  sendRandomNotifications(currentSocket, since)
}

socketServer.on('connection', (socket) => {
  currentSocket = socket

  socket.on('message', (data) => {
    const message = JSON.parse(data)

    switch (message.type) {
      case 'notifications': {
        const since = message.payload
        sendRandomNotifications(socket, since)
        break
      }
      default:
        break
    }
  })
})


