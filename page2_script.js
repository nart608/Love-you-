document.addEventListener('DOMContentLoaded', () => {
    const passwordDisplay = document.getElementById('passwordDisplay');
    const keys = document.querySelectorAll('.key');
    const errorMessage = document.getElementById('errorMessage');
    const correctPassword = "1234"; // <-- เปลี่ยนรหัสผ่านตรงนี้
    let enteredPassword = "";
    const maxPasswordLength = 4;

    function updatePasswordDisplay() {
        if (enteredPassword.length === 0) {
            passwordDisplay.textContent = "----";
        } else {
            passwordDisplay.textContent = enteredPassword;
        }
    }

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.textContent;

            if (key.classList.contains('clear')) {
                enteredPassword = "";
            } else if (key.classList.contains('backspace')) {
                enteredPassword = enteredPassword.slice(0, -1);
            } else if (enteredPassword.length < maxPasswordLength) {
                enteredPassword += keyValue;
            }

            updatePasswordDisplay();

            if (enteredPassword.length === maxPasswordLength) {
                setTimeout(() => {
                    if (enteredPassword === correctPassword) {
                        window.location.href = "page3.html";
                    } else {
                        errorMessage.classList.add('show');
                        enteredPassword = "";
                        updatePasswordDisplay();
                        
                        setTimeout(() => {
                            errorMessage.classList.remove('show');
                        }, 2000);
                    }
                }, 300);
            }
        });
    });

    updatePasswordDisplay();
});