self.addEventListener("install", (event) => {
  self.skipWaiting(); // 대기 중인 서비스 워커를 즉시 활성화
});

// 활성화 이벤트
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim()); // 현재 클라이언트에 대한 제어 권한을 즉시 가져옵니다.
});

// 메시지 이벤트
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting(); // 대기 중인 서비스 워커를 즉시 활성화
  }
});
