var private = require('../private.json');
const fs = require('fs');

const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);