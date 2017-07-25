(function() {
  function SongPlayer() {
      var SongPlayer = {};

      var currentBuzzObject = null;

      /**
      * @function setSong
      * @desc Stops currently playing song and loads new audio file as currentBuzzObject
      * @param {Object} song
      */
      var setSong = function(song) {
        if (currentBuzzObject) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        }

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        currentBuzzObject = new buzz.sound(song.audioUrl, {
          formats: ['mp3'],
          preload: true
      });

      SongPlayer.currentSong = song;
      };

      /**
      * @function playSong
      * @desc Plays the selected song and stores the playing variable as true
      * @param {Object} song
      */
      var playSong = function(song){
        currentBuzzObject.play();
        song.playing = true;
      }

      SongPlayer.currentSong = null;

        SongPlayer.play = function(song) {
          song = song || SongPlayer.currentSong;
          if (SongPlayer.currentSong !== song) {
            setSong(song);
            playSong(song);
          } else if (SongPlayer.currentSong === song) {
            if (currentBuzzObject.isPaused()) {
              currentBuzzObject.play();
            }
          }
        };

      SongPlayer.pause = function(song) {
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        song.playing = false;
      };

      return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
