var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var el = document.getElementById('container');
var el1 = document.getElementById('container1');
if (el != null && btn != null) {
    btn.addEventListener('click', function handleClick() {
        if (el.style.display === 'none') {
            // ✅ Shows element if hidden
            el.style.display = 'block';
            btn.textContent = 'Hide element';
        }
        else {
            // ✅ Hides element if shown
            el.style.display = 'none';
            btn.textContent = 'Show element';
        }
    });
}

if (el1 != null && btn1 != null) {
    btn1.addEventListener('click', function handleClick() {
        if (el1.style.display === 'none') {
            // ✅ Shows element if hidden
            el1.style.display = 'block';
            btn1.textContent = 'Hide element';
        }
        else {
            // ✅ Hides element if shown
            el1.style.display = 'none';
            btn1.textContent = 'Show element';
        }
    });
}
