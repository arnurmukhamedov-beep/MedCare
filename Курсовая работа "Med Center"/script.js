const services = [
  {
    id: "s1",
    title: "Консультация терапевта",
    price: 8000,
    desc: "Первичный осмотр врача.",
    image: "https://img.freepik.com/premium-photo/female-doctor-woman-patient-meeting-clinic_380164-294995.jpg?semt=ais_hybridя"
  },
  {
    id: "s2",
    title: "Консультация кардиолога",
    price: 12000,
    desc: "Диагностика заболеваний сердца.",
    image: "https://mdctuva.ru/storage/photos/9384/Lucid_Realism_Image_is_a_closeup_photograph_featuring_a_person_0.jpg"
  },
  {
    id: "s3",
    title: "Общий анализ крови",
    price: 3500,
    desc: "Лабораторное исследование.",
    image: "https://y-zdorov.ru/upload/iblock/e80/e80d7abfaf67d7b00cf6a2f5205c0374.jpg"
  },
  {
    id: "s4",
    title: "УЗИ брюшной полости",
    price: 10000,
    desc: "Ультразвуковая диагностика.",
    image: "https://www.primamedica.ru/upload/iblock/9bb/az3lg2ux2bxocwo4yojxtteu4ry9f7jc.jpg"
  },
  {
    id: "s5",
    title: "Консультация педиатра",
    price: 9000,
    desc: "Осмотр детского врача.",
    image: "https://avatars.mds.yandex.net/i?id=2fb6c79634ce4e38c2be496038daa164_l-12585911-images-thumbs&n=13"
  },
  {
    id: "s6",
    title: "Консультация невролога",
    price: 11000,
    desc: "Диагностика нервной системы.",
    image: "https://polyclin.ru/upload/medialibrary/771/f4i4z2u34bz2cwy2goo6muxo5yxmnh8u/nevrologija-otradnoe.png"
  },
  {
    id: "s7",
    title: "Консультация эндокринолога",
    price: 11000,
    desc: "Проверка гормональной системы.",
    image: "https://lavieclinic.ru/wp-content/uploads/2025/08/consult2.jpg"
  },
  {
    id: "s8",
    title: "Осмотр дерматолога",
    price: 9500,
    desc: "Диагностика кожных заболеваний.",
    image: "https://klinik.by/wp-content/uploads/2023/09/gettyimages-1308441241-56ae67bf3df78cf772bb9e73-e1534854097420.jpg"
  },
  {
    id: "s9",
    title: "Консультация офтальмолога",
    price: 9000,
    desc: "Проверка зрения.",
    image: "https://polyclin.ru/upload/medialibrary/4c1/cax7tgv0k139m96bl9xm3gxlh7cus4hw/priem-oftalmologa-otradnoe.png"
  },
  {
    id: "s10",
    title: "Консультация гинеколога",
    price: 12000,
    desc: "Осмотр и консультация.",
    image: "https://avatars.mds.yandex.net/i?id=2de87a2f1daed99628fbd9ffeadeac1052785622-5236117-images-thumbs&n=13"
  },
  {
    id: "s11",
    title: "Консультация хирурга",
    price: 13000,
    desc: "Осмотр перед операцией.",
    image: "https://storage.myseldon.com/news-pict-63/6376C125A9D306747871AE4C0BDE78CF"
  },
  {
    id: "s12",
    title: "ЭКГ сердца",
    price: 5000,
    desc: "Электрокардиограмма.",
    image: "https://static.vecteezy.com/system/resources/previews/052/185/886/large_2x/red-heart-on-electrocardiogram-ecg-with-red-heart-heart-wave-heart-attack-cardiogram-report-photo.jpg"
  },
  {
    id: "s13",
    title: "Флюорография",
    price: 4000,
    desc: "Рентген грудной клетки.",
    image: "https://mrtkt.ru/upload/iblock/d47/qtdsorxb3hhugzsj90zzag2zqqyapti2.jpg"
  },
  {
    id: "s14",
    title: "Массаж лечебный",
    price: 7000,
    desc: "Восстановительная процедура.",
    image: "https://mdctuva.ru/storage/photos/9384/Lucid_Realism_Image_is_a_highresolution_photograph_depicting_a_1%20(1).jpg"
  },
  {
    id: "s15",
    title: "Вакцинация",
    price: 6000,
    desc: "Профилактическая прививка.",
    image: "https://bestclinic.ru/upload/resize_cache/uf/d03/670_450_0/4eg6tctraqcaktyb9212kr814cfi70ge.jpg"
  }
];
  const doctors = [
    {
    id:"d1",
    name:"Садыкова Алия",
    spec:"Терапевт",
    exp:6,
    schedule:"Онлайн запись доступна ежедневно",
    photo:"https://img.freepik.com/premium-photo/male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait_71956-34382.jpg?semt=ais_hybrid&w=740"
    },
    
    {
    id:"d2",
    name:"Ким Андрей",
    spec:"Кардиолог",
    exp:9,
    schedule:"Онлайн запись доступна ежедневно",
    photo:"https://static.vecteezy.com/system/resources/previews/030/603/559/non_2x/portrait-of-man-doctor-standing-in-hospital-copy-space-advertising-message-generative-ai-free-photo.jpeg"
    },
    
    {
    id:"d3",
    name:"Нурбаев Данияр",
    spec:"Врач УЗИ",
    exp:7,
    schedule:"Приём по предварительной записи",
    photo:"https://img.freepik.com/premium-photo/portrait-smiling-doctor-looking-camera-with-arms-crossed-medical-office_255667-21447.jpg?semt=ais_hybrid&w=740&q=80"
    },
    
    {
    id:"d4",
    name:"Ахметова Жанна",
    spec:"Педиатр",
    exp:5,
    schedule:"Приём по предварительной записи",
    photo:"https://t3.ftcdn.net/jpg/01/84/99/18/360_F_184991875_m2u3ho9WNkMJ45YXlxuipW264SWAYFnA.jpg"
    },
    
    {
    id:"d5",
    name:"Иванов Сергей",
    spec:"Невролог",
    exp:11,
    schedule:"Приём по предварительной записи",
    photo:"https://img.freepik.com/free-photo/healthcare-workers-medical-insurance-clinic-lab-covid-19-concept-cheerful-relieved-handsome-doctor-reveal-good-results-test-screening-smiling-patient-point-clipboard_1258-58598.jpg?semt=ais_hybrid&w=740&q=80"
    },
    
    {
    id:"d6",
    name:"Абдуллаева Мадина",
    spec:"Эндокринолог",
    exp:8,
    schedule:"Приём по предварительной записи",
    photo:"https://avatars.mds.yandex.net/get-shedevrum/16419046/img_9e88312236e111f0a9323683d2d77213/orig"
    },
    
    {
    id:"d7",
    name:"Петров Алексей",
    spec:"Хирург",
    exp:13,
    schedule:"Приём по предварительной записи",
    photo:"https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg?semt=ais_hybrid&w=740&q=80"
    },
    
    {
    id:"d8",
    name:"Смагулова Айгерим",
    spec:"Дерматолог",
    exp:6,
    schedule:"Онлайн запись доступна ежедневно",
    photo:"https://i.pinimg.com/736x/13/a4/68/13a468882f4c4d81db491fd0ed52ac4c.jpg"
    },
    
    {
    id:"d9",
    name:"Кузнецова Марина",
    spec:"Гинеколог",
    exp:10,
    schedule:"Онлайн запись доступна ежедневно",
    photo:"https://img.freepik.com/premium-photo/closeup-portrait-her-she-nice-attractive-lovely-content-wavyhaired-girl-doc-holding-hands-medical-insurance-assistance-terms-diagnostic-isolated-grey-pastel-color-background_274222-24365.jpg?semt=ais_hybrid&w=740"
    },
    
    {
    id:"d10",
    name:"Жумабаев Руслан",
    spec:"Офтальмолог",
    exp:7,
    schedule:"Онлайн запись доступна ежедневно",
    photo:"https://i.pinimg.com/736x/0a/3f/67/0a3f6720a866abf8e08d688128f53c78.jpg"
    }
    ];
    
  
  const $ = (sel) => document.querySelector(sel);
  const moneyKZT = (n) => new Intl.NumberFormat("ru-RU").format(n) + " ₸";
  
  function uniqCategories(items) {
    return Array.from(new Set(items.map(x => x.category))).sort((a,b) => a.localeCompare(b, "ru"));
  }
  function setText(el, text) { if (el) el.textContent = text; }
  function toggle(el, show) { if (el) el.classList.toggle("hidden", !show); }
  
  
  function renderServiceCard(service) {
    const div = document.createElement("div");
    div.className = "card serviceCard";
  
    div.innerHTML = `
      <img class="serviceCard__img"
           src="${service.image}"
           alt="${service.title}">
  
      <h3 class="card__name">${service.title}</h3>
  
      <p class="card__desc">${service.desc}</p>
  
      <div class="card__meta">
        <span class="price">${service.price} ₸</span>
      </div>
    `;
  
    return div;
  }
  
  function initServicesPage() {
    const servicesGrid = $("#servicesGrid");
    const servicesEmpty = $("#servicesEmpty");
    const serviceSearch = $("#serviceSearch");
    const serviceCategory = $("#serviceCategory");
    const searchHint = $("#searchHint");
  
    if (!servicesGrid || !serviceCategory) return; 
  
    uniqCategories(services).forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      serviceCategory.appendChild(opt);
    });
  
    function applyFilters() {
      const q = (serviceSearch?.value || "").trim().toLowerCase();
      const cat = serviceCategory.value;
  
      const useSearch = q.length >= 2;
      if (searchHint) toggle(searchHint, !useSearch && q.length > 0);
  
      const filtered = services.filter(s => {
        const byCat = (cat === "all") ? true : s.category === cat;
        const byQ = !useSearch ? true : (s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));
        return byCat && byQ;
      });
  
      servicesGrid.innerHTML = "";
      filtered.forEach(s => servicesGrid.appendChild(renderServiceCard(s)));
      if (servicesEmpty) toggle(servicesEmpty, filtered.length === 0);
    }
  
    serviceSearch?.addEventListener("input", applyFilters);    
    serviceCategory.addEventListener("change", applyFilters);
    applyFilters();
  }
  

  function renderDoctorCard(d){

    const div = document.createElement("div")
    div.className="card doctorCard"
    
    div.innerHTML=`
    
    <div class="doctorCard__row">
    
    <img class="doctorCard__photo"
    src="${d.photo}"
    alt="${d.name}">
    
    <div>
    
    <div class="card__top">
    <span class="badge">${d.spec}</span>
    <span class="meta">${d.exp} лет стажа</span>
    </div>
    
    <h3 class="card__name">${d.name}</h3>
    
    <p class="card__desc">
     ${d.schedule}
    </p>
    
    </div>
    
    </div>
    
    `
    
    return div
    }
  
  function initDoctorsPage() {
    const doctorsGrid = $("#doctorsGrid");
    if (!doctorsGrid) return;
  
    doctorsGrid.innerHTML = "";
    doctors.forEach(d => doctorsGrid.appendChild(renderDoctorCard(d)));
  }
  
  const STORAGE_KEY = "medcare_requests_v1";
  
  function loadRequests() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  function saveRequests(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
  function renderRequests(requestsList) {
    const items = loadRequests().slice(-5).reverse();
    requestsList.innerHTML = "";
  
    if (items.length === 0) {
      const div = document.createElement("div");
      div.className = "miniItem";
      div.innerHTML = `<b>Пока пусто</b><span>Отправьте заявку — она появится здесь.</span>`;
      requestsList.appendChild(div);
      return;
    }
  
    items.forEach(r => {
      const doc = doctors.find(d => d.id === r.doctorId);
      const svc = services.find(s => s.id === r.serviceId);
  
      const div = document.createElement("div");
      div.className = "miniItem";
      div.innerHTML = `
        <b>${r.fullName}</b>
        <span>${r.date} ${r.time} · ${doc ? doc.spec : "Врач"} · ${svc ? svc.name : "Услуга"}</span>
      `;
      requestsList.appendChild(div);
    });
  }
  
  function initAppointmentPage() {
    const form = $("#appointmentForm");
    if (!form) return;
  
    const formMsg = $("#formMsg");
    const fullName = $("#fullName");
    const phone = $("#phone");
    const email = $("#email");
    const doctorSelect = $("#doctor");
    const serviceSelect = $("#service");
    const dateInput = $("#date");
    const timeInput = $("#time");
    const agree = $("#agree");
    const resetBtn = $("#resetBtn");
  
    const requestsList = $("#requestsList");
    const clearRequestsBtn = $("#clearRequestsBtn");
  
    const errs = {
      fullName: $("#fullNameError"),
      phone: $("#phoneError"),
      email: $("#emailError"),
      doctor: $("#doctorError"),
      service: $("#serviceError"),
      date: $("#dateError"),
      time: $("#timeError"),
      agree: $("#agreeError")
    };
  
    const clearMsg = () => { formMsg?.classList.remove("msg--ok","msg--bad"); setText(formMsg, ""); };
    const setMsgOk = (t) => { formMsg?.classList.remove("msg--bad"); formMsg?.classList.add("msg--ok"); setText(formMsg, t); };
    const setMsgBad = (t) => { formMsg?.classList.remove("msg--ok"); formMsg?.classList.add("msg--bad"); setText(formMsg, t); };
  
    const setValid = (el, errEl) => { el?.classList.remove("is-invalid"); setText(errEl, ""); };
    const setInvalid = (el, errEl, msg) => { el?.classList.add("is-invalid"); setText(errEl, msg); };
  
    const phoneLooksOk = (v) => v.replace(/\D/g,"").length >= 10;
  
    doctors.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = `${d.name} — ${d.spec}`;
      doctorSelect.appendChild(opt);
    });
    services.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = `${s.title} (${moneyKZT(s.price)})`;
      serviceSelect.appendChild(opt);
    });
  
    (function setMinDate(){
      const t = new Date();
      const yyyy = t.getFullYear();
      const mm = String(t.getMonth()+1).padStart(2,"0");
      const dd = String(t.getDate()).padStart(2,"0");
      dateInput.min = `${yyyy}-${mm}-${dd}`;
    })();
  
    const validateLive = () => {
      if (fullName.value.trim().length >= 3) setValid(fullName, errs.fullName);
      if (phone.value.trim().length > 0 && phoneLooksOk(phone.value)) setValid(phone, errs.phone);
      if (email.validity.valid) setValid(email, errs.email);
    };
  
    const validateChange = () => {
      if (doctorSelect.value) setValid(doctorSelect, errs.doctor);
      if (serviceSelect.value) setValid(serviceSelect, errs.service);
      if (agree.checked) setText(errs.agree, "");
    };
  
    fullName.addEventListener("input", validateLive); 
    phone.addEventListener("input", validateLive);   
    email.addEventListener("input", validateLive);    
  
    doctorSelect.addEventListener("change", validateChange); 
    serviceSelect.addEventListener("change", validateChange); 
    agree.addEventListener("change", validateChange); 
    function validateForm() {
      let ok = true;
  
      if (fullName.value.trim().length < 3) { setInvalid(fullName, errs.fullName, "Введите ФИО (минимум 3 символа)."); ok = false; }
      else setValid(fullName, errs.fullName);
  
      if (!phoneLooksOk(phone.value)) { setInvalid(phone, errs.phone, "Введите корректный телефон (минимум 10 цифр)."); ok = false; }
      else setValid(phone, errs.phone);
  
      if (!email.validity.valid) { setInvalid(email, errs.email, "Введите корректный email."); ok = false; }
      else setValid(email, errs.email);
  
      if (!doctorSelect.value) { setInvalid(doctorSelect, errs.doctor, "Выберите врача."); ok = false; }
      else setValid(doctorSelect, errs.doctor);
  
      if (!serviceSelect.value) { setInvalid(serviceSelect, errs.service, "Выберите услугу."); ok = false; }
      else setValid(serviceSelect, errs.service);
  
      if (!dateInput.value) { setInvalid(dateInput, errs.date, "Выберите дату."); ok = false; }
      else setValid(dateInput, errs.date);
  
      if (!timeInput.value) { setInvalid(timeInput, errs.time, "Выберите время."); ok = false; }
      else setValid(timeInput, errs.time);
  
      if (!agree.checked) { setText(errs.agree, "Подтвердите согласие с условиями."); ok = false; }
      else setText(errs.agree, "");
  
      return ok;
    }
  

    resetBtn?.addEventListener("click", () => {
      clearMsg();
      [fullName, phone, email, doctorSelect, serviceSelect, dateInput, timeInput].forEach(el => el.classList.remove("is-invalid"));
      Object.values(errs).forEach(e => setText(e, ""));
    });
  

    if (requestsList) renderRequests(requestsList);
  
    clearRequestsBtn?.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      if (requestsList) renderRequests(requestsList);
      setMsgOk("История заявок очищена.");
      setTimeout(clearMsg, 1500);
    });

    form.addEventListener("submit", (e) => { 
      e.preventDefault();
      clearMsg();
  
      if (!validateForm()) {
        setMsgBad("Проверьте поля формы — есть ошибки.");
        return;
      }
  
      const req = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        fullName: fullName.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        doctorId: doctorSelect.value,
        serviceId: serviceSelect.value,
        date: dateInput.value,
        time: timeInput.value,
        comment: ($("#comment")?.value || "").trim(),
        createdAt: new Date().toISOString()
      };
  
      console.log("Заявка на приём:", req);
  
      const items = loadRequests();
      items.push(req);
      saveRequests(items);
      if (requestsList) renderRequests(requestsList);
  
      form.reset();
      setMsgOk("Заявка отправлена! Мы свяжемся с вами для подтверждения.");
    });
  }
  
  initServicesPage();
  initDoctorsPage();
  initAppointmentPage();

  function register(){

    const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || []
    
    users.push(user)
    
    localStorage.setItem("users", JSON.stringify(users))
    
    alert("Аккаунт создан!")
    
    }
    function login(){

      let users = JSON.parse(localStorage.getItem("users")) || []
      
      let email = document.getElementById("email").value
      let password = document.getElementById("password").value
      
      let user = users.find(u => u.email === email && u.password === password)
      
      if(user){
      
      localStorage.setItem("currentUser", JSON.stringify(user))
      
      alert("Вы вошли!")
      
      }else{
      
      alert("Неверный логин или пароль")
      
      }
      
      }
      function saveAppointment(data){

        let appointments = JSON.parse(localStorage.getItem("appointments")) || []
        
        let currentUser = JSON.parse(localStorage.getItem("currentUser"))
        
        data.user = currentUser.email
        
        appointments.push(data)
        
        localStorage.setItem("appointments", JSON.stringify(appointments))
        
        }
        let appointments = JSON.parse(localStorage.getItem("appointments")) || []

let user = JSON.parse(localStorage.getItem("currentUser"))

let my = appointments.filter(a => a.user === user.email)

my.forEach(a => {

let div = document.createElement("div")

div.innerHTML =
a.doctor + " | " +
a.service + " | " +
a.date + " " +
a.time

document.getElementById("history").appendChild(div)

})
