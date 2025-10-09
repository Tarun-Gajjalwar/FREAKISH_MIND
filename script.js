        function startCountdown() {
            const countdownEl = document.getElementById('countdown');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            let totalSeconds = (2 * 60 * 60) + (56 * 60) + 21;

            const timerInterval = setInterval(() => {
                if (totalSeconds <= 0) {
                    clearInterval(timerInterval);
                    countdownEl.innerHTML = "AUCTION ENDED";
                    return;
                }

                totalSeconds--;

                let hours = Math.floor(totalSeconds / 3600);
                let minutes = Math.floor((totalSeconds % 3600) / 60);
                let seconds = totalSeconds % 60;

                hoursEl.textContent = String(hours).padStart(2, '0');
                minutesEl.textContent = String(minutes).padStart(2, '0');
                secondsEl.textContent = String(seconds).padStart(2, '0');

            }, 1000);
        }
        
        window.onload = startCountdown;