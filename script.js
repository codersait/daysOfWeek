let day = prompt('Lutfen bir gun ismi giriniz: ( ingilizce klavye kullaniniz )');

const weekdays = ['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma']
const weekend = ['cumartesi', 'pazar']
const result = document.querySelector('.result')


if (weekdays.indexOf(day.toLowerCase().trim()) != -1) {
    result.style.color = 'yellow'
    result.style.fontSize = '1.5rem'
    result.textContent = `${day} bir hafta ici gunudur`

} else if (weekend.indexOf(day.toLowerCase().trim()) != -1) {
    result.style.color = 'blue'
    result.style.fontSize = '1.5rem'
    result.textContent = `${day} bir hafta sonu gunudur`
} else {
    result.style.color = 'red'
    result.style.fontSize = '1.5rem'
    result.textContent = "Hatali gun girdiniz!!"
}

