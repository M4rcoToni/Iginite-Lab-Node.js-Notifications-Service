import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
  abstract create(notificastion: Notification): Promise<void>;

}
