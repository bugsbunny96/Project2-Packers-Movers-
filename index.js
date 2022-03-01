const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    // change the theam of website
    document.body.classList.toggle('dark')
})