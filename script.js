document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openButtons = document.querySelectorAll('.openModal');
    const closeModal = document.getElementById('closeModal');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // モーダル外をクリックしたら閉じる
    /*window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });*/

    // フェードインアニメーションの設定
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});document.addEventListener('DOMContentLoaded', () => {
    const closeStudyButton = document.getElementById('close-study');
    const studyModal = document.getElementById('study-modal');

    // バツボタンをクリックしたらモーダルを非表示にする
    closeStudyButton.addEventListener('click', () => {
        studyModal.classList.add('hidden');
    });
});
// script.js

// ページが完全に読み込まれた後に実行されるイベントリスナーを追加
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});
