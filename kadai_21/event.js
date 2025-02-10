const btn = document.getElementById('btn');
const text = document.getElementById('text');
 btn.addEventListener('click', () => {
 setTimeout(() => {
    console.log('click');
  }, 2000);
  const childList = document.createElement('li');
  childList.textContent = 'ボタンをクリックしました';
  text.textContent ="ボタンをクリックしました。"

});
