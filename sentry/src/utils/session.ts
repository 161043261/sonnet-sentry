const DEVICE_ID_KEY = "lark_sentry_device_id";
const SESSION_ID_KEY = "lark_sentry_session_id";

export function getDeviceId(): string {
  try {
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem(DEVICE_ID_KEY, deviceId);
    }
    return deviceId;
  } catch (e) {
    return crypto.randomUUID();
  }
}

export function getSessionId(): string {
  try {
    let sessionId = sessionStorage.getItem(SESSION_ID_KEY);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(SESSION_ID_KEY, sessionId);
    }
    return sessionId;
  } catch (e) {
    return crypto.randomUUID();
  }
}

export function refreshSessionId(): string {
  const newSessionId = crypto.randomUUID();
  try {
    sessionStorage.setItem(SESSION_ID_KEY, newSessionId);
  } catch (e) {}
  return newSessionId;
}
