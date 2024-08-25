// ini javascript
function submit(){
const namaElement = document.querySelector('.js-input-nama');
const namaValue = namaElement.value;

const tanggalElement = document.querySelector('.js-input-tanggal');
const tanggalValue = tanggalElement.value;

const pesanElement = document.querySelector('.js-input-pesan');
const pesanValue = pesanElement.value;

const genderElement = document.getElementsByName('gender');
 
for (i = 0; i < genderElement.length; i++) {
    if (genderElement[i].checked)
      genderValue = genderElement[i].value;
}


document.querySelector('.second-form').innerHTML = `
  <form class="second-form">
        <div class="second-group-form js-second-group-form">
          <p>Current Time : Fri Jun 17 2022</p>
          <p> </p>
          <p>Nama : ${namaValue}</p>
          <p>Tanggal lahir : ${tanggalValue}</p>
          <p>Jenis Kelamin : ${genderValue}</p>
          <p>Pesan : ${pesanValue}</p>
        </div>
      </form>
`
}
