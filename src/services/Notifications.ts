import '@/assets/js/messenger/build/js/messenger';
import '@/assets/js/messenger/build/js/messenger-theme-flat';

declare const Messenger: any;

class Notifications {
    info(message: string) {
        Messenger().info({
            message: message,
            theme: 'air',
            extraClasses: 'messenger-fixed messenger-on-top messenger-on-right messenger-theme-air',
            hideAfter: 120
        });
    }

    error(message: string) {
        Messenger().post({message, type: 'error', extraClasses: 'messenger-on-top'});
    }
}

const instance = new Notifications();

export default instance;