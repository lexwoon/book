import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var FirebasePlugin: any;

@Injectable()
export class AnalyticsService {

    private isDevice: boolean = false;

    constructor(private platform: Platform) {
        this.isDevice = !this.platform.is('core');
    }

    logPageView(pageName) {
        if (this.isDevice) {
            FirebasePlugin.logEvent('page_view', { page: `${pageName}` } );
        } else {
            console.log(`logPageView - ${pageName}`);
        }        
    }

    logViewItem(itemId, itemName, itemCategory) {
        if (this.isDevice) {
            FirebasePlugin.logEvent('view_item', { item_id: `${itemId}`, 
            item_name: `${itemName}`, item_category: `${itemCategory}`  } );
        } else {
            console.log(`VIEW_ITEM - ${itemId} + ${itemName} + ${itemCategory}`);
        }     
    }

    logSelectContent(itemId, itemName, contentType) {
        if (this.isDevice) {
            FirebasePlugin.logEvent('select_content', { item_id: `${itemId}`, 
            item_name: `${itemName}`, content_type: `${contentType}` } );
        } else {
            console.log(`SELECT_CONTENT - ${itemId} + ${itemName} + ${contentType}`);
        }     
    }

    logUnlock_achievement(achievementId)
    {
        if (this.isDevice) {
            FirebasePlugin.logEvent('unlock_achievement', { achievement_id: `${achievementId}`} );
        } else {
            console.log(`unlock_achievement - ${achievementId}`);
        }    


    }

    logCustomEvent(eventCode, bundle )
    {
        if (this.isDevice) {
            FirebasePlugin.logEvent(eventCode, bundle );
        } else {
            console.log(`${eventCode} - ${bundle}`);
        }    
    }

    setUserId(uid) {
        if (this.isDevice) {
            FirebasePlugin.setUserId(uid);
        } else {
            console.log(`setUserId - ${uid}`);
        }
    }

    setUserProperty(key, value) {
        if (this.isDevice) {
            FirebasePlugin.setUserProperty(key, value);
        } else {
            console.log(`setUserProperty - key:${key} - value:${value}`);
        }
    }

    

}