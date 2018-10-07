# leads-mobile
* Stay connected / up-to-date with your community
   * Post leads to whatever is going on around you; posts will be mapped by address using geolocation / reverse-geocoding
   * Users will be able to see alerts in their area from the view of a map, or individual posts by a view of cards
   * Directions to each lead just by tapping on the address of the post
   * Communicate through comments
 
 ### Technology
 * leads is a full-stack mobile-app built using:
    * **react-native**; react
    * **redux** and redux-thunk (middleware for asynchronous action-creators) to manage the application's state
    * auth / bcrypt (Async Storage for the setting and checking of jwts)
    * REST API built with Node, Knex, and Express
    * Google's geocoding API to parse lats & longs from addresses; the phone's Geolocation API and navigator methods
  
## Log-in screens
![gif](https://media.giphy.com/media/1lyNai83MIg0NYZFhQ/giphy.gif)

## Home page
![gif](https://media.giphy.com/media/cJDcDrpLkOZYbZCT0I/giphy.gif)

## Map view of posts (community map; geolocation)
![gif](https://im4.ezgif.com/tmp/ezgif-4-e23ee2a7e6.gif)

## Descriptions of leads around you
![gif](https://im4.ezgif.com/tmp/ezgif-4-99215d2bec.gif)

## Directions w device's Google Map app
![gif](https://im4.ezgif.com/tmp/ezgif-4-03c3a7b8d7.gif)
