document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('messageForm');
  const resultList = document.getElementById('resultList');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value.trim();

    if (!name || !genderInput || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const gender = genderInput.value;

    const resultBox = document.createElement('div');
    resultBox.className = 'form-box result';
    resultBox.innerHTML = `
      <label>Name:</label>
      <input type="text" value="${name}" disabled />

      <label>Gender:</label>
      <div class="gender-group">
        <input type="radio" ${gender === "Male" ? "checked" : ""} disabled />
        <label>Male</label>
        <input type="radio" ${gender === "Female" ? "checked" : ""} disabled />
        <label>Female</label>
      </div>

      <label>Message:</label>
      <textarea disabled>${message}</textarea>
    `;

    resultList.appendChild(resultBox);

    form.reset();
  });
});
