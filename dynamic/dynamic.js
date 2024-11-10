var form = document.getElementById('resume-form');
var outputDiv = document.getElementById('Generate-cv');
var shareButton = document.getElementById('shareButton');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        degree: formData.get('degree'),
        university: formData.get('university'),
        date: formData.get('date'),
        skill1: formData.get('skill1'),
        skill2: formData.get('skill2'),
        skill3: formData.get('skill3'),
        job: formData.get('job'),
        company: formData.get('company'),
        description: formData.get('description'),
    };
    var resumeHtml = "\n        <h1 text-align=\"center\"> CV <h1>\n        <h2>".concat(resumeData.name, "</h2>\n        <p>email: ").concat(resumeData.email, "</p>\n        <p>phone: ").concat(resumeData.phone, "</p>\n      \n    <p>-------------------------------------------<p>\n        <h2>eduacation</h2>\n    <p>degree: ").concat(resumeData.degree, "</p>\n        <p>university: ").concat(resumeData.university, "</p>\n        <p>date: ").concat(resumeData.date, "</p>\n<p>-------------------------------------------<p>\n        <h2>skill</h2>\n        <p>skill1: ").concat(resumeData.skill1, "</p>\n        <p>skill2: ").concat(resumeData.skill2, "</p>\n        <p>skill3: ").concat(resumeData.skill3, "</p>\n\n<p>-------------------------------------------<p>\n        <h2>experience</h2>\n        <p>job: ").concat(resumeData.job, "</p> \n        <p>company name: ").concat(resumeData.company, "</p>\n        <p>description: ").concat(resumeData.description, "</p>\n        ");
    var resumeHtml = "\n        <h1 text-align=\"center\"> CV <h1>\n        <h2>".concat(resumeData.name, "</h2>\n        <p>email: ").concat(resumeData.email, "</p>\n        <p>phone: ").concat(resumeData.phone, "</p>\n      \n    <p>-------------------------------------------<p>\n        <h2>eduacation</h2>\n    <p>degree: ").concat(resumeData.degree, "</p>\n        <p>university: ").concat(resumeData.university, "</p>\n        <p>date: ").concat(resumeData.date, "</p>\n<p>-------------------------------------------<p>\n        <h2>skill</h2>\n        <p>skill1: ").concat(resumeData.skill1, "</p>\n        <p>skill2: ").concat(resumeData.skill2, "</p>\n        <p>skill3: ").concat(resumeData.skill3, "</p>\n\n<p>-------------------------------------------<p>\n        <h2>experience</h2>\n        <p>job: ").concat(resumeData.job, "</p> \n        <p>company name: ").concat(resumeData.company, "</p>\n        <p>description: ").concat(resumeData.description, "</p>\n        ");
    var resumeHtml = "\n        <h1 text-align=\"center\"> CV <h1>\n        <h2>".concat(resumeData.name, "</h2>\n        <p>email: ").concat(resumeData.email, "</p>\n        <p>phone: ").concat(resumeData.phone, "</p>\n      \n    <p>-------------------------------------------<p>\n        <h2>eduacation</h2>\n    <p>degree: ").concat(resumeData.degree, "</p>\n        <p>university: ").concat(resumeData.university, "</p>\n        <p>date: ").concat(resumeData.date, "</p>\n<p>-------------------------------------------<p>\n        <h2>skill</h2>\n        <p>skill1: ").concat(resumeData.skill1, "</p>\n        <p>skill2: ").concat(resumeData.skill2, "</p>\n        <p>skill3: ").concat(resumeData.skill3, "</p>\n\n<p>-------------------------------------------<p>\n        <h2>experience</h2>\n        <p>job: ").concat(resumeData.job, "</p> \n        <p>company name: ").concat(resumeData.company, "</p>\n        <p>description: ").concat(resumeData.description, "</p>\n        ");
    var resumeHtml = "\n        <h1 text-align=\"center\"> CV <h1>\n        <h2>".concat(resumeData.name, "</h2>\n        <p>email: ").concat(resumeData.email, "</p>\n        <p>phone: ").concat(resumeData.phone, "</p>\n      \n    <p>-------------------------------------------<p>\n        <h2>eduacation</h2>\n    <p>degree: ").concat(resumeData.degree, "</p>\n        <p>university: ").concat(resumeData.university, "</p>\n        <p>date: ").concat(resumeData.date, "</p>\n<p>-------------------------------------------<p>\n        <h2>skill</h2>\n        <p>skill1: ").concat(resumeData.skill1, "</p>\n        <p>skill2: ").concat(resumeData.skill2, "</p>\n        <p>skill3: ").concat(resumeData.skill3, "</p>\n\n<p>-------------------------------------------<p>\n        <h2>experience</h2><hr>\n        <p>job: ").concat(resumeData.job, "</p> \n        <p>company name: ").concat(resumeData.company, "</p>\n        <p>description: ").concat(resumeData.description, "</p>\n        ");
    var resumeHtml = "\n        <h1 text-align=\"center\"> CV <h1>\n        <h2>".concat(resumeData.name, "</h2>\n        <p>email: ").concat(resumeData.email, "</p>\n        <p>phone: ").concat(resumeData.phone, "</p>\n      \n    \n        <h2>eduacation</h2><hr>\n    <p>degree: ").concat(resumeData.degree, "</p>\n        <p>university: ").concat(resumeData.university, "</p>\n        <p>date: ").concat(resumeData.date, "</p>\n\n        <h2>skill</h2><hr>\n        <p>skill1: ").concat(resumeData.skill1, "</p>\n        <p>skill2: ").concat(resumeData.skill2, "</p>\n        <p>skill3: ").concat(resumeData.skill3, "</p>\n\n\n        <h2>experience</h2><hr>\n        <p>job: ").concat(resumeData.job, "</p> \n        <p>company name: ").concat(resumeData.company, "</p>\n        <p>description: ").concat(resumeData.description, "</p>\n        ");
    outputDiv.innerHTML = resumeHtml;
});
shareButton.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: window.location.href,
        })
            .then(function () { return console.log('Share successful!'); })
            .catch(function (error) { return console.log('Error sharing:', error); });
    }
    else {
        alert('Sharing not supported in this browser.');
    }
});
