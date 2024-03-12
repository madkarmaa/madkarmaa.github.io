import { type Step } from '@/types';

export const STEPS: Step[] = [
    {
        title: 'Download the ReVanced Manager',
        description:
            'Go to <a href="https://revanced.app/download" target="_blank">the official website</a>, download and install the <b>ReVanced Manager</b>.',
        media_path: '/revanced/download_manager.png',
    },
    {
        title: 'BE AWARE!!!',
        description:
            'The official website is <b>ONLY</b> <a href="https://revanced.app" target="_blank">revanced.app</a>. Any other counterfeit website such as (<i>but not limited to</i>) <b>revanced.net</b> is fake and is most probably distributing malware.',
        media_path: '/revanced/revanced_net.png',
    },
    {
        title: 'Find the app you want to patch',
        description: 'Open the <b>ReVanced Manager > Patcher > Select an app > Search app</b>.',
        media_path: '/revanced/search_app.mp4',
    },
    {
        title: 'Search the app on the browser',
        description:
            "After you've found the app you want to patch, click on the button that says <b>Suggested</b> and open the first search result from the website <b>APKMirror</b>.",
        media_path: '/revanced/google_app.mp4',
    },
    {
        title: 'Download the APK of the app',
        description:
            'Make sure the title of the app states <b>nodpi</b>, then click on the <b>Download APK</b> button.',
        media_path: '/revanced/download_apk.mp4',
    },
    {
        title: 'Select the APK in the manager',
        description:
            'Go back to the <b>ReVanced Manager > Patcher > Select an app > Storage</b> (the button in the lower right corner), then search for the file you just downloaded.',
        media_path: '/revanced/select_from_storage.mp4',
    },
    {
        title: 'Select the default set of patches',
        description:
            'On the patcher screen, click on the <b>Selected patches</b> box, then click on the <b>Default</b> button at the top of the screen, then click on <b>Done</b> (lower right corner).',
        media_path: '/revanced/set_default.mp4',
    },
    {
        title: 'Want to customize the patches selection?',
        description:
            "Maybe the default set of patches isn't enough for you, so go ahead and select/deselect the patches you want!",
    },
    {
        title: 'Patch the app',
        description: 'Click on the <b>Patch</b> button in the lower right corner of the screen, and... just wait :P',
        media_path: '/revanced/patch_app.mp4',
    },
    {
        title: 'Install the app',
        description:
            "Once the patching process is complete, click on the <b>Install</b> button in the lower right corner, and you're good to go!",
        media_path: '/revanced/install_app.mp4',
    },
    {
        title: "Still can't understand?",
        description: 'Watch a video tutorial <a href="#" target="_blank">here</a>.',
    },
];
