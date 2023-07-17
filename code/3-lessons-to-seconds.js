// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')

  let lessonAmount = prompt (' How many lessons do you have left today? ')

  let secondsLeft = 3600 * lessonAmount

  alert ( ' You have ' + secondsLeft + ' seconds left of lessons 🥲' )

}
