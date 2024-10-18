let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "belum") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm`;
   task.innerHTML = `
         <p class="text-gray-800">${title}</p>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-green-600 cursor-pointer btn-selesai">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 cursor-pointer btn-hapus"">
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
