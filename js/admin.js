const COUNTRIES_MAP = {
  germany: 'Германия',
  france: 'Франция',
  italy: 'Италия',
  spain: 'Испания',
  uk: 'Великобритания',
  portugal: 'Португалия',
  greece: 'Греция',
  croatia: 'Хорватия',
  czech: 'Чехия',
  netherlands: 'Нидерланды',
  usa: 'США',
  canada: 'Канада',
  mexico: 'Мексика',
  brazil: 'Бразилия',
  argentina: 'Аргентина',
  japan: 'Япония',
  china: 'Китай',
  'south-korea': 'Южная Корея',
  thailand: 'Таиланд',
  uae: 'ОАЭ',
  vietnam: 'Вьетнам',
  indonesia: 'Индонезия',
  turkey: 'Турция',
  australia: 'Австралия',
  'new-zealand': 'Новая Зеландия'
};

const VISA_TYPES = {
  tourist: 'Туристическая',
  business: 'Деловая',
  transit: 'Транзитная',
  student: 'Учебная'
};

const STATUS_MAP = {
  new: { label: 'Новая', class: 'status-new' },
  processing: { label: 'В обработке', class: 'status-processing' },
  documents: { label: 'Документы получены', class: 'status-documents' },
  submitted: { label: 'Подана', class: 'status-submitted' },
  approved: { label: 'Одобрена', class: 'status-approved' },
  completed: { label: 'Завершена', class: 'status-completed' },
  rejected: { label: 'Отклонена', class: 'status-rejected' }
};

let currentAppId = null;
let applications = [];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  loadApplications();
  updateStats();
  renderTable();
});

// Загрузка заявок из localStorage
function loadApplications() {
  applications = JSON.parse(localStorage.getItem('visa-applications') || '[]');

  // Добавляем тестовые данные, если нет заявок
  if (applications.length === 0) {
    applications = getTestData();
    localStorage.setItem('visa-applications', JSON.stringify(applications));
  }
}

// Тестовые данные
function getTestData() {
  return [
    {
      id: 1001,
      country: 'germany',
      visaType: 'tourist',
      travelDate: '2026-09-15',
      lastName: 'Иванов',
      firstName: 'Иван',
      middleName: 'Иванович',
      birthDate: '1990-05-15',
      phone: '+7 (999) 123-45-67',
      email: 'ivanov@mail.ru',
      passport: '12 3456789',
      comments: 'Хочу посмотреть Берлин и Мюнхен',
      status: 'processing',
      createdAt: '2026-07-20T10:30:00Z',
      notes: 'Клиент предоставил все документы. Ожидаем справку с работы.',
      history: [
        { date: '2026-07-20T10:30:00Z', event: 'Заявка создана' },
        { date: '2026-07-20T11:00:00Z', event: 'Менеджер связался с клиентом' },
        { date: '2026-07-21T09:00:00Z', event: 'Статус изменён: В обработке' }
      ]
    },
    {
      id: 1002,
      country: 'usa',
      visaType: 'business',
      travelDate: '2026-10-01',
      lastName: 'Петрова',
      firstName: 'Мария',
      middleName: 'Сергеевна',
      birthDate: '1985-08-20',
      phone: '+7 (916) 555-12-34',
      email: 'petrova@company.ru',
      passport: '98 7654321',
      comments: 'Деловая поездка на конференцию',
      status: 'documents',
      createdAt: '2026-07-19T14:20:00Z',
      notes: 'Документы получены. Подготовка анкеты DS-160.',
      history: [
        { date: '2026-07-19T14:20:00Z', event: 'Заявка создана' },
        { date: '2026-07-19T15:00:00Z', event: 'Менеджер связался с клиентом' },
        { date: '2026-07-20T10:00:00Z', event: 'Документы получены' },
        { date: '2026-07-21T11:00:00Z', event: 'Статус изменён: Документы получены' }
      ]
    },
    {
      id: 1003,
      country: 'france',
      visaType: 'tourist',
      travelDate: '2026-08-20',
      lastName: 'Сидоров',
      firstName: 'Алексей',
      middleName: 'Петрович',
      birthDate: '1992-03-10',
      phone: '+7 (925) 888-99-00',
      email: 'sidorov@gmail.com',
      passport: '55 1234567',
      comments: '',
      status: 'new',
      createdAt: '2026-07-22T09:15:00Z',
      notes: '',
      history: [
        { date: '2026-07-22T09:15:00Z', event: 'Заявка создана' }
      ]
    },
    {
      id: 1004,
      country: 'uk',
      visaType: 'tourist',
      travelDate: '2026-11-10',
      lastName: 'Козлова',
      firstName: 'Елена',
      middleName: 'Дмитриевна',
      birthDate: '1988-12-05',
      phone: '+7 (903) 222-33-44',
      email: 'kozlova@yandex.ru',
      passport: '33 9876543',
      comments: 'Хочу посетить Лондон и Эдинбург',
      status: 'approved',
      createdAt: '2026-07-15T16:45:00Z',
      notes: 'Виза одобрена. Ожидаем паспорт.',
      history: [
        { date: '2026-07-15T16:45:00Z', event: 'Заявка создана' },
        { date: '2026-07-16T10:00:00Z', event: 'Документы получены' },
        { date: '2026-07-17T14:00:00Z', event: 'Подана в консульство' },
        { date: '2026-07-22T09:00:00Z', event: 'Виза одобрена' }
      ]
    },
    {
      id: 1005,
      country: 'canada',
      visaType: 'tourist',
      travelDate: '2026-12-25',
      lastName: 'Новиков',
      firstName: 'Дмитрий',
      middleName: 'Александрович',
      birthDate: '1995-07-22',
      phone: '+7 (977) 444-55-66',
      email: 'novikov@mail.ru',
      passport: '77 1122334',
      comments: 'Новогодние каникулы',
      status: 'completed',
      createdAt: '2026-07-01T11:00:00Z',
      notes: 'Виза успешно получена клиентом.',
      history: [
        { date: '2026-07-01T11:00:00Z', event: 'Заявка создана' },
        { date: '2026-07-02T09:00:00Z', event: 'Документы получены' },
        { date: '2026-07-03T14:00:00Z', event: 'Подана в консульство' },
        { date: '2026-07-18T10:00:00Z', event: 'Виза одобрена' },
        { date: '2026-07-20T15:00:00Z', event: 'Завершена. Клиент получил паспорт.' }
      ]
    }
  ];
}

// Обновление статистики
function updateStats() {
  document.getElementById('stat-total').textContent = applications.length;
  document.getElementById('stat-new').textContent = applications.filter(a => a.status === 'new').length;
  document.getElementById('stat-processing').textContent = applications.filter(a => ['processing', 'documents', 'submitted'].includes(a.status)).length;
  document.getElementById('stat-completed').textContent = applications.filter(a => a.status === 'completed').length;
}

// Отрисовка таблицы
function renderTable(data = applications) {
  const tbody = document.getElementById('applications-table');
  const emptyState = document.getElementById('empty-state');

  if (data.length === 0) {
    tbody.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  tbody.innerHTML = data.map(app => {
    const status = STATUS_MAP[app.status];
    const date = new Date(app.createdAt).toLocaleDateString('ru-RU');

    return `
      <tr onclick="openApplication(${app.id})" style="cursor: pointer;">
        <td>#${app.id}</td>
        <td>${app.lastName} ${app.firstName}</td>
        <td>${COUNTRIES_MAP[app.country] || app.country}</td>
        <td>${VISA_TYPES[app.visaType] || app.visaType}</td>
        <td><span class="status-badge ${status.class}">${status.label}</span></td>
        <td>${date}</td>
        <td>
          <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 12px;">Открыть</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Фильтрация заявок
function filterApplications() {
  const statusFilter = document.getElementById('filter-status').value;
  const searchFilter = document.getElementById('filter-search').value.toLowerCase();

  let filtered = applications;

  if (statusFilter !== 'all') {
    filtered = filtered.filter(a => a.status === statusFilter);
  }

  if (searchFilter) {
    filtered = filtered.filter(a =>
      a.lastName.toLowerCase().includes(searchFilter) ||
      a.firstName.toLowerCase().includes(searchFilter) ||
      a.email.toLowerCase().includes(searchFilter)
    );
  }

  renderTable(filtered);
}

// Открытие модального окна заявки
function openApplication(id) {
  const app = applications.find(a => a.id === id);
  if (!app) return;

  currentAppId = id;

  document.getElementById('modal-app-id').textContent = id;
  document.getElementById('modal-fullname').textContent = `${app.lastName} ${app.firstName} ${app.middleName || ''}`;
  document.getElementById('modal-phone').textContent = app.phone;
  document.getElementById('modal-email').textContent = app.email;
  document.getElementById('modal-passport').textContent = app.passport;
  document.getElementById('modal-country').textContent = COUNTRIES_MAP[app.country] || app.country;
  document.getElementById('modal-visa-type').textContent = VISA_TYPES[app.visaType] || app.visaType;
  document.getElementById('modal-travel-date').textContent = app.travelDate ? new Date(app.travelDate).toLocaleDateString('ru-RU') : 'Не указана';
  document.getElementById('modal-comments').textContent = app.comments || 'Нет комментариев';
  document.getElementById('modal-status').value = app.status;
  document.getElementById('modal-notes').value = app.notes || '';

  // Timeline
  const timeline = document.getElementById('modal-timeline');
  timeline.innerHTML = (app.history || []).map((item, i) => {
    const date = new Date(item.date).toLocaleString('ru-RU');
    return `
      <div class="timeline-item ${i === app.history.length - 1 ? '' : 'completed'}">
        <div class="time">${date}</div>
        <div class="event">${item.event}</div>
      </div>
    `;
  }).reverse().join('');

  document.getElementById('application-modal').classList.add('active');
}

// Закрытие модального окна
function closeModal() {
  document.getElementById('application-modal').classList.remove('active');
  currentAppId = null;
}

// Обновление статуса
function updateStatus() {
  if (!currentAppId) return;

  const newStatus = document.getElementById('modal-status').value;
  const app = applications.find(a => a.id === currentAppId);

  if (app) {
    app.status = newStatus;
    if (!app.history) app.history = [];
    app.history.push({
      date: new Date().toISOString(),
      event: `Статус изменён: ${STATUS_MAP[newStatus].label}`
    });

    localStorage.setItem('visa-applications', JSON.stringify(applications));
    updateStats();
    renderTable();
  }
}

// Сохранение заметок
function saveNotes() {
  if (!currentAppId) return;

  const notes = document.getElementById('modal-notes').value;
  const app = applications.find(a => a.id === currentAppId);

  if (app) {
    app.notes = notes;
    localStorage.setItem('visa-applications', JSON.stringify(applications));
    alert('Заметки сохранены');
  }
}

// Открытие формы новой заявки
function openNewApplication() {
  window.location.href = '../apply.html';
}

// Закрытие модального окна по клику вне
document.getElementById('application-modal').addEventListener('click', (e) => {
  if (e.target.id === 'application-modal') {
    closeModal();
  }
});

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
