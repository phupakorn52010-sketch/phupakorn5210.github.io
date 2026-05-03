const shareButton = document.querySelector("#shareButton");

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: "บ้านใหม่แม่ก๊ะเหนือ เริ่ม 1.49 ล้าน",
    text: "บ้านใหม่แม่ก๊ะเหนือ ซอย 1 ที่ดิน 66.2 ตร.ว. เลือกแบบ 2-3 ห้องนอน พร้อมช่วยยื่นสินเชื่อฟรี",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  window.open(facebookUrl, "_blank", "noopener,noreferrer,width=680,height=520");
});
