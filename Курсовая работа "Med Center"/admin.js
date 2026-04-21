const doctors = [
    { id:"d1", name:"Садыкова Алия", spec:"Терапевт" },
    { id:"d2", name:"Ким Андрей", spec:"Кардиолог" },
    { id:"d3", name:"Нурбаев Данияр", spec:"Врач УЗИ" },
    { id:"d4", name:"Ахметова Жанна", spec:"Педиатр" },
    { id:"d5", name:"Иванов Сергей", spec:"Невролог" },
    { id:"d6", name:"Абдуллаева Мадина", spec:"Эндокринолог" },
    { id:"d7", name:"Петров Алексей", spec:"Хирург" },
    { id:"d8", name:"Смагулова Айгерим", spec:"Дерматолог" },
    { id:"d9", name:"Кузнецова Марина", spec:"Гинеколог" },
    { id:"d10", name:"Жумабаев Руслан", spec:"Офтальмолог" }
    ]
    
    const services = [
    { id:"s1", title:"Консультация терапевта" },
    { id:"s2", title:"Консультация кардиолога" },
    { id:"s3", title:"Общий анализ крови" },
    { id:"s4", title:"УЗИ брюшной полости" },
    { id:"s5", title:"Консультация педиатра" },
    { id:"s6", title:"Консультация невролога" },
    { id:"s7", title:"Консультация эндокринолога" },
    { id:"s8", title:"Осмотр дерматолога" },
    { id:"s9", title:"Консультация офтальмолога" },
    { id:"s10", title:"Консультация гинеколога" },
    { id:"s11", title:"Консультация хирурга" },
    { id:"s12", title:"ЭКГ сердца" },
    { id:"s13", title:"Флюорография" },
    { id:"s14", title:"Массаж лечебный" },
    { id:"s15", title:"Вакцинация" }
    ]
    
    const container = document.getElementById("appointmentsList")
const count = document.getElementById("count")
const search = document.getElementById("search")

let appointments = []

try {
  appointments = JSON.parse(localStorage.getItem("medcare_requests_v1")) || []
} catch(e) {
  appointments = []
}

function render(data){

container.innerHTML = ""

count.textContent = data.length

if(data.length === 0){
container.innerHTML = "<p>Записей пока нет</p>"
return
}

data.forEach((a,index)=>{

const doctor = (typeof doctors !== "undefined")
  ? doctors.find(d => d.id === a.doctorId)
  : null

const service = (typeof services !== "undefined")
  ? services.find(s => s.id === a.serviceId)
  : null

let div = document.createElement("div")
div.className = "admin-row"

div.innerHTML = `
<span>${a.fullName || "-"}</span>
<span>${a.phone || "-"}</span>
<span>${a.email || "-"}</span>
<span>${doctor ? doctor.name : (a.doctorId || "-")}</span>
<span>${service ? service.title : (a.serviceId || "-")}</span>
<span>${a.date || "-"}</span>
<span>${a.time || "-"}</span>
<button onclick="deleteItem(${index})">Удалить</button>
`

container.appendChild(div)

})

}

function deleteItem(index){
appointments.splice(index,1)
localStorage.setItem(
"medcare_requests_v1",
JSON.stringify(appointments)
)
render(appointments)
}

if(search){
search.addEventListener("input", ()=>{
let value = search.value.toLowerCase()

let filtered = appointments.filter(a =>
(a.fullName || "").toLowerCase().includes(value) ||
(a.phone || "").toLowerCase().includes(value)
)

render(filtered)
})
}

render(appointments)