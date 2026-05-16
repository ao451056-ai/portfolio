function showLoveMessage() {
    const messages = [
        "نونو، أنتِ أجمل شيء حدث في حياتي ❤️",
        "أحبك أكثر مما تستطيع الكلمات وصفه 💖",
        "معك أشعر أن الدنيا كلها بخير 🌹",
        "ندى، أنتِ نبض قلبي وروحي 💘",
        "إلى نونو... سأحبك دائمًا وأبدًا 💍"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("loveMessage").textContent = randomMessage;
}



function updateLoveCounter() {
    const startDate = new Date('2026-01-14T00:00:00');
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const counter = document.getElementById('loveCounter');
    if (counter) {
        if (diffDays >= 0) {
            counter.textContent = `مر ${diffDays} يوم من بداية عمري معاكي ❤️`;
        } else {
            counter.textContent = 'قصة حبنا تبدأ في 14/1/2026 💖';
        }
    }
}

function showPoem() {
    const poem = `يا نونو يا نبض قلبي وروحي،
يا أجمل حلم تحقق في عمري.

في ضحكتك أجد سعادتي،
وفي عينيك أرى دنياي.

أحبك حبًا لا يصفه كلام،
ولا ينتهي مع الأيام.

ستظلين أجمل قدر،
وأغلى حب، وأحن وطن. ❤️`;

    const poemBox = document.getElementById('poemBox');
    if (poemBox) poemBox.textContent = poem;
}

window.addEventListener('load', updateLoveCounter);

function showLoveMessage() {
    const messages = [
        "نونو، أنتِ أجمل شيء حدث في حياتي ❤️",
        "أحبك أكثر مما تستطيع الكلمات وصفه 💖",
        "معك أشعر أن الدنيا كلها بخير 🌹",
        "ندى، أنتِ نبض قلبي وروحي 💘",
        "إلى نونو... سأحبك دائمًا وأبدًا 💍"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("loveMessage").textContent = randomMessage;
}


