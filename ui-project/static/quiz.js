
var highestZIndex = 1001;

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var originalX = 0, originalY = 0;
    var isDraggable = true;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {




        e = e || window.event;
        e.preventDefault();



        //FOR NOW
        //FOR NOW
        //FOR NOW
        //FOR NOW

        if (!isDraggable) return;






        originalX = elmnt.offsetLeft;
        originalY = elmnt.offsetTop;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        highestZIndex++;
        elmnt.style.zIndex = highestZIndex + 1;

        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {

            if (box.children.length != 0) {
                box.style.color = "rgba(33, 20, 0, 0)";
                box.style.border = "dashed 3px rgba(33, 20, 0, 0.3)";
            }

            const rect = box.getBoundingClientRect();
            if (e.clientX > rect.left && e.clientX < rect.right &&
                e.clientY > rect.top && e.clientY < rect.bottom) {
                // Update the border style when a draggable is over the box
                if (box.children.length === 0) {
                    box.style.color = "rgba(33, 20, 0, 1)";
                    box.style.border = "dashed 3px rgba(33, 20, 0, 1)";
                    box.style.transform = " scale(1.05)";
                }
            } else {
                // Reset the border style when the draggable is moved away
                if (box.children.length === 0) {
                    box.style.color = "rgba(33, 20, 0, 0.5)";
                    box.style.border = "dashed 3px rgba(33, 20, 0, 0.3)";
                    box.style.transform = " scale(1)";
                } else {
                    // Set the border style for boxes with a child
                    box.style.border = "dashed 3px rgba(33, 20, 0, 0.3)";
                }

            }
        });


    }

    function closeDragElement(e) {
        document.onmouseup = null;
        document.onmousemove = null;
        if (!checkDrop(elmnt, e)) {
            if (isWithinContainer(e.clientX, e.clientY)) {
                // If dropped within the container, but outside a box, stay there.
                highestZIndex++;
                elmnt.style.zIndex = highestZIndex + 1;
                return;
            } else {
                // Otherwise, reset to original position
                elmnt.style.left = originalX + "px";
                elmnt.style.top = originalY + "px";
                // Make draggable again
                elmnt.onmousedown = dragMouseDown;
            }
        } else {
            // If dropped into a box, make it undraggable
            //FOR NOW
            //FOR NOW
            //FOR NOW
            //FOR NOW
            isDraggable = false;
            elmnt.style.cursor = 'default';
            elmnt.style.isDraggable = false;

        }


    }
}

function checkDrop(img, e) {
    const boxes = document.querySelectorAll('.box');
    let isDropped = false;
    boxes.forEach(box => {

        const rect = box.getBoundingClientRect();
        if (e.clientX > rect.left && e.clientX < rect.right &&
            e.clientY > rect.top && e.clientY < rect.bottom) {

            box.style.color = "rgba(33, 20, 0, 0)";
            box.style.border = "dashed 3px rgba(33, 20, 0, 0.3)";
            box.style.transform = " scale(1)";
            box.style.backgroundColor = "rgba(33, 20, 0, 0.05)";

            if (box.children.length === 0) {
                img.style.top = "50%";
                img.style.left = "50%";
                img.style.transform = "translate(-50%, -50%)";
                box.appendChild(img);
                isDropped = true;
            } else {

            }
        }
    });
    return isDropped;
}

function isWithinContainer(x, y) {
    const container = document.getElementById('boarddiv').getBoundingClientRect();
    return x >= container.left && x <= container.right && y >= container.top && y <= container.bottom;
}

document.querySelectorAll('.draggable').forEach(dragElement);

function calculateKendallTauScore() {
    const boxes = document.querySelectorAll('.box');
    let concordantPairs = 0;
    let discordantPairs = 0;

    let arr = Array.from(boxes).map(box => {
        const img = box.querySelector('img');
        return img ? parseInt(img.getAttribute('data-number'), 10) : null;
    }).filter(n => n !== null);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] - arr[j]) * (i - j) > 0) {
                concordantPairs++;
            } else if ((arr[i] - arr[j]) * (i - j) < 0) {
                discordantPairs++;
            }
        }
    }

    const totalPairs = (arr.length * (arr.length - 1)) / 2;
    const tau = (concordantPairs - discordantPairs) / totalPairs;
    const score = ((tau + 1) / 2) * 100;
    score.toFixed(2)
    return Math.round(score); // Round to two decimal places for the score
}

$(document).ready(function () {
    $("#quiz-submit").click(function () {

        const score = calculateKendallTauScore();
        const boxes = document.querySelectorAll('.box');
        let allMatched = true;
        let matchedCount = 0;
        let filled = 0;

        boxes.forEach(box => {
            const boxNumber = box.getAttribute('data-number');
            const image = box.querySelector('img');

            if (!image) {
                allMatched = false;
                return;
            }

            if (image.getAttribute('data-number') !== boxNumber) {
                filled++;
                allMatched = false;
                return;
            }
            filled++;
            matchedCount = matchedCount + 10;
        });

        if (allMatched) {
            $("#answers-block").css("display", "block");

            const congratulationsMessage = document.createElement('div');
            congratulationsMessage.innerHTML = 'Congratulations!! You solved the puzzle :)<br>⁺✧°⭒⁺｡✴⁺✫✧˚✴°｡❊⁺⭒°｡⁺˚❊⭒｡⁺⭒✫°✧˚✴｡⭒˚❊°⁺✧<br><h5>See answers in menu</h5>';
            congratulationsMessage.style.backgroundColor = 'green';
            congratulationsMessage.style.fontSize = '24px';
            congratulationsMessage.style.fontWeight = '600';
            congratulationsMessage.style.color = '#E9E6DE';
            congratulationsMessage.style.position = 'fixed';
            congratulationsMessage.style.top = '50%';
            congratulationsMessage.style.left = '50%';
            congratulationsMessage.style.transform = 'translate(-50%, -50%)';
            congratulationsMessage.style.zIndex = '9999';
            congratulationsMessage.style.fontVariationSettings = '"BNCE" 60, "INFM" 100, "SPAC" 10';
            congratulationsMessage.style.borderRadius = '10px 230px 15px 450px/450px 18px 203px 23px';
            congratulationsMessage.style.outline = 'none';
            congratulationsMessage.style.border = 'solid 3px #211400';
            congratulationsMessage.style.paddingLeft = '20px';
            congratulationsMessage.style.paddingRight = '20px';
            congratulationsMessage.style.paddingTop = '5px';
            congratulationsMessage.style.paddingBottom = '5px';
            document.body.appendChild(congratulationsMessage);

            const duration = 5 * 1000; // 5 seconds
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 180, ticks: 50, zIndex: 9999, colors: ['#dc4424', '#f8bc5c', '#24448c', '#74a446', '#cca4a0', '#49443b', '#A6290D'] };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);

            // Remove the message after 3 seconds
            setTimeout(() => {
                congratulationsMessage.remove();
            }, 5000);
        } else {
            $("#answers-block").css("display", "block");

            var finalScore = 99 * score / 100 + 1 * matchedCount / 100;
            finalScore = finalScore.toFixed(2);
            finalScore = Math.round(finalScore);


            if (filled != 10) {

                console.log(finalScore)

                const messageDiv = document.createElement('div');
                messageDiv.textContent = 'fill all the boxes first lol';
                messageDiv.style.backgroundColor = '#211400';
                messageDiv.style.fontSize = '24px';
                messageDiv.style.fontWeight = '600';
                messageDiv.style.color = '#E9E6DE';
                messageDiv.style.position = 'fixed';
                messageDiv.style.top = '50%';
                messageDiv.style.left = '50%';
                messageDiv.style.transform = 'translate(-50%, -50%)';
                messageDiv.style.zIndex = '9999';
                messageDiv.style.fontVariationSettings = '"BNCE" 60, "INFM" 100, "SPAC" 10';
                messageDiv.style.borderRadius = '10px 230px 15px 450px/450px 18px 203px 23px';
                messageDiv.style.outline = 'none';
                messageDiv.style.border = 'solid 3px #211400';
                messageDiv.style.paddingLeft = '20px';
                messageDiv.style.paddingRight = '20px';
                messageDiv.style.paddingTop = '5px';
                messageDiv.style.paddingBottom = '5px';
                document.body.appendChild(messageDiv);

                // Remove the message after 3 seconds
                setTimeout(() => {
                    messageDiv.remove();
                }, 3000);



            } else {







                const tryAgainMessage = document.createElement('div');
                if (finalScore == 69) {
                    tryAgainMessage.textContent = `Haha! You scored ${finalScore} points ;D  (answers in menu)` ; // 3, 4, 7, 6, 5, 1, 2, 9, 8, A // 1, 2, 9, 7, 8, 3, 4, 5, 6, A
                } else {
                    tryAgainMessage.textContent = `Oops! You scored ${finalScore} points :(  (answers in menu)`;
                }
                tryAgainMessage.style.backgroundColor = 'red';
                tryAgainMessage.style.fontSize = '24px';
                tryAgainMessage.style.fontWeight = '600';
                tryAgainMessage.style.color = '#E9E6DE';
                tryAgainMessage.style.position = 'fixed';
                tryAgainMessage.style.top = '50%';
                tryAgainMessage.style.left = '50%';
                tryAgainMessage.style.transform = 'translate(-50%, -50%)';
                tryAgainMessage.style.zIndex = '9999';
                tryAgainMessage.style.fontVariationSettings = '"BNCE" 60, "INFM" 100, "SPAC" 10';
                tryAgainMessage.style.borderRadius = '10px 230px 15px 450px/450px 18px 203px 23px';
                tryAgainMessage.style.outline = 'none';
                tryAgainMessage.style.border = 'solid 3px #211400';
                tryAgainMessage.style.paddingLeft = '20px';
                tryAgainMessage.style.paddingRight = '20px';
                tryAgainMessage.style.paddingTop = '5px';
                tryAgainMessage.style.paddingBottom = '5px';
                document.body.appendChild(tryAgainMessage);

                // Remove the message after 3 seconds
                setTimeout(() => {
                    tryAgainMessage.remove();
                }, 5000);
            }
        }
    });

    $("#quiz-reset").click(function () {
        location.reload(); // Reload the page to reset the puzzle

    });
});


function randomizeImagePositions() {

    const container = document.getElementById('boarddiv');
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const images = document.querySelectorAll('.draggable');

    images.forEach(img => {
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        const maxX = containerWidth - imgWidth;
        const maxY = containerHeight - imgHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        img.style.left = randomX + 'px';
        img.style.top = randomY + 'px';
    });

    // Move images towards randomly chosen edge
    images.forEach(img => {
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        const edge = ['top', 'right', 'bottom', 'left'][Math.floor(Math.random() * 4)];
        const distance = Math.floor(Math.random() * 86) + 10; // random distance between 10 to 95

        switch (edge) {
            case 'top':
                img.style.top = distance + 'px';
                break;
            case 'right':
                img.style.left = `${containerWidth - imgWidth - distance}px`;
                break;
            case 'bottom':
                img.style.top = `${containerHeight - imgHeight - distance}px`;
                break;
            case 'left':
                img.style.left = distance + 'px';
                break;
        }
    });
}

// Call the randomizeImagePositions function when the page loads
window.onload = randomizeImagePositions;
