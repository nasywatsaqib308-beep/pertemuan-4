// 1. getElementById()
document.getElementById("header-utama").textContent = "Seleksi ID Berhasil";

// 2. getElementsByClassName()
let produkItems = Array.from(document.getElementsByClassName("produk-item"));
produkItems.forEach(item => {
  item.classList.add("tebal");
  item.textContent = "[UPDATED] " + item.textContent;
});

// 3. querySelector() untuk data-status="pending"
let pendingElement = document.querySelector('[data-status="pending"]');
if (pendingElement) {
  pendingElement.style.backgroundColor = "yellow";
}

// 4. querySelectorAll() untuk semua <li> di dalam <ul>
let listItems = document.querySelectorAll("ul li");
listItems.forEach(li => {
  li.innerHTML = "<span>Konten Baru dari JS</span>";
});
