/* eslint-disable */
export default async (scores) => {
  const tableBody = document.querySelector('tbody');
  tbody.innerHTML = '';
  scores.forEach((element) => {
    const tableRow = document.createElement('tr');
    const tableUser = document.createElement('td');
    const tableScore = document.createElement('td');
    tableUser.textContent = element.user;
    tableScore.textContent = element.score;
    [tableUser, tableScore].forEach((element) => tableRow.appendChild(element));
    tableBody.appendChild(tableRow);
  });
};

/*export default async (scores) => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  scores.forEach((element) => {
    const tr = document.createElement('tr');
    const tdUser = document.createElement('td');
    const tdScore = document.createElement('td');
    tdUser.textContent = element.user;
    tdScore.textContent = element.score;
    [tdUser, tdScore].forEach((element) => tr.appendChild(element));
    tbody.appendChild(tr);
  });
};*/