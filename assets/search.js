document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('results');

    // Load index data
    fetch('./assets/index.json')
        .then(response => response.json())
        .then(data => {
            const pages = data;

            searchInput.addEventListener('keyup', function () {
                const query = searchInput.value.toLowerCase();
                resultsList.innerHTML = '';

                if (query.length > 0) {
                    const results = pages.flatMap(page => {
                        const matchingSentences = page.content.filter(sentence => sentence.toLowerCase().includes(query)).map(sentence => {
                            const highlightedSentence = sentence.replace(new RegExp(`(${query})`, 'gi'), '<span class="highlight">$1</span>');
                            return highlightedSentence;
                        });
                        if (matchingSentences.length > 0) {
                            return { ...page, matchingSentences };
                        }
                        return [];
                    });

                    results.forEach(page => {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = page.url;
                        a.textContent = page.title + " (클릭으로 이동하기)";
                        li.appendChild(a);

                        const ul = document.createElement('ul');
                        page.matchingSentences.forEach(sentence => {
                            const sentenceLi = document.createElement('li');
                            sentenceLi.innerHTML = sentence;
                            ul.appendChild(sentenceLi);
                        });
                        li.appendChild(ul);

                        resultsList.appendChild(li);
                    });
                }
            });
        })
        .catch(error => console.error('Error loading index:', error));
});
