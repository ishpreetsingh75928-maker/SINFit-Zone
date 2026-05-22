// LOGIN SIGNUP TOGGLE

        function showSignup(){

            document.getElementById("signupForm")
            .classList.add("active");

            document.getElementById("loginForm")
            .classList.remove("active");

            document.getElementById("signupToggle")
            .classList.add("active");

            document.getElementById("loginToggle")
            .classList.remove("active");

        }

        function showLogin(){

            document.getElementById("loginForm")
            .classList.add("active");

            document.getElementById("signupForm")
            .classList.remove("active");

            document.getElementById("loginToggle")
            .classList.add("active");

            document.getElementById("signupToggle")
            .classList.remove("active");

        }

        // LOGIN

        function loginUser(){

            alert("Login Successful 💪");

            document.querySelector(".auth-container")
            .style.display = "none";

            document.getElementById("mainWebsite")
            .style.display = "block";

        }

        // SIGNUP

        function signupUser(){

            alert("Account Created Successfully 🔥");

            document.querySelector(".auth-container")
            .style.display = "none";

            document.getElementById("mainWebsite")
            .style.display = "block";

        }

        // HERO BUTTON

        function showMessage(){

            alert("Welcome to SINFitzone Gym 💪");

        }

        // THEME TOGGLE

        function toggleTheme(){

            document.body.classList.toggle("light-mode");

        }

        // TYPING EFFECT

        let text =
        "Build Your Dream Body";

        let index = 0;

        function typeEffect(){

            if(index < text.length){

                document.getElementById("typing")
                .innerHTML += text.charAt(index);

                index++;

                setTimeout(typeEffect,100);

            }

        }
        typeEffect();
        // COUNTER
        let count = 0;
        let counter =
        setInterval(() => {

            count += 10;

            document.getElementById("members")
            .innerHTML = count + "+";

            if(count >= 500){

                clearInterval(counter);

            }

        },30);

        // BMI

        function calculateBMI(){

            let height =
            document.getElementById("height").value;

            let weight =
            document.getElementById("weight").value;

            if(height === "" || weight === ""){

                alert("Please enter height and weight");

                return;

            }

            let bmi =
            (weight / ((height / 100) * (height / 100)));

            bmi = bmi.toFixed(1);

            let result = "";

            if(bmi < 18.5){

                result = "Underweight 😔";

            }

            else if(bmi < 25){

                result = "Fit ✅";

            }

            else if(bmi < 30){

                result = "Overweight ⚠️";

            }

            else{

                result = "Obese ❌";

            }

            document.getElementById("bmi-result")
            .innerHTML =
            "Your BMI is " + bmi + " (" + result + ")";

        }

        // PLAN ALERT

        function planAlert(plan){

            alert(
            "You selected the " +
            plan +
            " plan 💪"
            );

        }

        // TIMER

        let seconds = 0;

        let interval;

        function updateTimer(){

            let mins =
            Math.floor(seconds / 60);

            let secs =
            seconds % 60;

            mins =
            mins < 10 ? "0" + mins : mins;

            secs =
            secs < 10 ? "0" + secs : secs;

            document.getElementById("timer")
            .innerHTML =
            mins + ":" + secs;

        }

        function startTimer(){

            clearInterval(interval);

            interval = setInterval(() => {

                seconds++;

                updateTimer();

            },1000);

        }

        function pauseTimer(){

            clearInterval(interval);

        }

        function resetTimer(){

            clearInterval(interval);

            seconds = 0;

            updateTimer();

        }
