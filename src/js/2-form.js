const storageKey = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };


const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};
Object.entries(savedData).forEach(([key, value]) => {
  const inputField = feedbackForm.querySelector(`[name="${key}"]`);
  if (inputField) {
    inputField.value = value;
    formData[key] = value; 
  }
});


feedbackForm.addEventListener('input', handleInputSaveToLocalStorage);
feedbackForm.addEventListener('submit', handleSubmitForm);

function handleInputSaveToLocalStorage(event) {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  localStorage.setItem(storageKey, JSON.stringify(formData)); 
}

function handleSubmitForm(event) {
  event.preventDefault();
  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields'); 
    return;
  }

  console.log('Submitted data:', formData); 
  localStorage.removeItem(storageKey);
  feedbackForm.reset(); 
  Object.keys(formData).forEach(key => formData[key] = ''); 
}
