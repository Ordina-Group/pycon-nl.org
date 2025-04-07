<script lang="ts">
	// count-down timer
	let dest = new Date('oct 16, 2025 00:00:00').getTime();
	let x = setInterval(function () {
		let now = new Date().getTime();
		let diff = dest - now;

		// Check if the countdown has reached zero or negative
		if (diff <= 0) {
			clearInterval(x);
			displayThanksMessage();
			return;
		}

		let days = Math.floor(diff / (1000 * 60 * 60 * 24));
		let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((diff % (1000 * 60)) / 1000);

		// Get elements by class name
		if (typeof document !== 'undefined') {
			let countdownElements = document.getElementsByClassName('countdown-element');

			// Loop through the elements and update their content
			for (let i = 0; i < countdownElements.length; i++) {
				let className = countdownElements[i].classList[1]; // Get the second class name
				switch (className) {
					case 'days':
						countdownElements[i].innerHTML = days.toString();
						break;
					case 'hours':
						countdownElements[i].innerHTML = hours.toString();
						break;
					case 'minutes':
						countdownElements[i].innerHTML = minutes.toString();
						break;
					case 'seconds':
						countdownElements[i].innerHTML = seconds.toString();
						break;
					default:
						break;
				}
			}
		}
	}, 1000);

	function displayThanksMessage() {
		if (typeof document !== 'undefined') {
			let countdownContainer = document.querySelector('.count-down-main');
			if (countdownContainer) {
				countdownContainer.innerHTML = '<h3 class="font-manrope font-semibold text-2xl text-gray-900">Thanks for coming</h3>';
			}
		}
	}
</script>

<div class="flex items-start w-full gap-2 count-down-main">
	<div class="timer w-10">
		<div class="bg-north rounded-lg overflow-hidden">
			<h3 class="countdown-element days font-Cormorant font-semibold text-white text-center"></h3>
		</div>
		<p class="text-sm font-Cormorant font-medium text-gray-900 mt-1 text-center w-full">days</p>
	</div>
	<h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
	<div class="timer w-10">
		<div class="bg-north rounded-lg overflow-hidden">
			<h3 class="countdown-element hours font-Cormorant font-semibold text-white text-center"></h3>
		</div>
		<p class="text-sm font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">hours</p>
	</div>
	<h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
	<div class="timer w-10">
		<div class="bg-north rounded-lg overflow-hidden">
			<h3 class="countdown-element minutes font-Cormorant font-semibold text-white text-center"></h3>
		</div>
		<p class="text-sm font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">minutes</p>
	</div>
	<h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
	<div class="timer w-10">
		<div class="bg-north rounded-lg overflow-hidden">
			<h3 class="countdown-element seconds font-Cormorant font-semibold text-white text-center animate-countinsecond"></h3>
		</div>
		<p class="text-sm font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">seconds</p>
	</div>
</div>
