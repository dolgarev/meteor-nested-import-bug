import { Meteor } from 'meteor/meteor'

if (Meteor.isServer) {
  import prettyHrtime from "pretty-hrtime"
}

if (Meteor.isServer) {
  console.log('prettyHrtime', prettyHrtime)
}
