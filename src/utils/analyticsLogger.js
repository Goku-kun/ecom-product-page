import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

logEvent(analytics, "notification_received");
