// Array untuk menyimpan produk
let products = [];

// Fungsi untuk memperbarui daftar produk
function updateProductList() {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Hapus daftar produk sebelumnya

  if (products.length === 0) {
    productList.innerHTML = "<p>Belum ada produk yang ditambahkan.</p>";
    return;
  }

  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Harga: Rp ${product.price}</p>
      <button onclick="deleteProduct(${index})">Hapus</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Fungsi untuk menambahkan produk
document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;

  products.push({ name: productName, price: productPrice });

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";

  updateProductList();
});

// Fungsi untuk menghapus produk
function deleteProduct(index) {
  products.splice(index, 1);
  updateProductList();
}
