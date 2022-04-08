# Tube Screamer

A Guitar effects pedal board with music streaming capablities using the [Spotify Web API.](https://developer.spotify.com/documentation/web-api/) Uses [Tuna.js](https://github.com/Theodeus/tuna) and [Web Audio API](https://www.w3.org/TR/webaudio/) for the effects pedals. Utilizing an [audio interface](https://en.wikipedia.org/wiki/Audio_interface) user can send analog guitar signal through pedal board and manipulate sound to suit their playing style. Use search bar to stream music on player using user's Spotify premium account.

Guitar effects included in app
* Gain 
* Chorus 
* Compressor 
* Delay 
* Filter 
* Overdrive 
* Panner 
* Phaser 
* Tremolo 
* WahWah

## Installation

Install using [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```bash
run $ npm install
```
Create .env file<br>
Set Spotify Web API Client_ID and Client_Secret in .env file

```
CLIENT_ID = 02ee4d58dclientID20aab88838
CLIENT_SECRET = 6a15d74dclientSecret4a58528
```
To get Client_ID and Client_Secret navigate to [Spotify Web API](https://developer.spotify.com/dashboard/applications), login or create an account, then click on the create an app button, follow prompts.

Tube Screamer uses [tube-screamer-authorization-server](https://github.com/lahb2434/tube-screamer-authorization-server) to communicate to [Spotify Web API.](https://developer.spotify.com/documentation/web-api/) Navigate to server repository and follow installation instructions in readme.  Spotify Web API requires HTTP requests to be sent server side, server is designed to listen for requests from Tube Screamer, pass requests to Spotify, retreive response and send back to Tube Screamer.

App is also to be used in conjunction with hardware interface for converting analog instrument signal into digital signal. 

To stream with Spotify user is required to have Premium account.

## Usage

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)