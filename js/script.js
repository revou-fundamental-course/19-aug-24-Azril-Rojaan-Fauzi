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

const date = new Date();
document.querySelector('.second-form').innerHTML = `
  <form class="second-form">
        <div class="second-group-form js-second-group-form">
          <p>Current Time : ${date}</p>
          <p> </p>
          <p>Nama : ${namaValue}</p>
          <p>Tanggal lahir : ${tanggalValue}</p>
          <p>Jenis Kelamin : ${genderValue}</p>
          <p>Pesan : ${pesanValue}</p>
        </div>
      </form>
`
}

function deleteButton(){
  document.querySelector('.main-form').innerHTML = `
    <form class="main-form">
        <div class="main-group">
        <div class="form-group">
          <label for="nama">Nama </label>
          <input type="text" id="nama" name="nama" placeholder="Nama" class="js-input-nama">
      </div>
      <div class="form-group">
          <label for="tanggal-lahir">Tanggal Lahir </label>
          <input type="date" id="tanggal-lahir" name="tanggal-lahir" class="js-input-tanggal" >
      </div>
      <div class="form-group">
          <label>Jenis Kelamin </label>
              <label><input type="radio" name="gender" value="Laki-Laki"> Laki-Laki</label>
              <label><input type="radio" name="gender" value="Perempuan"> Perempuan</label>
      </div>
      <div class="form-group">
          <label for="pesan">Pesan </label>
          <textarea id="pesan" name="pesan" placeholder="Pesan" class="js-input-pesan"></textarea>
      </div>
      </form>
  `
}

function replaceName(){
  let name = prompt('Masukkan nama anda :','')
  document.querySelector('.name').innerHTML=name;
}
replaceName();
