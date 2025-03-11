# stream-toys

Personal split-flap display widgets for obs, no business model attached.

## countdown

* Provide query option "s=x" for the countdown duration in seconds. Default is 300 seconds / 5 minutes.
* Provide query option "r=1" (HH:MM:SS) or "r=2" (HH:MM) for redirecting to clock when countdown reaches zero.
* Provide query option "d=1" for the countdown to disappear after expiration (redirect to about:blank).

### Examples

* [10 minutes](https://mschmitt.github.io/stream-toys/countdown.html?s=600)
* [15 minutes](https://mschmitt.github.io/stream-toys/countdown.html?s=900)
* [Default is 5 minutes](https://mschmitt.github.io/stream-toys/countdown.html)
* [10 minutes and redirect](https://mschmitt.github.io/stream-toys/countdown.html?s=600&r=1)
* [10 minutes and disappear](https://mschmitt.github.io/stream-toys/countdown.html?s=600&d=1)
* [Default 5 mins and redirect to HH:MM:SS](https://mschmitt.github.io/stream-toys/countdown.html?r=1)
* [6 mins and redirect to HH:MM](https://mschmitt.github.io/stream-toys/countdown.html?s=360&r=2)

## clock

### Examples

* [HH:MM:SS](https://mschmitt.github.io/stream-toys/clock-seconds.html)
* [HH:MM](https://mschmitt.github.io/stream-toys/clock-minutes.html)

## worldclock

### Examples
* [Default set of locations](https://mschmitt.github.io/stream-toys/clock-world.html)
* [Custom set of locations, passed as query string](https://mschmitt.github.io/stream-toys/clock-world.html?FRA=Europe/Berlin&NYC=America/New_York&MEL=Australia/Melbourne)
