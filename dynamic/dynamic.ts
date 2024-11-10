interface ResumeData {
    name:string;
    email : string;
    phone: number;
    degree: string;
    university: string;
    date : any;
    skill1: string;
    skill2: string;
    skill3: string;
    job:  string;
    company: string;
    description : string;
}
const form = document.getElementById('resume-form') as HTMLFormElement;
const outputDiv = document.getElementById('Generate-cv') as HTMLDivElement;
const shareButton = document.getElementById('shareButton') as HTMLButtonElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const resumeData: ResumeData = {

        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as any,
    
        degree: formData.get('degree') as string,
        university: formData.get('university') as string,
        date: formData.get('date') as any,

        skill1: formData.get('skill1') as string,
        skill2: formData.get('skill2') as string,
        skill3: formData.get('skill3') as string,
        
        job: formData.get('job') as string,
        company: formData.get('company') as string,
        description: formData.get('description') as string,
    
    };
    
    const resumeHtml = `
        <h1 text-align="center"> CV <h1>
        <h2>${resumeData.name}</h2>
        <p>email: ${resumeData.email}</p>
        <p>phone: ${resumeData.phone}</p>
      
    
        <h2>eduacation</h2><hr>
    <p>degree: ${resumeData.degree}</p>
        <p>university: ${resumeData.university}</p>
        <p>date: ${resumeData.date}</p>

        <h2>skill</h2><hr>
        <p>skill1: ${resumeData.skill1}</p>
        <p>skill2: ${resumeData.skill2}</p>
        <p>skill3: ${resumeData.skill3}</p>


        

        <h2>experience</h2><hr>
        <p>job: ${resumeData.job}</p> 
        <p>company name: ${resumeData.company}</p>
        <p>description: ${resumeData.description}</p>
        `;
        
    outputDiv.innerHTML = resumeHtml;
});
shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: window.location.href,
        })
        .then(() => console.log('Share successful!'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        alert('Sharing not supported in this browser.');
    }
});