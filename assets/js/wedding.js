document.querySelector(".btn-wish").addEventListener("click", function () {
  const name = document.getElementById("first_name").value.trim();
  const wish = document.getElementById("wish").value.trim();

  if (!name || !wish) {
    alert("กรุณากรอกชื่อและคำอวยพรให้ครบ");
    return;
  }

  fetch(
    "https://script.google.com/macros/s/AKfycby-as4uRlkVM5YVCUab7u3l1uIGLKYvwPuw9O8XesBtE2J9A2Uh4FJEvAzTZmZbZK3TWg/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        first_name: name,
        wish: wish,
      }),
    }
  )
    .then((res) => res.text())
    .then((text) => {
      // ล้างค่าฟอร์ม
      document.getElementById("first_name").value = "";
      document.getElementById("wish").value = "";

      // แสดง Modal ขอบคุณ
      const thankYouModal = new bootstrap.Modal(
        document.getElementById("thankYouModal")
      );
      thankYouModal.show();
    })
    .catch((err) => {
      console.error("เกิดข้อผิดพลาด", err);
      alert("ขออภัย ส่งคำอวยพรไม่สำเร็จ");
    });
});
